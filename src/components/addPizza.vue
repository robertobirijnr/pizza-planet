<template>
    <form>
        <h3>Add new pizza:</h3>
        <div class="form-group row">
            <label for="Name" class="col-sm-3">Name</label>
            <div class="col-sm-9">
                <input type="text" v-model="newPizza.name" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="description" class="col-sm-3">Description</label>
            <div class="col-sm-9">
                <textarea type="text" v-model="newPizza.description" class="form-control"> </textarea>
            </div>
        </div>
        <p><strong>Option 1:</strong></p>
        <div class="form-group row">
            <label for="size" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" v-model="newPizza.options[0].size" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" v-model="newPizza.options[0].price" class="form-control">
            </div>
        </div>
        <p><strong>Option 2:</strong></p>
        <div class="form-group row">
            <label for="size" class="col-sm-3">Size (")</label>
            <div class="col-sm-9">
                <input type="text" v-model="newPizza.options[1].size" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-3">Price</label>
            <div class="col-sm-9">
                <input type="text" v-model="newPizza.options[1].price" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addMenuItem" type="button" class="btn btn-info btn-block">Add</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                newPizza:{
                    'name':"Margherita",
                    'description':"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos similique odit necessitatibus hic doloremque, minima nostrum reiciendis repudiandae a quos iste officia, maiores odio! Temporibus excepturi sed laborum a.",
                    'options':[{
                        'size':9,
                        'price':6.95
                    },{
                        'size':12,
                        'price':10.95
                    }]
                }
            }
        },
        methods:{
            addMenuItem(){
                console.log(this.newPizza)
            }
        }
    }
</script>

<style  scoped>

</style>