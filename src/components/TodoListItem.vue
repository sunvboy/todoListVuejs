<template>
  <tr>
    <td class="text-center">{{index+1}}</td>
    <td>{{task.title}}</td>
    <td class="text-center">
      <span class="badge " v-bind:class="getClassNameLevel">{{getNameLevel}}</span>
    </td>
    <td>
      <button type="button" class="btn btn-warning">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import mapLevel from '../data/level';
export default {
  name: "todo-list-item",
  props: {
    task: { type: Object, default: null },
    index: { type: Number },
  },
  created(){ 
      console.log(mapLevel);

  }
  ,
  computed: {
    getNameLevel() {
    //   switch (this.task.level) {
    //     case 0:
    //       return "Cấp 1";
    //     case 1:
    //       return "Cấp 2";
    //     case 2:
    //       return "Cấp 3";
    //     default:
    //       return "";
    //   }
    return this.mapLevel[this.task.level].name;
    },
    getClassNameLevel() {
    //   switch (this.task.level) {
    //     case 0:
    //       return { 'badge-warning' : true };
    //     case 1:
    //       return { 'badge-primary' : true };
    //     case 2:
    //       return { 'badge-success' : true };
    //     default:
    //       return "";
    //   }
    return this.mapLevel[this.task.level].levelClass;
    }
  },
  data() {
    return {
        mapLevel: mapLevel
    };
  },
};
</script>

