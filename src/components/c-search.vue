<template>
  <div class="col-12">
    <div class="input-group">
      <input 
      v-bind:value="strSearch"
      v-on:input = "handleSearch"
      
      type="text" class="form-control" placeholder="Search for..." />
      <span class="input-group-append">
        <button class="btn btn-info" type="button" v-on:click="hanldeClear">Clear!</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-search",
  props: {
    strSearch: {type: String,default:''}
  },
  data() {
    return {};
  },
  methods:{
    handleSearch(e){
      //console.log('handleSearch ở c-search',e.target);
      this.$emit('handleSearch',e.target.value);


    },
    hanldeClear(){
      this.$emit('handleSearch','');

    }

  }
};
</script>

