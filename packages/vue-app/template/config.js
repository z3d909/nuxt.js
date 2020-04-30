let config = Object.create(null)

if (process.client) {
  const NUXT = window['<%= globals.context %>'] || {}
  if (NUXT.config) {
    config = Object.freeze(NUXT.config)
  }
}

if (process.server) {
  if (process.NUXT_RUNTIME_CONFIG) {
    config = Object.freeze(process.NUXT_RUNTIME_CONFIG)
  }
}

export default config
