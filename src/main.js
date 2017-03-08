import Vue from 'vue'
import App from './App.vue'
import Collapsible from './collapsible.vue'

new Vue({
  el: '#app',
  render: h => h(Collapsible, {props: {title: 'title', content: 'content'}})
})
