<template>
  <div>
    <h2>个人信息</h2>
      <el-form>
        <el-form-item label="姓名">
          <el-input v-model="profile.name"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="profile.city"></el-input>
        </el-form-item>
        <el-form-item label="求职岗位">
          <el-input v-model="profile.job"></el-input>
        </el-form-item>
        <el-form-item label="个人博客">
          <el-input v-model="profile.blog"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

