import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da6f1b94 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _30bb8cd1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _24c443bc = () => interopDefault(import('../pages/blog/coding-test/index.vue' /* webpackChunkName: "pages/blog/coding-test/index" */))
const _3cb7889f = () => interopDefault(import('../pages/blog/courses/index.vue' /* webpackChunkName: "pages/blog/courses/index" */))
const _0418e3c5 = () => interopDefault(import('../pages/blog/coding-test/_categoryId/index.vue' /* webpackChunkName: "pages/blog/coding-test/_categoryId/index" */))
const _797cbe76 = () => interopDefault(import('../pages/blog/courses/_courseId/index.vue' /* webpackChunkName: "pages/blog/courses/_courseId/index" */))
const _6850b88a = () => interopDefault(import('../pages/blog/coding-test/_categoryId/_problemId/index.vue' /* webpackChunkName: "pages/blog/coding-test/_categoryId/_problemId/index" */))
const _dbefdec2 = () => interopDefault(import('../pages/blog/courses/_courseId/_lecture/index.vue' /* webpackChunkName: "pages/blog/courses/_courseId/_lecture/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _da6f1b94,
    name: "blog___en"
  }, {
    path: "/ko",
    component: _30bb8cd1,
    name: "index___ko"
  }, {
    path: "/blog/coding-test",
    component: _24c443bc,
    name: "blog-coding-test___en"
  }, {
    path: "/blog/courses",
    component: _3cb7889f,
    name: "blog-courses___en"
  }, {
    path: "/ko/blog",
    component: _da6f1b94,
    name: "blog___ko"
  }, {
    path: "/ko/blog/coding-test",
    component: _24c443bc,
    name: "blog-coding-test___ko"
  }, {
    path: "/ko/blog/courses",
    component: _3cb7889f,
    name: "blog-courses___ko"
  }, {
    path: "/ko/blog/coding-test/:categoryId",
    component: _0418e3c5,
    name: "blog-coding-test-categoryId___ko"
  }, {
    path: "/ko/blog/courses/:courseId",
    component: _797cbe76,
    name: "blog-courses-courseId___ko"
  }, {
    path: "/ko/blog/coding-test/:categoryId?/:problemId",
    component: _6850b88a,
    name: "blog-coding-test-categoryId-problemId___ko"
  }, {
    path: "/ko/blog/courses/:courseId/:lecture",
    component: _dbefdec2,
    name: "blog-courses-courseId-lecture___ko"
  }, {
    path: "/blog/coding-test/:categoryId",
    component: _0418e3c5,
    name: "blog-coding-test-categoryId___en"
  }, {
    path: "/blog/courses/:courseId",
    component: _797cbe76,
    name: "blog-courses-courseId___en"
  }, {
    path: "/blog/coding-test/:categoryId?/:problemId",
    component: _6850b88a,
    name: "blog-coding-test-categoryId-problemId___en"
  }, {
    path: "/blog/courses/:courseId/:lecture",
    component: _dbefdec2,
    name: "blog-courses-courseId-lecture___en"
  }, {
    path: "/",
    component: _30bb8cd1,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
