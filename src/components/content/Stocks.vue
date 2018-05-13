<template>
        <div class="stock-container">

                <ItemStock :items="item" :key="item.id" v-for="item in items"></ItemStock>
            </div>
                        

</template>
<script>
import ItemStock from './ItemStock.vue';
import * as types from '../../store/types';
import {mapGetters} from 'vuex';
export default{
    components:{
        ItemStock
    },
    computed:{
        ...mapGetters({
            items:types.ALL_STOCKS
        })
    }
}
</script>
<style scoped>



</style>