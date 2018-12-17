<template>
  <q-page class="flex flex-center">
    <q-spinner-puff color="red" size="40vw"></q-spinner-puff>
    <q-page-sticky position="top-right" :offset="[8, 8]">
      <q-btn color="light" icon="settings" flat round dense/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { gql } from 'graphql-tag'

export default {
  name: 'PageIndex',
  data () {
    return {
      scanBuffer: ''
    }
  },
  computed: {
    checkpoint () {
      return { id: '' }
    }
  },
  methods: {
    requestCheck ({ checkpoint, bracelet }) {
      const request = gql`
        mutation CheckBracelet ($checkpoint: ID! $bracelet: String!) {
          check: createCheck(data: {
            checkpoint: { id: $checkpoint }
            bracelet: { code: $bracelet }
          }) {
            createdAt
            bracelet {
              code
              group {
                activation {
                  products (where: {
                    checkpoint: { id: $checkpoint }
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
