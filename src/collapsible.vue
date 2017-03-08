<template>
   <div class="parent">
      <div class="title" @click="toggleContent">{{title}}</div>
      <transition name="scale">
         <div class="content" v-show="contentVisible">{{content}}</div>
      </transition>
   </div>
</template>

<script>
  export default {
    name: 'Collapsible',
    props  : {
      title  : String,
      content: String
    },
    data() {
      return {
        contentVisible: true
      }
    },
    methods: {
      toggleContent(){
        if (this.contentVisible) {
          this.contentVisible = false
        } else {
          this.contentVisible = true
        }
      }
    }
  }
</script>

<style lang="scss">
   .parent {
      border: 1px solid red;
      padding: 5px;
      .title{
         border: 1px solid green;
         margin-bottom: 5px;
      }
      .content{
         border: 1px solid blue;
      }
   }

   .scale-enter, .scale-leave-to {
      transform: scaleY(0)
   }
   .scale-enter-active, .scale-leave-active{
      transition: transform .2s;
   }
</style>