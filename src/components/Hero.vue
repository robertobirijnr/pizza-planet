<template>
    <div class="row bg-bob">
        <div class="col-sm-12 pt-5 text-center">
            <div class="background">
                <h1>Welcome to Pizza Planet!</h1>
                <h2>Feeling Hungry ?</h2>
                <button class="btn btn-info">Let's order!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.bg-bob{
    background: url('../assets/pexels-narda-yescas-1566837.jpg') center center;
    height: 650px;
    background-size: cover;

}

h1, h2{
    margin:6%;
}
.background{
    background:#eee;
    opacity:0.8 ;
    max-width: 60%;
    margin:0 auto;
    padding: 20px 0; 
}
</style>