<template>
  <div id="showPage">
  <div class="layout">
    <header>
      <div id="intro">
            <h1>{{resume.profile.name}}</h1>
            <h4>{{resume.profile.job}}</h4>
      </div>
      <div id="contacts">
        <h3 class='contacts' v-if="resume.contact.phone.length > 0">联系方式</h3>
        <p v-if="resume.profile.city.length > 0"><span>A</span> {{resume.profile.city}}</p>
        <p v-if="resume.contact.phone.length > 0"><span>M</span>{{resume.contact.phone}}</p>
        <p v-if="resume.contact.mail.length > 0"><span>E</span> {{resume.contact.mail}}</p>
        <p v-if="resume.profile.blog.length > 0"><span>B</span> {{resume.profile.blog}}</p>
      </div>
    </header>
    <main>
      <div id="work" v-if="filter(resume.workExperience).length > 0">
        <h3>工作经历</h3>
        <ul>
          <li v-for="work in filter(resume.workExperience)">
            <p>{{work.company}} / <span class='date'>{{work.time}}</span></p>
            {{work.content}}
          </li>
        </ul>
      </div>
      <div id="edu" v-if="filter(resume.studyExperience).length > 0">
        <h3>教育经历</h3>
        <ul>
          <li v-for="study in filter(resume.studyExperience)">
            <p>{{study.school}} / <span class="date">{{study.duration}}</span></p>
            {{study.degree}}
          </li>
        </ul>
      </div>
      <div id="pro" v-if="filter(resume.projectsExperience).length > 0">
        <h3>项目经历</h3>
        <ul>
          <li v-for="project in filter(resume.projectsExperience)">
            <p>{{project.name}}</p>
            {{project.content}}
          </li>
        </ul>
      </div>
    </main>
    <div class="bottom">
      <div id="extra" v-if="filter(resume.winningExperience).length > 0">
        <h3>获奖经历</h3>
        <div class="act" v-for="winning in filter(resume.winningExperience)">
          <div class="icon"></div>
          <div class="value">
            <p>{{winning.winningName}}</p>
            {{winning.duration}}
          </div>
        </div>
      </div>
      <div id="skills" v-if="filter(resume.skills).length > 0">
        <h3>技能清单</h3>
        <ul>
          <li v-for="skill in filter(resume.skills)">
            <div class="icon"></div>
            <span>{{skill.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  props: ["resume"],
  methods: {
    filter(array) {
      return array.filter(item => !this.isEmpty(item));
    },
    isEmpty(object) {
      let empty = true;
      for (let key in object) {
        if (object[key]) {
          empty = false;
          break;
        }
      }
      return empty
    }
  }
};
</script>


<style lang="less">
#showPage {
  flex: 1;
  border-radius: 7px;
  background: white;
  margin: 3px 24px 3px 0;
  box-shadow: 0 1.5px 3px 1px rgba(0, 0, 0, 0.4);

  h3 {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid @date;
  }
  ul,
  li {
    list-style: none;
  }

  .black-point {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
  }
  @date: #aaa;
  @title: #000;

  .layout {
    width: 100%;
    padding: 24px 16px;
    background: #fff;

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;

      #intro {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 70px;

        .pic {
          background: #000;
          border-radius: 50%;
          width: 130px;
          height: 130px;
          color: #fff;
          text-align: center;
          line-height: 130px;
        }

        .name {
          margin-left: 50px;
        }
      }

      #contacts {
        width: 40%;

        .contacts {
          border-bottom: 3px solid @title;
          margin-bottom: 7px;
        }

        span {
          padding-right: 5px;
          font-weight: bold;
        }
      }
    }

    main {
      width: 90%;
      margin: 0 auto;
      display: block;

      #work,
      #edu,
      #pro {
        margin-bottom: 13px;

        h3 {
          width: 45%;
        }

        ul {
          margin-top: 15px;

          li {
            border-left: 2px solid desaturate(@date, 120%);
            padding-left: 17px;
            padding-bottom: 10px;
            position: relative;

            &:before {
              content: "";
              display: block;
              position: absolute;
              top: 0px;
              left: -6px;
              .black-point;
            }

            p {
              padding-bottom: 7px;
              font-size: 16px;

              .date {
                color: @date;
              }
            }
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 0 auto;

      #extra,
      #skills {
        width: 45%;

        .act {
          margin-top: 10px;

          .icon {
            float: left;
          }
        }

        .icon {
          width: 20px;
          height: 20px;
          border: 1px solid #000;
          border-radius: 50%;
          position: relative;

          &:before {
            content: "";
            display: block;
            width: 2px;
            height: 7px;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &:after {
            content: "";
            display: block;
            width: 2px;
            height: 7px;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }

        .value {
          margin-left: 70px;

          p {
            font-size: 16px;
            padding-bottom: 10px;
          }
        }

        ul {
          margin-top: 10px;

          li {
            float: left;
            line-height: 22px;
            margin: 5px 15px 25px 0;
            display: flex;
            justify-content: space-between;

            .icon {
              margin-right: 10px;
            }

            span {
              font-weight: bold;
            }
          }

          &:after {
            content: "";
            display: block;
            clear: both;
          }
        }
      }
    }
  }
}
</style>

