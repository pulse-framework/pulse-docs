import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import Docs from '@/views/Docs'
import PageNotFound from '@/views/404'

Vue.use(Router);

// ! Attempt to make route builder

// TODO Loop through frontmatter
// TODO Build array of objects from frontmatter
// TODO Build routes based on objects
// TODO Push routes to an array
// TODO Build routes from markdown files directory
// TODO Check the layout of pages before render

import fs from 'fs';
import fm from 'front-matter';

const mdRoutes = [];
fs.readdir("content", files => {
  files.foreach(file => {
    fs.readFile(`content/${file}`, data => {
      const { url } = fm(data);
      let content = {};
      content.path = 
      mdRoutes.push(url);
    });
  });
});
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/docs', name: 'docs', component: Docs },
  // { path: '/features', name: 'features', component: Home },
  // { path: '/changelog', name: 'changelog', component: Changelog },
  // will match everything
  ...mdRoutes.map(entry => ({
    path: `${entry.url}`,
    component: () => import(`./content/docs/${entry.attributes.version}/${entry}.md`)
  })),
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