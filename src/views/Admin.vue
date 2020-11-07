<template>
    <div class="container">
       <div class="row pt-5">
           <div class="col-sm-12 col-md-6">
           <AddPizza/>
       </div>
       <div class="col-sm-12 col-md-6">
           <h3>Menu:</h3>
           <table class="table table-hover table-bordered">
               <thead class="thead-dark">
                   <tr>
                       <th>Item</th>
                       <th>Remove From menu</th>
                   </tr>
               </thead>
               <tbody v-for="item in MenuItems" :key="item.index">
                   <tr>
                       <td>{{item.name}}</td>
                       <td><button class="btn btn-outline-danger btn-sm">X</button></td>
                   </tr>
               </tbody>
           </table>
       </div>
       </div>
       <div class="row">
           <div class="col-sm-12 pt-4">
               <h3>Current Order</h3>
                <table class="table table-sm table-bordered">
               <thead class="thead-dark">
                   <tr>
                       <th>Item</th>
                       <th>Size</th>
                       <th>Qunatity</th>
                       <th>Price</th>
                   </tr>
               </thead>
               <tbody>
                   <div class="order-number">
                       <strong><em>Order Number: </em></strong>
                       <button class="btn btn-outline-danger btn-sm">X</button>
                   </div>
                   <tr>
                       <td>Margherita</td>
                       <td>9"</td>
                       <td>1</td>
                       <td>6.95</td>
                   </tr>
               </tbody>
           </table>
       </div>
       {{getCurrentUser}}
           </div>
       </div>
    
</template>

<script>
import {mapState}  from 'vuex';
import AddPizza from '@/components/addPizza'
import store from '../store/index.js'
import firebase from "firebase";

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        store.dispatch('getLoginUser',user)
    }else{
        store.dispatch('getLoginUser',null)
    }
})
    export default {
       components:{
           AddPizza
       } ,
       computed:{
        //    numberOfOrders(){
        //        return this.$store.getters.getOrders
        //    },
           getCurrentUser(){
               return this.$store.getters.getLoginUser
           },
           ...mapState(['MenuItems'])}
    }
</script>

<style lang="scss" scoped>

</style>