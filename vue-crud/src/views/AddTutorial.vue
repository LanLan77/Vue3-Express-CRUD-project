<template>
  <h2>这里新增课程页面</h2>
  <el-form :model="tutorial" label-width="120px">
    <el-form-item label="课程名称">
      <el-input v-model="tutorial.title" />
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="tutorial.description" type="textarea" />
    </el-form-item>
    <el-form-item label="是否公开">
      <el-select v-model="tutorial.published">
        <el-option label="是" :value="true" />
        <el-option label="否" :value="false" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="Submit">创建课程</el-button>
    </el-form-item>
  </el-form>
</template>

<script  setup>
import axios from "axios";
import { reactive } from "vue";
import TutorialDataApi from "../api/TutorialDataApi";

const tutorial = reactive({
  title: "",
  description: "",
  published: false,
});

const Submit = () => {
  console.log(tutorial);
  TutorialDataApi.create(tutorial).then((res)=>{
      console.log(res)
  },err=>{
    console.log(err)
  })

  /* axios
    .post("http://localhost:3000/api/tutorials", {
      title: tutorial.title,
      description: tutorial.description,
      published: tutorial.published,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
};
</script>