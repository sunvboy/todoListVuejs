<template>
  <div class="form-group add-task">
    <button v-on:click="onClickAddTask" type="button" class="btn btn-info btn-block">Add Task</button>
  </div>
</template>

<script>
export default {
  name: "c-add",
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

