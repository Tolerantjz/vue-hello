<template>
   <div class="parent">
      <div class="title" @click="toggleContent">{{title}}</div>
      <transition name="slide"
                  @enter="setHeight"
                  @leave="clearHeight">
         <div class="content" v-show="contentVisible" ref="content">{{content}}</div>
      </transition>
   </div>
</template>

<script>
  export default {
    name   : 'Collapsible',
    props  : {
      title  : String,
      content: String
    },
    data() {
      return {
        contentVisible: true,
        contentHeight : 'auto'
      }
    },
    methods: {
      toggleContent(){
        this.contentVisible = !this.contentVisible
        this.$emit('toggleContent')
      },
      setHeight(el, done){
        el.style.height = this.contentHeight
      },
      clearHeight(el, done){
        el.style.height = 0
      }
    },
    mounted(){
      this.contentHeight = window.getComputedStyle(this.$refs.content).height
      this.$refs.content.style.height = this.contentHeight
    }
  }
</script>

<style lang="scss">
   .parent {
      border: 1px solid red;
      padding: 5px;
      .title {
         border: 1px solid green;
         margin-bottom: 5px;
      }
      .content {
         overflow-y: hidden;
         transition: height .2s;
      }
   }

</style>