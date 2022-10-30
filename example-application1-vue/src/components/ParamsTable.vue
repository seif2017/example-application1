<template>
    <div class="container">
        <h2>Parameters</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Param</th>
                <th>Value</th>
                <th>Actions</th>
     
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in params" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.value }}</td>
                  <td></td>

              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'ParamsTable',
        props: ['params']
     }
</script>