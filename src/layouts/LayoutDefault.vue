<template>
	<div>
		<Header class="border-b shadow" />
		<main>
			<slot/>
		</main>
		<Footer class="border-t" />
	</div>	
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
	components: {
		Header,
		Footer,
	}
}
</script>


