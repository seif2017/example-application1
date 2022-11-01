<template>
  <div class="container box" style="background-color:aliceblue;">
    <h2>Parameters</h2>
    <table class="table table-bordered" style="background-color:white;">
      <thead style="background-color:azure;">
        <tr>
          <th style="width:20%">Param</th>
          <th style="width:60%">Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in params" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.value }}</td>
          <td>
            <button
              @click="getAllUsers()"
              type="button"
              class="btn btn-warning"
            >
              Edit
            </button> &nbsp;
            <button
              @click="getAllUsers()"
              type="button"
              class="btn btn-warning"
            >
              Delete
            </button> &nbsp;
            <button
              @click="getAllUsers()"
              type="button"
              class="btn btn-warning"
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ParamsTable",
  props: ["params"],
};
</script>