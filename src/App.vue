<template>
    <div class="container">
        <!--Header-->
        <router-view name="menu"></router-view>
        <!--Porfolio-->
        <!-- <Porfolio></Porfolio> -->
        <!-- Stock -->
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue';
    import Porfolio from './components/content/Porfolio.vue';
    import Stocks from './components/content/Stocks.vue';
    import General from './components/content/General.vue';
    export default {
        components:{
            Menu,
            Porfolio,
            Stocks
        }
    }
</script>

<style>

</style>
