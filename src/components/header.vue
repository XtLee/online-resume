<template>
  <div id="header">
    <h1>Resumer</h1>
    <div class="buttons">
      <div class="userActions" v-if="logined">
        <span>你好,{{user.username}}</span>
        <el-button plain @click.prevent="signOut">注销</el-button>
        <el-button plain @click.prevent="preview">预览</el-button>
      </div>
      <div class="userActions" v-else>
        <el-button type="primary" @click="active = true" plain>登录&注册</el-button>
      </div>
        <Sign @success="signSet($event)" v-show="active" @quitSign="quitSign"/>

    </div>

  </div>
</template>

<script>
import Sign from "./Sign.vue";
import AV from "../lib/leancloud.js";

export default {
  components: { Sign },
  data() {
    return {
      active: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    logined() {
      return this.user.id;
    }
  },
  methods: {
    preview() {
      this.$emit("preview");
    },
    signOut() {
      AV.User.logOut();
      this.$store.commit("removeUser");
    },
    signSet(user) {
      this.active = false;
      this.$store.commit("setUser", user);
    },
    quitSign() {
      this.active = false;
    }
  }
};
</script>



<style lang="less">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 240px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  background: white;
}
</style>


