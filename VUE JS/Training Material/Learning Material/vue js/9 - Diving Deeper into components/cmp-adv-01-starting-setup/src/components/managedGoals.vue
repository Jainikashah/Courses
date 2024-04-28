<template>
    <div>
        <h2>Managed goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal" >Send</button>
        <teleport to="body"> 
            <error-dialog v-if="!isInputValid">
                <h2>Input Error</h2>
                <p>Kindly enter something..</p>
                <button @click="confirmDialog">Okay</button>
            </error-dialog>
        </teleport>
    </div>

 
</template>

<script>
import ErrorDialog from './ErrorDialog.vue';
export default {
  components: { ErrorDialog },
    data() {
        return {
            isInputValid : true
        }
    },
    methods : {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){   
                this.isInputValid = false; 
            }
        },
        confirmDialog(){
            this.isInputValid = true;
        }
    }
}
</script>