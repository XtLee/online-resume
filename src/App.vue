<template>
  <div id="app" :class="{previewMode: previewMode}">
    <Header class="header" @preview="preview"/>
    <main>
      <Editor/>
      <Preview/>
    </main>
    <el-button type="primary" class="exit" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Editor from "./components/editor.vue";
import Preview from "./components/preview.vue";
import store from "./store/index.js";
import AV from "./lib/leancloud.js";
import getAVUser from "./lib/getAVUser.js";

export default {
  name: "app",
  components: {
    Header,
    Editor,
    Preview
  },
  created() {
    let state = localStorage.getItem("state");
    if (state) {
      state = JSON.parse(state);
    }
    this.$store.commit("initState", state);
    this.$store.commit("setUser", getAVUser());
  },
  data() {
    return {
      previewMode: false
    };
  },
  store,
  methods: {
    preview() {
      this.previewMode = true;
    },
    exitPreview() {
      this.previewMode = false;
    }
  }
};
</script>

<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app > main {
  display: flex;
  flex: 1;
  max-width: 1450px;
  height: calc(100vh - 88px);
  overflow: hidden;
  margin: 8px auto;
}
.previewMode > #header {
  display: none;
}
.previewMode #editor {
  display: none;
}
.previewMode #showPage {
  max-width: 1040px;
  margin: 32px auto;
}
.exit {
  display: none;
}
.previewMode > .exit {
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
