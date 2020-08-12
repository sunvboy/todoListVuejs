<template>
  <div class="form-group add-task">
    <button v-if="!isShowform" v-on:click="onClickAddTask" type="button" class="btn btn-info btn-block">Add Task</button>
    <button v-else v-on:click="onClickAddTask" type="button" class="btn btn-primary btn-block">Close Task</button>
  </div>
</template>

<script>
export default {
  name: "c-add",
  props:{
        isShowform: {Type: Boolean, default: false}

  },
  data() {
    return {

    };
  },
  methods:{
    onClickAddTask(){
      //console.log('onClickAddTask c-add');
      this.$emit('handleAddForm');

    }
  }
};
</script>

