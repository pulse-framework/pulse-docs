<template>
  <div class="flex">
    <div class="pt-4 border-r container mx-auto pt-6 rounded p-5 lg:mr-8 lg:w-2/12">
      <Sidebar :version="version"/>
    </div>
    <div class="pt-4 container mx-auto rounded pt-6 p-5 md:w-screen lg:w-10/12">
      <markdown-it-vue class="md-body" :content="content" />
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import LayoutDefault from '@/layouts/LayoutDefault'
import Sidebar from '@/components/Sidebar'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: `Docs`,
  components: {
    MarkdownItVue,
    Sidebar
  },
  props: {
    data: {
      type: Object,
    },
    rawPath: {
      type: String,
      default: ''
    },
    content: { 
      type: String,
      default: ''
    },
    version: {
      type: String,
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  }
};
</script>