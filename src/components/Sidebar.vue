<template>
    <div>
        <ul>
            <li v-for="item in links" :key="item" class="pl-2 text-xl">
                <a :href="item.path">{{ item.data.title }}</a>
            </li>
            <!-- <li :v-for="link in links">{{ link }}</li> -->
        </ul>
    </div>
</template>
<style>

</style>
<script>
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
}
</script>
