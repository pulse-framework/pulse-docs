<template>
  <div class="flex">
    <div class="pt-4 border-r container mx-auto pt-6 rounded p-5 lg:mr-8 lg:w-2/12">
      <Sidebar :version="version"/>
    </div>
    <div class="pt-4 container mx-auto rounded pt-6 p-5 md:w-screen lg:w-10/12">
      <markdown-it-vue class="md-body" :content="content" :options="options"/>
    </div>
  </div>
</template>
<style>

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
  
  data () {
    return {
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        },
        githubToc: {
          tocFirstLevel: 1,
          tocLastLevel: 3,
          tocClassName: 'toc',
          anchorLinkSymbol: '#',
          anchorLinkSpace: true,
          anchorClassName: 'anchor',
          anchorLinkSymbolClassName: 'octicon octicon-link'
        }
      }
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  }
};
</script>