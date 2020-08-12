<template>
  <!-- FORM : START -->
        <b-col lg="6" cols="12">
          <!-- ADD : START -->
          <CAdd v-bind:isShowform="isShowform" v-on:handleAddForm="handleAddForm"></CAdd>
          <!-- ADD : END -->
          <form  v-if="isShowform" action method="POST" class="form-inline justify-content-between">
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <input type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
              <label class="sr-only" for>label</label>
              <select name="ds" class="form-control" required="required">
                <option value="0">Small</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </select>
            </div>

            <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary" v-on:click="handleCancel">Cancel</button>
          </form>
        </b-col>
  <!-- FORM : END -->
  
</template>

<script>
import CAdd from "./c-add";
export default {
  name: "c-form",
  components: {
    CAdd
  },
  props: {
    isShowform: {Type: Boolean, default: false}
  },
  data() {
    return {};
  },
  methods:{
    handleAddForm(){
      //console.log('handleAddForm c-form');
      this.$emit("handleAddApp");
    },
    handleCancel(){
      this.$emit("handleAddApp");

    }

  }
};
</script>

