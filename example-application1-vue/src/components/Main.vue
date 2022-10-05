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
        <UsersTable v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateUser from './CreateUser.vue'
import Dashboard from './Dashboard.vue'
import UsersTable from './UsersTable.vue'
import BackFront from './BackFront.vue'
import { getAllUsers, createUser } from '../services/UserService'

export default {
  name: 'Main',
  components: {
    Header,
    CreateUser,
    Dashboard,
    UsersTable,
    BackFront
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
  }},
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
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
  }
}
</script>