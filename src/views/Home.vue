<template>
<div>
	<div class="container mx-auto flex mt-10 items-center mb-20">
		<div class="w-1/3">
			<p class="text-3xl font-extrabold">
				PulseJS
			</p>
			<p class="text-2xl">
				The Framework that Works For You!
			</p>
		</div>
		<div class="w-2/3">
			<Terminal class="mx-auto"/>
		</div>
	</div>
<!-- https://purr.objects-us-east-1.dream.io/i/chern.jpg -->
	<div class="bg-gray-800 text-gray-100 mt-6 px-10 pb-8 pt-4">
		<p class="text-center pb-4 text-3xl font-serif">Powered by PulseJS</p>
		<!-- Adopter Cards here -->
		<Adopters />
	</div>
</div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import Adopters from '@/components/Adopters'
import Terminal from '@/components/Terminal'
export default {
  name: `Home`,
  components: {
	Terminal,
	Adopters
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
};
</script>