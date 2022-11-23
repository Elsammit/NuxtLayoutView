<template>
    <div class="BaseLocation">
        <div class="SideMove"></div>
        <div class="VerticalMove"></div>
    </div>
</template>

<style>
.SideMove{
    position: relative;
    top:125px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 100%;
    animation: x-move 1.0s infinite;
}

.VerticalMove{
    position: relative;
    top:-50px;
    left:125px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 100%;    
    animation: y-move 1.0s infinite;
}

@keyframes x-move{
    0%{
        transform:translateX(0);
    }
    50%{
        transform: translateX(250px); 
    }
    to{
        transform: translateX(0);
    }    
}

@keyframes y-move{
    0%{
        transform:translateY(0);
    }
    50%{
        transform: translateY(250px); 
    }
    to{
        transform: translateY(0);
    }
}
</style>