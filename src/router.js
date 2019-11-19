
// import fm from 'front-matter';
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Docs from '@/views/Docs';
import PageNotFound from '@/views/404';
// Import the manifest
const mdRoutes = require('@/static/manifest.json')

Vue.use(Router);

const docRoutes = [].concat(...Object.values(mdRoutes)).map(section => {
  // console.log(section)
	return {
		path: `/${section.path}`,
		name: section.path.split('/').pop(),
    component: Docs,
    props: { 
      data: section.data, 
      rawPath: section.rawPath, 
      content: section.content, 
      version: section.version 
    }
	}
})

const routes = [
  { path: '/', name: 'home', component: Home },
  // { path: '/features', name: 'features', component: Home },
  // { path: '/changelog', name: 'changelog', component: Changelog },
  // will match everything
  ...docRoutes,
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