import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_axios_77e00236 from 'nuxt_plugin_axios_77e00236' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_pluginutils_771d1414 from 'nuxt_plugin_pluginutils_771d1414' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_23ec5dc1 from 'nuxt_plugin_pluginrouting_23ec5dc1' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_46fa4d4e from 'nuxt_plugin_pluginmain_46fa4d4e' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_googleanalytics_3754efbe from 'nuxt_plugin_googleanalytics_3754efbe' // Source: ./google-analytics.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"yapoey","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"bodyAttrs":{"id":"body"},"link":[{"rel":"shortcut icon","href":"\u002Fassets\u002Fimg\u002Fyap.png"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:100,200,400,300,500,600,700"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,600,700,900"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Ffont-awesome.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fsimple-line-icons.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fslicknav.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fowl.carousel.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fslick.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fcss\u002Fresponsive.css"}],"script":[{"src":"\u002Fassets\u002Fjs\u002Fjquery-3.2.0.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fpopper.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fbootstrap.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fjquery.slicknav.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fisotope.pkgd.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fowl.carousel.min.js"},{"src":"\u002Fassets\u002Fjs\u002Fslick.min.js"},{"src":"\u002Fassets\u002Fjs\u002Ftyped.js"},{"src":"\u002Fassets\u002Fjs\u002Fjquery.scrollUp.min.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_axios_77e00236 === 'function') {
    await nuxt_plugin_axios_77e00236(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_771d1414 === 'function') {
    await nuxt_plugin_pluginutils_771d1414(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_23ec5dc1 === 'function') {
    await nuxt_plugin_pluginrouting_23ec5dc1(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_46fa4d4e === 'function') {
    await nuxt_plugin_pluginmain_46fa4d4e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_3754efbe === 'function') {
    await nuxt_plugin_googleanalytics_3754efbe(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
