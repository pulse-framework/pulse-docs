<template>
	<div class="text-center mt-20 mb-16 border-2 border-gray-700 rounded shadow-2xl p-5 w-1/2 mx-auto">
		<p class="text-6xl border-b-1 border-gray-800 font-bold">404</p>
		<p class="text-4xl font-extrabold pb-2">What you were looking for was not found</p>
		<p class="pb-5">Bacon ipsum dolor amet short ribs cow turducken ground round, brisket tail strip steak pancetta chuck pig corned beef fatback pastrami pork chop picanha. Cow meatball shank, biltong turducken pancetta leberkas. Tenderloin venison drumstick beef ribs ham hock fatback ball tip buffalo cupim shank cow ribeye short loin strip steak. Shankle prosciutto buffalo, sirloin landjaeger turkey jerky turducken.</p>
	</div>
</template>
<style scoped>

</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  name: `Home`,
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
};
</script>