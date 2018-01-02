<template>
  <div id="editor">
    <ol class="tabs">
			<li v-for="i in [0,1,2,3,4,5,6]" 
					v-bind:class="{active: currentTab === i}"
					v-on:click="currentTab = i">
				<svg class="icon" aria-hidden="true">
					<use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
				</svg>
      </li>
    </ol>
    <ol class="pannels">
      <li v-bind:class="{active: currentTab === 0}">
				<profileEditor v-bind:profile="profile"/>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<ArrayEditor v-bind:items="workExperience" v-bind:labels="{company: '公司', content: '工作经历'}"
				title="工作经历" />
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<ArrayEditor v-bind:items="studyExperience" v-bind:labels="{school: '学校名称', duration: '时间', degree: '学位'}"
				title="学习经历" />
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<ArrayEditor v-bind:items="projectsExperience" v-bind:labels="{project: '项目名称',  content: '项目内容'}"
				title="项目经历" />
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<ArrayEditor v-bind:items="winningExperience" v-bind:labels="{winningName: '奖励名称',  duration: '获奖时间'}"
				title="获奖经历" />
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<ArrayEditor v-bind:items="skills" v-bind:labels="{name: '专业技能'}"
				title="技能清单" />
			</li>
			<li v-bind:class="{active: currentTab === 6}">
				<h2>联系方式</h2>
				<el-form>
					<el-form-item label="QQ">
						<el-input v-model="contact.qq"></el-input>
					</el-form-item>
					<el-form-item label="Wechat">
						<el-input v-model="contact.wechat"></el-input>
					</el-form-item>
					<el-form-item label="Phone">
						<el-input v-model="contact.phone"></el-input>
					</el-form-item>
					<el-form-item label="E-mail">
						<el-input v-model="contact.mail"></el-input>
					</el-form-item>
				</el-form>
			</li>
    </ol>
  </div>
</template>


<script>
import profileEditor from './profileEditor.vue'
import ArrayEditor from './ArrayEditor.vue'
export default {
	components: { 
		profileEditor, ArrayEditor
	},
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "bag", "book", "project", "icongroup05", "jineng", "phone"],
      profile: {
        name: "",
        city: "",
        birth: ""
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
    };
  },
	methods: {

	}
};
</script>


<style lang="less">
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#editor {
  min-width: 550px;
  overflow: hidden;
  border-radius: 7px;
  background: white;
  margin: 3px 24px 3px 16px;
  box-shadow: 0 1.5px 3px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex: 1;

  ol {
    list-style: none;
    padding-top: 8px;
  }

  > .tabs {
    background: black;

    li {
      padding: 12px 28px;

      &.active {
        background: white;

        > svg {
          fill: black;
        }
      }

      svg {
        fill: white;
      }
    }
  }

  > .pannels {
		overflow: auto;
		width: 100%;
		padding: 32px;

    li {
      display: none;

      &.active {
        display: block;
			}
			
		}

		.content {
			position: relative;

			.remove {
				position: absolute;
				top: 8px;
				right: 0;
				padding: 4px 8px;
			}

			> hr {
				margin-bottom: 16px;
				border-color: rgba(0, 0, 0, 0.1);
			}
		}


    
  }
}
</style>
