
// import fm from 'front-matter';
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Docs from '@/views/Docs';
import PageNotFound from '@/views/404';
// Import the manifest
const mdRoutes = require('@/static/manifest.json')
const version = '2.0.0'

Vue.use(Router);

let docRoutes = [].concat(...Object.values(mdRoutes)).map(section => {
    if(!section.hasOwnProperty(section.data.index)) {
      return {
        path: `/${section.path}`,
        name: `${section.slug}`,
        component: Docs,
        props: { 
          data: section.data, 
          rawPath: section.rawPath, 
          content: section.content, 
          version: section.version 
        }
      }
    }
  
  // console.log(section)
})
///const versions = [].concat(...Object.values(docRoutes)).map(section => {
  // if(section.data.index){
  //   docRoutes.pop()
  // }
  // return console.log(section)
//})

const routes = [
  { path: '/', name: 'home', component: Home },
  {path: '/docs', redirect: `/docs/${version}/intro`},
  //...versions,
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