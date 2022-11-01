<template>
    <div class="display-board box">
        <h4>Dashboard ...</h4>
        <h5>Users Created :</h5>
        <div class="number">
        {{numberOfUsers}}
        </div>
        <div class="btn">
            <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        props: ['numberOfUsers'],
        methods: {
            getAllUsers() {
                this.$emit('getAllUsers')
            }
        }
    }
</script>