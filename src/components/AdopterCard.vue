<template>
    <div class="shadow-lg p-6 m-2 card border rounded-lg hover:bg-blue-400">
        <!-- <a :href="url"><img class="w-16 rounded-full mx-auto" :src="url" alt="Adopter"></a> -->
        <div class="px-6 py-4 overflow-auto">
            <a :href="link"><span class="font-bold text-xl mb-2" v-text="name"></span></a>
            <p class="text-gray-700 text-base" v-text="tagline"></p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
	props: {
		name: { required: true },
		url: { default: '#' },
		tagline: { default: '' },
		logo: { default: 'notify.svg' }
    },
}
</script>