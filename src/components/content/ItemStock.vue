<template>
<div class="col-md-6 list-item">
            <div class="item">
                    <div class="item-header">
                        <label>{{items.name}} </label>
                        <span>(Price : {{items.price}})</span>
                    </div>
                    <div class="item-content">
                        <input v-model="quantity" type="text">
                        <button @click="buyItem" class="btn btn-success" :disabled=" quantity <= 0 || !Number(quantity)">Buy</button>
                    </div>
            </div>
        </div>
</template>
<script>
export default{
    props:['items'],
    data:()=>{
        return {
            quantity:0
        }
    },
    methods:{
        buyItem(){
            const itemInfor={
                id:this.items.id,
                name:this.items.name,
                quantity:this.quantity
            };
            console.log(itemInfor);
            this.quantity=0;
        }
    }
}
</script>
<style>
.list-item{
    margin-top: 30px;
}
.item {
    border: 1px solid rgb(177, 226, 159);

    
}
.item .item-header{
    background-color: #DEEFD8;
    padding: 10px 10px 5px 10px;
    color:rgb(40, 73, 28);
    
}
.item .item-content{
    padding: 20px 15px 15px 15px;
    overflow: hidden;
}
.item .item-content input{
    border-radius: 5px;
    border:none;
    border-width:1px;
    border:1px solid rgba(179, 179, 179, 0.486);
    height: 30px;
    float: left;
    
    
}
.item .item-content button{
    float: right;
}
.item .item-content input:focus{
    outline: none;
}
</style>