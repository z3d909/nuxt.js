let config = Object.create(null)

export function setConfig(_config) {
  config = Object.freeze(_config)
}

if (process.client) {
  const NUXT = window['<%= globals.context %>'] || {}
  if (NUXT.config) {
    setConfig(NUXT.config)
  }
}

if (process.server) {
  if (process.NUXT_RUNTIME_CONFIG) {
    setConfig(process.NUXT_RUNTIME_CONFIG)
  }
}

export default config
