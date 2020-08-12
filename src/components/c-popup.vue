<template>
  <div id="popup1" class="overlay" v-bind:class="{ 'active' : this.isPopup === true}">
      <div class="popup">
        <h2>Thông báo</h2>
        <a class="close" href="#" v-on:click="handleClose">&times;</a>
        <div class="content">
          Bạn có muốn xóa bài viết này không?
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "c-popup",
  props: {
      isPopup: {type:Boolean,default:false}
  },
  data() {
    return {
    };
  },
  methods:{
      handleClose(){
          this.$emit('handleClose');
      }
  }
};
</script>

