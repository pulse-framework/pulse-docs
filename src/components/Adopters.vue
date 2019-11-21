<template>
	<!-- <div>
		<AdopterCard
		:v-for="adopt in adopters"
		:name="adopt.name"
		:url="adopt.url"
		:logo="adopt.logo" />
	</div> -->
	<div class="container mx-auto px-8 py-4 mb-10 font-sans leading-loose front-content text-center justify-center">
        <div class="flex-1 overflow-y-auto inline-block" :v-for="adopter in adopters">
			<AdopterCard 
				:name="adopter.name"
				:url="adopter.url"
				:logo="adopter.logo"
			/>
        </div>
    </div>
</template>

<script>
import AdopterCard from '@/components/AdopterCard'
const companies = [
	{
		name: 'Notify',
		url: 'https://notify.me',
		logo: 'notify.svg'
	},
	{
		name: 'Notify2',
		url: 'https://notify.me',
		logo: 'notify.svg'
	}
];
export default {
	components: {
		AdopterCard
	},
	data: function() {
		return {
			adopters: companies
		}
	}
}
</script>