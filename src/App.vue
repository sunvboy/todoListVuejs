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
            <CSort></CSort>
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <CSearch></CSearch>

            <!-- SEARCH : END -->
          </b-row>
        </b-col>
        <!-- CONTROL (SEARCH + SORT + ADD) : END -->

        <!-- FORM : START -->
        <b-col lg="6" cols="12">
          <!-- ADD : START -->
          <CAdd></CAdd>
          <!-- ADD : END -->
          <CForm></CForm>
        </b-col>
        <!-- FORM : END -->
      </b-row>

      <!-- LIST : START -->
      <TodoListTable v-bind:listTask="listTask"></TodoListTable>
    </b-container>
  </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable";
import CTitle from "./components/c-title";
import CSort from "./components/c-sort";
import CSearch from "./components/c-search";
import CAdd from "./components/c-add";
import CForm from "./components/c-from";
import dataTask from "./data/task";

export default {
  name: "app",
  components: {
    TodoListTable,
    CTitle,
    CSort,
    CSearch,
    CAdd,
    CForm,
  },
  data() {
    return {
      listTask: dataTask,
    };
  },
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
</style>