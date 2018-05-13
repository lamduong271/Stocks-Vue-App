<template>
        <div class="stock-container">
            <div class="col-md-6 list-item">
                <div class="item">
                    <div class="item-header">
                        <label>BMW </label>
                        <span>(Price: 110 | Quantity: 10)</span>
                    </div>
                    <div class="item-content">
                        <input type="text">
                        <button class="btn btn-danger ">Buy</button>
                    </div>
                </div>
            </div>
                        
        </div>
</template>
<style scoped>
.stock-container{
    
}
.list-item{
    margin-top: 30px;
}
.stock-container .list-item .item {
    border: 1px solid rgb(130, 192, 221);

    
}
.stock-container .list-item .item .item-header{
    background-color: #D8EDF7;
    padding: 10px 10px 5px 10px;
    color:rgb(51, 100, 122);
    
}
.stock-container .list-item .item .item-content{
    padding: 20px 15px 15px 15px;
    overflow: hidden;
}
.stock-container .list-item .item .item-content input{
    border-radius: 5px;
    border:none;
    border-width:1px;
    border:1px solid rgba(179, 179, 179, 0.486);
    height: 30px;
    float: left;
    
    
}
.stock-container .list-item .item .item-content button{
    float: right;
}
.stock-container .list-item .item .item-content input:focus{
    outline: none;
}

</style>