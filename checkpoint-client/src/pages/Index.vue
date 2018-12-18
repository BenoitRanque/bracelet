<template>
  <q-page class="flex flex-center">
    <q-spinner-puff v-if="ready" color="blue" size="40vw"></q-spinner-puff>
    <div v-else class="q-headline">Por favor configurar</div>
    <q-page-sticky position="top-right" :offset="[8, 8]">
      <q-btn @click="showSettings" color="light" icon="settings" flat round dense/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { GraphQLClient } from 'graphql-request'

export default {
  name: 'PageIndex',
  data () {
    return {
      scanBuffer: ''
    }
  },
  computed: {
    ready () {
      return this.endpoint && this.checkpoint
    },
    endpoint () {
      return this.$q.localStorage.get.item('ENDPOINT_URL')
    },
    checkpoint () {
      return this.$q.localStorage.get.item('CHECKPOINT_NAME')
    },
    GraphQL () {
      if (!this.endpoint) return null
      return new GraphQLClient(this.endpoint)
    }
  },
  methods: {
    showSettings () {
      this.$q.dialog({
        title: 'Confirmar',
        ok: 'Ir a configuracion',
        cancel: true
      }).then(() => {
        this.$router.push('/settings')
      }).catch(() => {
        // do nothing
      })
    },
    requestCheck ({ checkpoint, bracelet }) {
      if (!this.GraphQL) return

      const query = `
        mutation CheckBracelet ($checkpoint: String! $bracelet: String!) {
          check: createCheck(data: {
            checkpoint: { name: $checkpoint }
            bracelet: { code: $bracelet }
          }) {
            createdAt
            bracelet {
              code
              group {
                activation {
                  products (where: {
                    checkpoint: { name: $checkpoint }
                  }) {
                    name
                    description
                  }
                }
              }
            }
          }
        }
      `

      this.GraphQL.request(query, {
        checkpoint,
        bracelet
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.error(error)
        })
    },
    scanFinished (bracelet) {
      this.requestCheck({
        bracelet,
        checkpoint: this.checkpoint
      })
    },
    scanInputHandler (event) {
      if (event.key === 'Enter') {
        this.scanFinished(this.scanBuffer)
        this.scanBuffer = ''
      } else {
        this.scanBuffer += String.fromCharCode(event.charCode)
      }
    }
  },
  created () {
    window.addEventListener('keypress', this.scanInputHandler)
  },
  beforeDestroy () {
    window.removeEventListener('keypress', this.scanInputHandler)
  }
}
</script>
