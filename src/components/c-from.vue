<template>
  <!-- FORM : START -->
        <b-col lg="6" cols="12">
          <!-- ADD : START -->
          <CAdd v-bind:isShowform="isShowform" v-on:handleToogleForm="handleToogleForm"></CAdd>
          <!-- ADD : END -->
          <form  v-if="isShowform" action method="POST" class="form-inline justify-content-between">
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <input v-model="taskTitle" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <select name="ds" class="form-control" required="required" v-model="taskLevel">
                <option value="0">Cấp 1</option>
                <option value="1">Cấp 2</option>
                <option value="2">Cấp 3</option>
              </select>
            </div>

            <button  v-if="this.taskSelected === null" type="button" class="btn btn-primary" v-on:click="handleAddNewTask">Submit</button>
            <button  v-else type="button" class="btn btn-primary" v-on:click="handleUpdateTask">Update</button>
            <button type="button" class="btn btn-secondary" v-on:click="handleCancel">Cancel</button>
          </form>
        </b-col>
  <!-- FORM : END -->
  
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import CAdd from "./c-add";
export default {
  name: "c-form",
  components: {
    CAdd
  },
  props: {
    isShowform: {Type: Boolean, default: false},
    taskSelected:{type:Object, default:null}
  },
  data() {
    return {
        taskTitle: '',
        taskLevel:0

    };
  },
  watch:{
      taskSelected: function(newData,oldData) {
        if(newData !== null){
          //thực hiện gán dữ liệu
          this.taskTitle = newData.title;
          this.taskLevel = newData.level;
        }

      }
  },
  beforeUpdate(){
    // if(this.taskSelected !== null){
    //   //thực hiện gán dữ liệu

    //   this.taskTitle = this.taskSelected.title;
    //   this.taskLevel = this.taskSelected.level;

    // }


  },
  methods:{
    handleUpdateTask(){
      var data = { 
        id:this.taskSelected.id, 
        title:this.taskTitle,
        level: parseInt(this.taskLevel)
      }
      this.$emit('handleUpdateTask',data);
      this.handleResetData();
    },
    handleAddNewTask(){
      let data = {
        id: uuidv4(),
        title: this.taskTitle,
        level: parseInt(this.taskLevel)
      }
      this.$emit("handleAddNewTask",data);
      this.handleCancel();


    },
    handleToogleForm(){
      this.$emit("handleToogleForm");
    },
    handleCancel(){
      this.$emit("handleToogleForm");
      this.handleResetData();

    },
    handleResetData(){
       this.taskTitle = '';
       this.taskLevel = 0
    }

  }
};
</script>

