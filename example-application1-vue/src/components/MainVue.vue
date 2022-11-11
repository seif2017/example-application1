<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row" >
            <div class="col-md-6">
                <CreateUser @createUser="userCreate($event)" />
            </div>
            <div class="col-md-5">
                <BackFront  />
            </div>
            <div class="col-md-3">
                <Dashboard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
            </div>          
        

          </div>
    </div>
    <div class="row mrgnbtm">
                <ParamsTable :params="params"/>
            </div>
    <div class="row mrgnbtm">
        <UsersTable v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateUser from './CreateUser.vue'
import Dashboard from './Dashboard.vue'
import UsersTable from './UsersTable.vue'
import ParamsTable from './ParamsTable.vue'
import BackFront from './BackFront.vue'

import { getAllUsers, createUser } from '../services/UserService'
import { getAllParams } from "../services/ParamService";


export default {
  name: 'MainVue',
  components: {
    Header,
    CreateUser,
    Dashboard,
    UsersTable,
    ParamsTable,
    BackFront,
},
  data() {
      return {
          users: [],
          numberOfUsers: 0,
          params :[]
  }},
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    getAllParams() {
      getAllParams().then(response => {
        console.log(response)
        this.params = response
      })
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
    this.getAllParams();
  }
}
</script>