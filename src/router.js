
// import fm from 'front-matter';
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Docs from '@/views/Docs';
import PageNotFound from '@/views/404';
//  import * as fs from 'fs'
 const { mdRoutes } = require('./manifest')

Vue.use(Router);

const docRoutes = Object.keys(mdRoutes).map(section => {
	const children = mdRoutes[section].map(child => ({
		path: child.path,
		name: child.name,
		component: () => import(`./content/${section}/${child.id}.md`)
	}))
	return {
		path: `/${section}`,
		name: section,
		component: () => import('./views/Docs.vue'),
		children
	}
  })
  module.exports = docRoutes;

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/docs', name: 'docs', component: Docs },
  // { path: '/features', name: 'features', component: Home },
  // { path: '/changelog', name: 'changelog', component: Changelog },
  // will match everything
  // ...docRoutes,
  {
    path: '*',
    component: PageNotFound
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});