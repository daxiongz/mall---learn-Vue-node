<template>
  <div class="myHeader">
    Hello, I'm here!
  </div>
</template>

<script>
  export default {
    name: "myHeader",
    data() {
      // data 必须函数
      return {
        msg: "Welcome to your Vue.js App"
      };
    }
  };
</script>

<!-- scoped 表示样式只应用于该组件 -->
<style scoped>
  
</style>