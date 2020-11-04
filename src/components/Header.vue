<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed bg-info">
  <div class="container">
      <a class="navbar-brand" href="#">Pizza Plannet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/menu"> Menu</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li> -->
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Admin</router-link>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
</template>


<style scoped>
.navbar-brand{
    font-size: 1.5em;
}
</style>