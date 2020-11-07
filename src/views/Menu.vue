<template>
    <div class="container pt-5 text-center">
        <div class="row">
        <div class="col-sm-12 px-5 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                      
                    </tr>
                </thead>
                <tbody v-for="item in MenuItems" :key="item.index">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.index">
                        <td>{{option.size}}"</td>
                        <td>{{option.price}}</td>
                        <td><button @click="addPizza(item,option)" type="button" class="btn btn-sm btn-outline-info">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
         <div class="col-sm-12 col-md-6">
        <div v-if="basket.length > 0">
             <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Total</th>
                      
                    </tr>
                </thead>
                <tbody v-for="item in basket" :key="item.index">
                    <tr>
                        <td><button @click="decreaseQuantity(item)" type="button" class="btn btn-sm btn-outline-info"> - </button>
                        <span>   {{item.quantity}}  </span>
                        <button @click="increaseQuantity(item)" type="button" class="btn btn-sm btn-outline-info">+</button></td>
                        <td>{{item.name}}{{item.size}}</td>
                        <td>{{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
                
            </table>
            <p>Order total:</p>
            <button class="btn btn-info btn-block">Place Order</button>
        </div>
        <div v-else>
            <p>There is no Item in the basket</p>
        </div>
    </div>
    </div>
   
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                basket:[],
              
            }
        },
        computed:mapState(['MenuItems']),
        methods:{
            addPizza(item,option){
                this.basket.push({
                    name:item.name,
                    price:option.price,
                    size:option.size,
                    quantity:1
                })
            },
            removeFromBasket(item){
                this.basket.splice(this.basket.indexOf(item),1)
            },
            decreaseQuantity(item){
                item.quantity--;

                if(item.quantity ===  0){
                    this.removeFromBasket(item)
                }
            },
            increaseQuantity(item){
                item.quantity ++;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>