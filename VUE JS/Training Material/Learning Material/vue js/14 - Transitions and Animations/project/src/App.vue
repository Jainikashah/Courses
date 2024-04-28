<template>
<div>
  <div class="container">
    <list-data></list-data>
  </div>
    <div class="container">
    <div class="block" :class="{animate: animatedBlock}" ></div>
    <button  @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para"
    :css="false" 
     @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled" @leave-cancelled="leaveCancelled">
     <!-- :css prop is set to false, which is optional, and written only when we are using js to control animations. and so vue will not look inside css and that saves time and improve performance. -->
      <p v-if="paraIsVisible">Sometimes visible</p>
    </transition>
    <button @click="togglePara">Toggle paragraph</button>
  </div>

    <div class="container">
      <transition name="fade-button">
        <button v-if="!usersAreVisible" @click="showUser">Show users</button>
        <button v-else @click="hideUser">Hide users</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</div>

</template>  

<script>
import ListData from './components/ListData.vue';

export default {
  components : {
    ListData
  },
  data() {
    return {
       dialogIsVisible: false, 
        animatedBlock : false,
        paraIsVisible : false,
        usersAreVisible : false,
        enterInterval : null,
        leaveInterval  :null
      };
  },
  methods: {
    beforeEnter(elm){
      console.log('before enter',elm)
      elm.style.opacity= 0;
    },
    beforeLeave(elm){
      console.log('before leave', elm)
      elm.style.opacity = 1
    },
    enter(elm, done){
      let round=1;
      console.log('enter', elm)
      this.enterInterval = setInterval(() => {
        elm.style.opacity = round*0.1;
        round++;
        if(round > 10){
          done(); //This is done so that, after this function is done, then and then only, afterEnter() will be called. If we dont add this, it will get immediately called after the enter(); wouldnt wait for the animtion to get completed.
          clearInterval(this.enterInterval);
          // here, we are using arrow function, so that, this inside clearInterval will refer to the data prop and not to the setInterval's this prop. 
        }
      }, 100)
    },
    afterEnter(elm){
      console.log('afterEnter',elm)
    },
    leave(elm, done){
      let round=1;
      console.log('Leave',elm);
      this.leaveInterval = setInterval(() => {
        elm.style.opacity =1- round *0.1;
        round++;
        if(round == 0){
          clearInterval(this.enterInterval);
          done();
        }
      }, 100)
    },
    afterLeave(elm){
      console.log('afterLeave', elm)
    },
    enterCancelled(elm){
      // called when the user presses the toggle button too fast and doesnt even wait for the animtion to get complete, then the enterCancelled method is called.
      console.log('enterCancelled',elm);
      clearInterval(this.enterInterval)

    },
    leaveCancelled(elm){
      console.log('leaveCancelled',elm);
      clearInterval(this.leaveInterval)
    },
    showUser(){
      this.usersAreVisible = true
    },
    hideUser(){
      this.usersAreVisible = false
    },
    togglePara(){
      this.paraIsVisible = !this.paraIsVisible
    },
    animateBlock(){
      this.animatedBlock =true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
.fade-button-enter-from{
  opacity: 0;
}
.fade-button-enter-active{
  transition: opacity 0.3s ease-in-out;
}
.fade-button-enter-to{
  opacity: 1;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
    animation: slideFade 1s ease-in-out;
  /* transform: translateX(-150px); */
}
@keyframes slideFade {
  0% {
    transform: translateX(0) scale(1);
  }
  50%{
    transform: translateX(-120px) scale(1.2);
  }
  100%{
    transform: translateX(0) scale(1);
  }
}
/* /* 
.para-enter-from{
  opacity: 0;
  transform: translateY(-30px);
} */
/* .para-enter-active{
  /* transition: all 1s ease-in-out; */
 /* animation: slideFade 1s ease-in-out;     /* for custom animation */
/*} */
/* .para-enter-to{
  opacity: 1;
  transform: translateY(0);
} */
/*
.para-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active{
   transition: all 1s ease-in-out;
}
.para-leave-to{
  opacity: 0;
  transform: translateY(30px);
  } */

</style>