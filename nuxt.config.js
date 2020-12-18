export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'school-lib',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {scr: 'https://hm.baidu.com/hm.js?9be5940c4751a630c3c5c971cc9d090d'}
    ]
  },
  router: {
    // middleware: ['midd', 'auth']
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/baidu',
    // '@/plugins/router'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],

    /*
    ** Run ESlint on save
    */ 
	extend(config, ctx) {
		// Run ESLint on save
		if (ctx.isDev && ctx.isClient) {
			config.module.rules.push({
				enforce: "pre",
				test: /\.(js|vue)$/,
				loader: "eslint-loader",
				exclude: /(node_modules)/
			})
		}
    }
  }
}
