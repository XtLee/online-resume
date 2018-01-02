<template>
  <div>
    	<h2>工作经历</h2>
				<el-form>
					<div class="workExperience" v-for="(work, index) in workExperience">
						<el-form-item label="公司名称">
							<el-input v-model="work.company"></el-input>
						</el-form-item>
						<el-form-item label="工作内容">
							<el-input v-model="work.content"></el-input>
						</el-form-item>
						<el-button class="remove" type="primary" icon="el-icon-delete" v-on:click="removeWorkExperience(index)"></el-button>
						<hr>
					</div>
					<el-button type="primary" v-on:click="addWorkExperience">添加</el-button>
				</el-form>
  </div>
</template>

<script>
export default {
  props: ['workExperience'],
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
}
</script>

