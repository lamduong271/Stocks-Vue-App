<template>
        <div class="header-container">
            <div class="nav-left">
                <ul>
                    <router-link tag="li" :to="{name:'Home'}">Stock Trade</router-link>
                    <router-link tag="li" :to="{name:'Porfolio'}">Porfolio</router-link>
                    <router-link tag="li" :to="{name:'Stocks'}">Stock</router-link>
                </ul>
            </div>
            <div class="nav-right">
                <ul>
                    <router-link tag="li" :to="{name:'Porfolio'}">End Day</router-link>
                    <router-link tag="li" :to="{name:'Porfolio'}">Save & Load</router-link>
                    <router-link tag="li" :to="{name:'Porfolio'}">Funds:</router-link>
                </ul>
            </div>
        </div>
</template>
<script>
    
</script>
<style>
.header-container{
    margin-top: 50px;
    border:1px solid rgba(206, 206, 206, 0.486);
    background-color:rgba(238, 232, 232, 0.37);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}
.nav-left{
    width: 50%;
}
.nav-right{
    width: 50%;
}
.header-container .nav-left ul{
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.header-container .nav-left ul li{
    cursor: pointer;
    list-style-type: none;
    line-height: 60px;
    margin-left: 30px;
    color:rgb(87, 86, 86);
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.header-container .nav-left ul li:nth-child(1){
    font-size: 20px;
    font-weight: 600;
   
}

.header-container .nav-right ul{
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;

}
.header-container .nav-right ul li{
    cursor: pointer;
    list-style-type: none;
    line-height: 50px;
    margin-left: 30px;
    color:rgb(87, 86, 86);
    font-size: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>