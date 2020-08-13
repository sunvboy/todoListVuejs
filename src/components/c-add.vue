<template>
  <div class="form-group add-task">
    <button v-if="!isShowform" v-on:click="handleToogleForm" type="button" class="btn btn-info btn-block">Add Task</button>
    <button v-else v-on:click="handleToogleForm" type="button" class="btn btn-primary btn-block">Close Task</button>
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
    handleToogleForm(){
      //console.log('onClickAddTask c-add');
      this.$emit('handleToogleForm');

    }
  }
};
</script>

