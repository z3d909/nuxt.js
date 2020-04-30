import config from '~/.nuxt/config'

// eslint-disable-next-line no-console
console.log(`[${process.client ? 'client' : 'server'}] Runtime config:`, JSON.stringify(config))
