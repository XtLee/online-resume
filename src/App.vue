<template>
  <div id="app">
    <Header />
    <main>
      <Editor />
      <ShowPage />
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
  max-width: 1200px;
  margin: 8px auto;
}
</style>
