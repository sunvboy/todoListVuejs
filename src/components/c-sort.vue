<template>
  <div class="col-12">
    <div class="form-group">
      <b-dropdown id="dropdown-1" text="Sort by">
        <b-dropdown-item>Name ASC</b-dropdown-item>
        <b-dropdown-item>Name DESC</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>LEVEL ASC</b-dropdown-item>
        <b-dropdown-item>LEVEL DESC</b-dropdown-item>
      </b-dropdown>
      <span class="badge badge-success badge-medium">NAME - DESC</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-sort",
  data() {
    return {};
  },
};
</script>

