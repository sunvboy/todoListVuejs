<template>
  <div class="col-12">
    <div class="form-group">
      <b-dropdown id="dropdown-1" text="Sort by">
        <b-dropdown-item v-on:click="handleSort('title','asc')">Title ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSort('title','desc')">Title DESC</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item v-on:click="handleSort('level','asc')">LEVEL ASC</b-dropdown-item>
        <b-dropdown-item v-on:click="handleSort('level','desc')">LEVEL DESC</b-dropdown-item>
      </b-dropdown>
      <span class="order badge badge-success badge-medium">{{orderTitle}} - {{orderDir}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-sort",
  props:{
    orderTitle:{type: String,default: 'title'},
    orderDir:{type: String,default: 'asc'},
  },
  data() {
    return {};
  },
  methods:{
    handleSort(orderTitle,orderDir){
      let data = {orderTitle,orderDir}
      //console.log('handleSort c-sort',orderTitle,orderDir);
      this.$emit('handleSort',data);

    }
  }
};
</script>

<style>
  .order{
    text-transform: uppercase;

  }
</style>