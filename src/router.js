import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'
import PageNotFound from '@/views/404'
Vue.use(Router);

// ! Attempt to make route builder

// TODO Loop through frontmatter
// TODO Build array of objects from frontmatter
// TODO Build routes based on objects
// TODO Push routes to an array
// TODO Build routes from markdown files directory
// TODO Check the layout of pages before render



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    // { path: '/docs', name: 'docs', component: Docs },
    // { path: '/features', name: 'features', component: Home },
    // { path: '/changelog', name: 'changelog', component: Changelog },
    // {
    //   // will match everything
    {
      path: '*',
      component: PageNotFound
    }
    
    // ...CHANGE_ME_TO_A_GOOD_VALUE.map(entry => ({
    //   path: `/${entry}`,
    //   name: entry,
    //   component: () => import(`./content/docs/${entry}.md`)
    // }))
  ]
});