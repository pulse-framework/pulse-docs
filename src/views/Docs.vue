<template>
  <div class="container lg:mx-auto lg:flex">
    <div class="mt-20 mb-16 border rounded shadow-2xl p-5 lg:mr-8 lg:w-3/12">
      <Sidebar :version="version"/>
    </div>
    <div class="mt-20 mb-16 border rounded shadow-2xl p-5 md:w-screen lg:w-9/12">
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