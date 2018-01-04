<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Header class="header" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume"/>
      <ShowPage v-bind:resume="resume"/>
    </main>
    <el-button type="primary" class="exit" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Editor from "./components/editor.vue";
import ShowPage from "./components/showPage.vue";

export default {
  name: "app",
  components: {
    Header,
    Editor,
    ShowPage
  },
  data() {
    return {
      previewMode: false,
      resume: {
        profile: {
          name: "",
          city: "",
          job: "",
          blog: ""
        },
        workExperience: [{ company: "", time: "", content: "" }],
        studyExperience: [{ school: "", duration: "", degree: "" }],
        projectsExperience: [{ name: "", content: "" }],
        winningExperience: [{ winningName: "", duration: "" }],
        skills: [{ name: "" }],
        contact: {
          qq: "",
          wechat: "",
          phone: "",
          mail: ""
        }
      }
    };
  },
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
