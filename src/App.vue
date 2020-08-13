<template>

  <div id="app">
    <b-container>
      <!-- TITLE : START -->
      <CTitle></CTitle>
      <!-- TITLE : END -->
      <b-row>
        <!-- CONTROL (SEARCH + SORT + ADD) : START -->
        <b-col lg="6" cols="12">
          <b-row>
            <!-- SORT : START -->
            <CSort
            v-bind:orderTitle="orderTitle"
            v-bind:orderDir="orderDir"
            v-on:handleSort = "handleSort"
            ></CSort>
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <CSearch 
            v-on:handleSearch = "handleSearch"
            v-bind:strSearch="strSearch"
            
            ></CSearch>

            <!-- SEARCH : END -->
          </b-row>
        </b-col>
        <!-- CONTROL (SEARCH + SORT + ADD) : END -->

        
        <CForm 
        v-on:handleUpdateTask="handleUpdateTask"
        v-on:handleToogleForm="handleToogleForm" 
        v-on:handleAddNewTask="handleAddNewTask" 
        v-bind:isShowform="isShowform"
        v-bind:taskSelected="taskSelected"
        
        ></CForm>

      </b-row>

      <!-- LIST : START -->
      <TodoListTable v-bind:listTask="listTaskSort" v-on:handleDelete="handleDelete" v-on:handleEdit="handleEdit"></TodoListTable>
    </b-container>

    <CPopup v-bind:isPopup="isPopup" v-on:handleClose="handleClose"></CPopup>


  </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable";
import CTitle from "./components/c-title";
import CSort from "./components/c-sort";
import CSearch from "./components/c-search";
import CForm from "./components/c-from";
import dataTask from "./data/task";
import CPopup from "./components/c-popup";

export default {
  name: "app",
  components: {
    TodoListTable,
    CTitle,
    CSort,
    CSearch,
    CForm,
    CPopup,
  },
  data() {
    return {
      listTask: null,
      isShowform: false,
      isPopup: false,
      strSearch: '',
      orderTitle: 'title',
      orderDir: 'asc',
      taskSelected: null
    };
  },watch:{
    listTask: function(newlistTask){
      var taskString = JSON.stringify(newlistTask);
      localStorage.setItem('listTaskLocal',taskString);
    }
  }
  ,
  computed:{
    listTaskSearch(){
      let strSearch = this.strSearch.toLowerCase();
      var newArray = [];
      this.listTask.forEach(function(item,index){
        //search dùng inlucdes
        if(item.title.toLowerCase().includes( strSearch ) === true){
          newArray.push(item);

        }
      })
      //ngoài ra sử dụng filter để làm

      return newArray;
    },
    listTaskSort(){
      //lưu ý cần clone sang 1 mảng mới
      var listTask = [...this.listTaskSearch];
      listTask.sort(this.compareSort);
      // if(this.orderTitle === 'title'){
      //   listTask.sort(this.orderTitle);

      // }else if(this.orderTitle === 'level'){
      //   listTask.sort(this.compareLevel);
      // }
      //console.log(this.listTask);
      //console.log(listTask);

      return listTask;
    }
  }
  ,
  created(){
      // Lay listask từ localStorage

      let listTaskLocal = localStorage.getItem('listTaskLocal');
      console.log(listTaskLocal);

      if(listTaskLocal !== null){
          this.listTask = JSON.parse(listTaskLocal);
      }else{
        this.listTask = [];
      }

  },
  methods:{
    handleUpdateTask(data){

      //console.log('handleUpdateTask',data);
      //tìm index của id gửi vào
      let index = this.listTask.findIndex(item => item.id === data.id);
      if(index !== -1){
        this.listTask.splice(index, 1 , data);
        this.handleToogleForm();
      }
      

    },
    handleAddNewTask(data){
      this.listTask.push(data);
    },
    // compareTitle(a,b){
    //   // a b c d e f
    //   let numberSort = this.orderDir === 'asc' ? -1 : 1;
    //   if(a.title < b.title) return numberSort;
    //   else if(a.title > b.title)  return numberSort*(-1);
    //   return 0;

    // },
    // compareLevel(a,b){
    //   let numberSort = this.orderDir === 'asc' ? -1 : 1;
    //   if(a.level < b.level) return numberSort;
    //   else if(a.level > b.level)  return numberSort*(-1);
    //   return 0;
    // },
    compareSort(a,b){
      let numberSort = this.orderDir === 'asc' ? -1 : 1;
      //console.log([this.orderTitle]);
      if(a[this.orderTitle] < b[this.orderTitle]) return numberSort;
      else if(a[this.orderTitle] > b[this.orderTitle])  return numberSort*(-1);
      return 0;

    },
    handleToogleForm(){
      this.isShowform = !this.isShowform
      if(!this.isShowform) this.taskSelected = null;

    },
    handleSearch(data){
      //console.log('handleSearch ở App',data);
      this.strSearch = data;

    },
    handleSort(data){
      //console.log('handleSort ở App',data);
       this.orderTitle = data.orderTitle;
       this.orderDir = data.orderDir;
    },
    handleDelete(data){
      //this.isPopup = !this.isPopup;
      //cách 1
      this.listTask = this.listTask.filter(item => item.id !== data);
      //cách 2
      // var indexDelete = 0;
      // for(var i = 0; i < this.listTask.length; i++){
      //     if(this.listTask[i].id === data){
      //         indexDelete  = i;
      //         break;
      //     }

      // }
      // this.listTask.splice(indexDelete,1);

    }
    ,handleClose(){
      
      this.isPopup = !this.isPopup;
    },
    handleEdit(data){
      
      this.$emit('handleEdit',data);
      this.taskSelected = data;
      this.isShowform = true;
      //console.log(data.id);

    }
  }
};
</script>

<style >
body {
  padding: 100px 0;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  vertical-align: middle;
}

.container > .row {
  margin-top: 20px;
  margin-bottom: 30px;
}

span.badge-medium {
  padding: 11px 10px;
  margin: 0px 8px;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
}

@media (max-width: 992px) {
  .add-task {
    margin-top: 50px;
  }
}
.overlay.active {
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 9999;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}
</style>