<template>
    <div id="app">
    	<div class="box">
    		<div @click = "prompt">
        <collapsible :class = {light:isLight} title = "I am titileOne" content = "One"></collapsible>
        	</div>
        <collapsible title = "I am titileTwo" content = "Two"></collapsible>
        <collapsible title = "I am titileThree" content = "Three"></collapsible>
        <div v-for = "(v,index) in list">
        	<div @click ="toggleContent">
        		<collapsible v-on:toggleContent = "test" title = "title" content = "content" >{{v.content}}</collapsible>
        	</div>
        </div>
      </div> 
    </div>
</template>

<script>
	import collapsible from './collapsible.vue'
    const list = [{},{},{}]
    export default {
    	components:{
    		collapsible
    	},
        data () {
            return {
                list,
//              isShowList:[false,false,false],
                isLight:true
//              isTriangle:true
            }
        },
        methods:{
		    prompt:function(){
		    	console.log(1)
		    },
		    toggleContent:function(){
		    	this.contentVisible = !this.contentVisible
		    	console.log(this.contentVisible)
		    },
		    test:function(){
		    	alert(1)
		    }
		  }
    }
</script>

<!--<style src = "./animate.min.css"></style>-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  border-radius: 10px;
}
.light:hover{color:lightgray;cursor: pointer;}
.triangle{width: 0;height: 0;border-top:5px solid transparent;border-right:5px solid transparent;border-left: 5px solid white;border-bottom: 5px solid transparent;display: inline-block;transition: all .5s;}
.triangle.down{border-top:5px solid white;border-right:5px solid transparent;border-left: 5px solid transparent;border-bottom: 5px solid transparent;margin-top:5px ;display: inline-block;}
.box{padding: 10px;}
</style>
