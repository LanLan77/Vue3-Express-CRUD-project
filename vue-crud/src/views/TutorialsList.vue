<template>
    <el-table :data="tutorialList" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.createAt }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.title }}</div>
              <div>address: {{ scope.row.description }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  
  <script setup>
  import { Timer } from "@element-plus/icons-vue";
  import TutorialDataApi from "../api/TutorialDataApi";
  import { onMounted, reactive ,ReactiveEffect,ref} from "vue";
  
  let tutorialList = reactive([]);
  
  onMounted(() => {
    TutorialDataApi.getAll()
      .then((data) => {
      //   tutorialList  = data;
              Object.assign(tutorialList,data)
  
        console.log(tutorialList)
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  const handleEdit = (index, row) => {
    console.log(index, row);
  };
  const handleDelete = (index, row) => {
    console.log(index, row);
  };
  </script>
  
  