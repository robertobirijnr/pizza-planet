import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MenuItems:{
      1:{
          'name':"Margherita",
          'description':"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos similique odit necessitatibus hic doloremque, minima nostrum reiciendis repudiandae a quos iste officia, maiores odio! Temporibus excepturi sed laborum a.",
          'options':[{
              'size':9,
              'price':6.95
          },{
              'size':12,
              'price':10.95
          }]
      },
      2:{
          'name':"Pepperoni",
           'description':"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos similique odit necessitatibus hic doloremque, minima nostrum reiciendis repudiandae a quos iste officia, maiores odio! Temporibus excepturi sed laborum a.",
            'options':[{
              'size':9,
              'price':7.95
          },{
              'size':12,
              'price':12.95
          }]
      },
      3:{
          'name':"Ham and Pineapple",
           'description':"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos similique odit necessitatibus hic doloremque, minima nostrum reiciendis repudiandae a quos iste officia, maiores odio! Temporibus excepturi sed laborum a.",
            'options':[{
              'size':9,
              'price':7.95 
          },{
              'size':12,
              'price':12.95
          }]
      },
      orders:[],
      currentUser:'',
  }
  },
  mutations: {
    ADD_ORDERS:(state,order)=>{
      state.orders.push(order)
    },
    SET_USER:(state,user)=>{
      if(user){
        state.currentUser = user
      }else{
        state.currentUser = null
      }
    }
  },
  actions: {
    getLoginUser({commit},user){
      commit('SET_USER',user)
    }
  },
  getters: {
    getMenuItems: state => state.MenuItems,
    getOrders:state => state.orders.length,
    getLoginUser:state => state.currentUser
  }
})
