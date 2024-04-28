<template>
  <div v-if="show" :class="msgType == 'error' ? 'error' : 'success'" class="msg-container">
    <p class="msg">
      <i v-if="this.msgType == 'success'" class="fas fa-check-circle"></i>
      <i v-if="this.msgType == 'error'" class="fas fa-exclamation-circle"></i>
      {{ msg }}
    </p>
    <p @click="hide" class="cross">x</p>
  </div>
</template>

<script>

export default {
  name:'BaseMessage',
  props: {
    msgType: String,
    msg: String,
  },
  data() {
    return {
      show: this.msg,
    };
  },

  methods: {
    hide() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.error {
  color: #d8000c;
  background-color: #ffbaba;
}
.success {
  color: #4f8a10;
  background-color: #dff2bf;
  background-size: 30px 30px;
}

.msg-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem 0.5rem 0.01rem 1rem;
  border: 1px solid;
  margin: 10px 0px;
  background-repeat: no-repeat;
  background-position: 10px center;
}
.cross {
  margin-top: 0;
  padding-top: 0;
  font-size: 1.1rem;
  cursor: pointer;
  padding-right: 0.8rem;
}
.msg {
  margin-top: 0.5rem;
}
i {
  font-size: 1.2rem;
  padding-right: 0.6rem;
}
</style>