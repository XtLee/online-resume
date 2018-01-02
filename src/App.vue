<template>
  <div id="app">
    <Header />
    <main>
      <Editor v-bind:resume="resume"/>
      <ShowPage v-bind:resume="resume"/>
    </main>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Editor from './components/editor.vue'
import ShowPage from './components/showPage.vue'

export default {
  name: 'app',
  components: {
    Header, Editor, ShowPage
  },
  data() {
    return {
      resume: {
          profile: {
          name: "",
          city: "",
          job: ""
        },
        workExperience: [
          {company: '',content: ''}
        ],
        studyExperience: [
          {school: '', duration: '', degree: ''}
        ],
        projectsExperience: [
          {project: '', content: ''}
        ],
        winningExperience: [
          {winningName: '', duration: ''}
        ],
        skills: [
          {name: ''}
        ],
        contact: {
          qq: '',
          wechat: '',
          phone: '',
          mail: ''
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
