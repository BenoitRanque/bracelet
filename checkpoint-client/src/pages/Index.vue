<template>
  <q-page class="flex flex-center">
    <div>
      <q-spinner-rings v-if="ready" :color="statusColor" size="100vw" style="max-height: 50vh; max-width: 80vw;"></q-spinner-rings>
      <div v-else class="q-headline">Por favor configurar servidor y punto de control antes de uso</div>
    </div>
    <q-page-sticky position="top-right" :offset="[8, 8]">
      <q-btn @click="showSettings" color="light" icon="settings" flat round dense/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { GraphQLClient } from 'graphql-request'

const successAudio = new Audio('statics/success.mp3')
const failureAudio = new Audio('statics/failure.mp3')

export default {
  name: 'PageIndex',
  data () {
    return {
      statusColor: 'blue',
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
    resetStatusColor () {
      this.statusColor = 'blue'
    },
    success (response) {
      this.statusColor = 'green'

      successAudio.play()

      const braceletCode = response.check.bracelet.code

      const productNames = response.check.bracelet.group.activation.products.reduce((names, { name }) => {
        names.push(name)
        return names
      }, [])

      this.$q.notify({
        type: 'positive',
        message: `${braceletCode} ${productNames.join(', ')}`,
        timeout: 4000,
        // detail: 'Optional detail message.',
        position: 'top' // 'top', 'left', 'bottom-left' etc
      })
    },
    failure (error) {
      this.statusColor = 'red'

      failureAudio.play()

      this.$q.notify({
        type: 'negative',
        message: error.response.errors.map(({ message }) => message).join(', '),
        timeout: 6000,
        // detail: 'Optional detail message.',
        position: 'bottom' // 'top', 'left', 'bottom-left' etc
      })
    },
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
            timestamp
            checkpoint {
              name
            }
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
        .then(this.success)
        .catch(this.failure)
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
    successAudio.onended = this.resetStatusColor
    failureAudio.onended = this.resetStatusColor
    window.addEventListener('keypress', this.scanInputHandler)
  },
  beforeDestroy () {
    window.removeEventListener('keypress', this.scanInputHandler)
  }
}
</script>
