<template>
    <div class="container pt-5">
        <div class="row pt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form action="">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email"  v-model="user.email" placeholder="enter Email here.." class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Passwords</label>
                <input type="password"  v-model="user.password" placeholder="enter Password here.." class="form-control">
            </div>
            <button @click.prevent="userLogin" type="button" class="btn btn-info btn-block float-right">Sign in</button>
        </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";

    export default {
        data() {
            return {
                user: {   
                email: '',
                password: ''
            }
            }
        },
        
        methods:{
            userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/admin')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
        }
    }
</script>

<style lang="scss" scoped>

</style>