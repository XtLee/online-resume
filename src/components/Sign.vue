<template>
<div id="Sign">
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="登录" name="first">
        <div class="ipt">
          <el-alert :title="errorMsg" type="error" show-icon v-if="signInerrorMsg !== ''"> </el-alert>
          <input type="text" placeholder="用户名" v-model="formData.username" required>
          <input type="password" placeholder="密码" v-model="formData.password" required>
        </div>
        <div class="actions">
          <input type="submit" @click="SignIn" value="登录">
        </div>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
        <div class="ipt">
          <el-alert :title="errorMsg" type="error" show-icon v-if="signUperrorMsg !== ''"> </el-alert>
          <input type="text" placeholder="请输入用户名" v-model="formData.username" required>
          <input type="password" placeholder="请输入密码" v-model="formData.password" required>
        </div>
        <div class="actions">
          <input type="submit" @click="SignUp" value="注册">
        </div>
    </el-tab-pane>
    <svg class="icon" aria-hidden="true" @click.prevent="quitSign">
      <use xlink:href="#icon-2guanbi"></use>
    </svg>
  </el-tabs>
</div>
</template>

<script>
import AV from "../lib/leancloud.js";
import getErrorMessage from "../lib/getErrorMessage.js";
import getAVUser from "../lib/getAVUser.js";

export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      signInerrorMsg: "",
      signUperrorMsg: "",
      activeName: 'first'
    };
  },
  methods: {
    SignUp() {
      let { username, password } = this.formData;
      let user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(
        () => {
          this.$emit("success", getAVUser());
        },
        error => {
          this.signUperrorMsg = getErrorMessage(error);
        }
      );
    },
    SignIn() {
      let { username, password } = this.formData;
      AV.User.logIn(username, password).then(
        () => {
          this.$emit("success", getAVUser());
        },
        error => {
          this.signInperrorMsg = getErrorMessage(error);
        }
      );
    },
    quitSign() {
      this.$emit('quitSign');
    }
  }
};
</script>

<style lang="less">
@proColor: #409eff;

#Sign {
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 1;

  .icon {
    fill: @proColor;
    width: 1em;
    height: 1em;
    position: absolute;
    top: -35px;
    right: 10px;
  }

  > .el-tabs {
    display: inline-block !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .el-tabs__item {
      height: 50px;
      line-height: 50px;
    }

    .el-tabs__content {
      overflow: visible;
    }
  }

  .ipt {
    padding: 30px;
    padding-top: 20px;

    input {
      -webkit-appearance: none;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 1;
      outline: 0;
      padding: 0 15px;
      -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      margin-bottom: 20px;

      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #ccc;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #ccc;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ccc;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #ccc;
      }
    }
    input[type="text"] {
      margin-top: 10px;
    }
  }
  .actions {
    padding-left: 30px;
    margin-top: -20px;

    input[type="submit"] {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid @proColor;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      color: #fff;
      background-color: @proColor;

      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
      }
    }
  }
}
</style>


