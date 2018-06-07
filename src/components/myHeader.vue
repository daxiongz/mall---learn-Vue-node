<template>
  <div class="myHeader">
    <div class="test">
      the mall of daxiong      
    </div>
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
<style lang="less" scoped>
  .myHeader {
    .test {
      background: #ccc;
      text-align: center;
      padding: 5px;
    }
  }
</style>