<template>
  <div id="editor">
    <ol class="tabs">
			<li v-for="i in [0,1,2,3,4,5]" 
					v-bind:class="{active: currentTab === i}"
					v-on:click="currentTab = i">
				<svg class="icon" aria-hidden="true">
					<use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
				</svg>
      </li>
    </ol>
    <ol class="pannels">
      <li v-bind:class="{active: currentTab === 0}">
				<h2>个人信息</h2>
				<el-form>
					<el-form-item label="姓名">
						<el-input v-model="profile.name"></el-input>
					</el-form-item>
					<el-form-item label="城市">
						<el-input v-model="profile.city"></el-input>
					</el-form-item>
					<el-form-item label="出生年月">
						<el-input v-model="profile.birth"></el-input>
					</el-form-item>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<h2>工作经历</h2>
				<el-form>
					<div v-for="(work, index) in workExperience">
						<el-form-item label="公司名称">
							<el-input v-model="work.company"></el-input>
						</el-form-item>
						<el-form-item label="工作内容">
							<el-input v-model="work.content"></el-input>
						</el-form-item>
					</div>
					<el-button type="primary" v-on:click="addWorkExperience">添加</el-button>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<h2>学习经历</h2>
				<el-form label-position="top">
					<el-form-item label="学校名称">
						<el-input v-model="learnExperience.school"></el-input>
					</el-form-item>
					<el-form-item label="学位">
						<el-input v-model="learnExperience.degree"></el-input>
					</el-form-item>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<h2>项目经历</h2>
				<el-form label-position="top">
					<el-form-item label="姓名">
						<el-input v-model="profile.name"></el-input>
					</el-form-item>
					<el-form-item label="城市">
						<el-input v-model="profile.city"></el-input>
					</el-form-item>
					<el-form-item label="出生年月">
						<el-input v-model="profile.birth"></el-input>
					</el-form-item>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<h2>获奖经历</h2>
				<el-form label-position="top">
					<el-form-item label="姓名">
						<el-input v-model="profile.name"></el-input>
					</el-form-item>
					<el-form-item label="城市">
						<el-input v-model="profile.city"></el-input>
					</el-form-item>
					<el-form-item label="出生年月">
						<el-input v-model="profile.birth"></el-input>
					</el-form-item>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<h2>联系方式</h2>
				<el-form label-position="top">
					<el-form-item label="姓名">
						<el-input v-model="profile.name"></el-input>
					</el-form-item>
					<el-form-item label="城市">
						<el-input v-model="profile.city"></el-input>
					</el-form-item>
					<el-form-item label="出生年月">
						<el-input v-model="profile.birth"></el-input>
					</el-form-item>
				</el-form>
			</li>
    </ol>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "bag", "book", "project", "icongroup05", "phone"],
      profile: {
        name: "",
        city: "",
        birth: ""
      },
			workExperience: [
				{company: '',content: ''}
			],
			learnExperience: {
				school: '',
				degree: ''
			}
    };
  },
	methods: {
		addWorkExperience() {
			this.workExperience.push({
				company: '',
				content: ''
			})
		},
		removeWorkExperience(index) {
			this.workExperience.splice(index, 1)
		}
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
    li {
      display: none;

      &.active {
        display: block;
      }
    }
  }
}
</style>
