<template>
    <div>
        <a :href="url">
            <div class="w-1/6 rounded flex-initial inline-block mx-2">
                    <img class="h-64 w-5/6 mx-auto my-4 rounded-lg" 
                    :src="logo" 
                    alt="Sunset in the mountains">
            </div>
        </a>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
	props: {
		url: { default: '#' },
		logo: { default: 'https://random.dog/eb6afea1-02d9-413e-babf-b75ff2426006.jpg' }
    },
}
</script>