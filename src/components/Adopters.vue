<template>
	<div class="container mb-10 font-sans leading-loose front-content">
		<template v-for="item in adopters" class="flex items-center">
			<a :href="item.url">
				<div class="w-1/6 rounded flex-initial inline-block mx-2">
						<img class="h-64 w-5/6 mx-auto my-4 rounded-lg" 
						:src="item.logo" 
						alt="Company Logo"/>
				</div>
			</a>
		</template>
    </div>
</template>

<script>
export default {
	data () {
		return {
			adopters: [
				{
					name: 'Notify',
					url: 'https://notify.me',
					logo: 'https://assets.notify.me/notify.svg'
				}
			]
		}
	}
}
</script>