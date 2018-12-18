<template>
  <q-page class="flex flex-center">
    <q-list no-border>
      <q-item>
        <q-item-main>
          <div class="q-caption">Servidor</div>
          {{endpoint}}
          <span v-if="!endpoint" class="text-light">No hay servidor configurado</span>
        </q-item-main>
        <q-item-side>
          <q-btn @click="editEndpoint" dense flat icon="edit"></q-btn>
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main>
          <div class="q-caption">Punto de control</div>
          {{checkpoint}}
          <span v-if="!checkpoint" class="text-light">No hay punto de control configurado</span>
        </q-item-main>
        <q-item-side>
          <q-btn @click="editCheckpoint" dense flat icon="edit"></q-btn>
        </q-item-side>
      </q-item>
    </q-list>
    <q-page-sticky position="top-right" :offset="[8, 8]">
      <q-btn @click="$router.push('/')" color="primary" icon="close" dense/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { GraphQLClient } from 'graphql-request'

export default {
  name: 'Settings',
  data () {
    return {
      checkpoint: '',
      endpoint: '',
      checkpointOptions: []
    }
  },
  watch: {
    checkpoint (value) {
      this.$q.localStorage.set('CHECKPOINT_NAME', value)
    },
    endpoint (value) {
      this.$q.localStorage.set('ENDPOINT_URL', value)
      this.loadCheckpointOptions()
    }
  },
  methods: {
    loadCheckpointOptions () {
      if (!this.endpoint) return

      const client = new GraphQLClient(this.endpoint)

      client.request(`
        query LoadCheckpointOptions {
          checkpoints {
            name
          }
        }
      `)
        .then(response => {
          this.checkpointOptions = response.checkpoints.map(({ name }) => ({
            value: name,
            label: name
          }))
        })
        .catch(error => console.error(error))
    },
    readLocalstorage () {
      this.endpoint = this.$q.localStorage.get.item('ENDPOINT_URL')
      this.checkpoint = this.$q.localStorage.get.item('CHECKPOINT_NAME')
    },
    editEndpoint () {
      this.$q.dialog({
        title: 'Editar Servidor',
        message: 'Ejemplo: http://hostname:4000',

        // optional; we want an "OK" button
        ok: true, // takes i18n value, or String for "OK" button label

        // optional; we want a "Cancel" button
        cancel: true, // takes i18n value, or String for "Cancel" button label

        // optional; show an input box (make Dialog similar to a JS prompt)
        prompt: {
          model: '',
          type: 'text' // optional
        }
      })
        .then(endpoint => {
          try {
            const client = new GraphQLClient(endpoint)
            if (!client) {
              // do nothing
            }
            this.endpoint = endpoint
          } catch (error) {
            console.error(error)
          }
        })
        .catch(() => {
          // do nothing
        })
    },
    editCheckpoint () {
      this.$q.dialog({
        title: 'Editar Punto de Control',
        message: 'Seleccione el punto de control que coresponde a este dispositivo',

        // optional; we want an "OK" button
        ok: true, // takes i18n value, or String for "OK" button label

        // optional; we want a "Cancel" button
        cancel: true, // takes i18n value, or String for "Cancel" button label

        // optional; show a radio, checkbox or toggle
        options: {
          type: 'radio', // or 'checkbox' / 'toggle'
          model: this.checkpoint, // Array when checkbox/toggle! (like '[]')
          items: this.checkpointOptions
        }
      })
        .then(checkpoint => {
          this.checkpoint = checkpoint
        })
        .catch(() => {
          // do nothing
        })
    }
  },
  created () {
    this.readLocalstorage()
  }
}
</script>

<style scoped>

</style>
