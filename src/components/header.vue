<template>
  <div id="header">
    <h1>Resumer</h1>
    <div class="buttons">
      <el-button type="primary">注册</el-button>
      <el-button plain>登录</el-button>
      <el-button plain v-on:click="preview">预览</el-button>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    preview() {
      this.$emit('preview')
    } 
  }
}
</script>



<style lang="less">
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 240px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,.2);
    background: white;
  }
</style>


