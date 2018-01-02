<template>
  <div id="showPage">
  <div class="layout">
    <header>
      <div id="intro">
            <h1>李雪涛</h1>
            <h4>Web 前端</h4>
      </div>
      <div id="contacts">
        <h3 class='contacts'>CONTACTS</h3>
        <p><span>A</span> 河北省保定市</p>
        <p><span>M</span>135 8238 3434</p>
        <p><span>E</span> lixt1098@163.com</p>
        <p><span>B</span> https://www.jianshu.com/u/a1af6c5d3853</p>
      </div>
    </header>
    <main>
      <div id="work">
        <h3>WORK EXPERIENCE</h3>
        <ul>
          <li>
            <p>北京惠御科技有限公司 / <span class='date'>2017-2017</span></p>
            北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司北京惠御科技有限公司
          </li>
        </ul>
      </div>
      <div id="edu">
        <h3>EDUCATION</h3>
        <ul>
          <li>
            <p>保定职业技术学院 / <span class="date">2012-2017</span></p>
            保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院保定职业技术学院
          </li>
        </ul>
      </div>
    </main>
    <div class="bottom">
      <div id="extra">
        <h3>EXTRA CURRICULAR ACTIVITIES</h3>
        <div class="act">
          <div class="icon"></div>
          <div class="value">
            <p>音乐</p>
            音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐
          </div>
        </div>
      </div>
      <div id="skills">
        <h3>PROFESIONAL SKILLS</h3>
        <ul>
          <li>
            <div class="icon"></div>
            <span>HTML & CSS</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  props: ['resume']
}
</script>


<style lang="less">
#showPage {
  border-radius: 7px;
  background: white;
  margin: 3px 24px 3px 0;
  box-shadow: 0 1.5px 3px 1px rgba(0, 0, 0, 0.4);
}
</style>

