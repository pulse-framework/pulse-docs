<template>
    <div>
        <ul>
            <li v-for="item in links" :key="item" class="pl-2 text-xl">
                <button @click="gotoLink(item.slug)">{{ item.data.title }}</button>
            </li>
            <!-- <li :v-for="link in links">{{ link }}</li> -->
        </ul>
    </div>
</template>
<style>

</style>
<script>
// TODO Keep unwanted data out of memory
/*
 * {
 *   "1.0.0" {
 *     {},
 *     {},
 *     {},
 *   }
 * } 
 */
import routes from '@/static/manifest.json'

export default {
    data() {
        return {
            routes,  
            links: [].concat(...Object.values(routes[this.version]))
        }
    },
    props: {
        version: {
            type: String
        }
    },
    methods: {
         gotoLink: function (link) {
           // now we have access to the native event
           this.$router.push({name: link})
        }
    }
}
</script>
