<template>
    <div id="head">
        <div id="head-top">
            <div id="head-main-top">
            <div id="head-main-left">
                <img src="@/assets/kugou_white.png" alt="">
                <div id="select-div">
                    <img src="@/assets/select.png" alt="">
                    <input type="text" />
                </div>
            </div>
            <div id="head-main-right">
                <div id="head-main-right-left">
                    <span>音乐人</span>
                    <span>音频创作</span>
                    <span>VIP会员</span>
                </div>
                <div id="head-main-right-right">
                    <div>登录</div>
                </div>

            </div>
        </div>
        </div>
        <div id="head-buttom">
            <div id="head-main-buttom">
            <div class="head-main-buttom-item" @click="goToIndex">
                <div class="head-main-buttom-item-div">首页</div>
            </div>
            <div class="head-main-buttom-item">
                <div class="head-main-buttom-item-div">榜单</div>
            </div>
            <div class="head-main-buttom-item">
                <div class="head-main-buttom-item-div">听书</div>
            </div>
            <div class="head-main-buttom-item">
                <div class="head-main-buttom-item-div">直播</div>
            </div>
            <div class="head-main-buttom-item">
                <div class="head-main-buttom-item-div">下载酷狗</div>
            </div>
            <div class="head-main-buttom-item">
                <div class="head-main-buttom-item-div">商务合作</div>
            </div>
            <div id="head-main-buttom-drop">
                <!-- <div id="head-main-buttom-drop-up">
                    <span>更多</span>
                    <img src="../assets/up_drop.png" alt="">
                </div> -->
                <div id="head-main-buttom-drop-down">
                    <span>更多</span>
                    <div id="head-main-buttom-drop-down-image"></div>
                </div>
            </div>
        </div>
        </div>

    </div>
</template>

<style>
#head{
    width: 100vw;
    /* height: 90px; */
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
   
}

#head-top{
    width: 100vw;
    height: 50px;
    display: flex;
    background-color: rgb(0, 169, 255);
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#head-buttom{
    width: 100vw;
    height: 40px;
    display: flex;
    background-color: rgb(245, 252, 255);
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#head-main-top{

    width: 900px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* background-color: brown; */

}

#head-main-left{
    width: 350px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* background-color: rgb(26, 25, 25); */
}


#head-main-left > img{
    height: 25px;
}

#select-div{
    height: 20px;
    width: 200px;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px;
    background:rgba(255,255,255,0.3);
}

#select-div > img{
    width: 13px;
    background:rgba(255,255,255,0.0);
    /* background-color: aquamarine; */
    margin-left: 10px;
}
#select-div > input{
    border-style: none;
    outline: none;
    caret-color:white;
    background:rgba(255,255,255,0.0);
    margin-left: 5px;
    color: aliceblue;
    font-size: 10px;
    /*  */
}

#head-main-right{
    width: 350px;
    height: 40px;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

#head-main-right-left{
    width: 240px;
    /* background-color: royalblue; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-right:solid 1px white ;
    color: aliceblue;
    font-size: 15px;
}

/* #head-main-right-left > div{
    width: 90px;
} */
#head-main-right-right{
    width: 60px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
}



#head-main-right-right > div{
    font-size: 15px;
    border-radius: 20px;
    width: 60px;
    height: 25px;
    background-color: whitesmoke;
    color: rgb(0, 169, 255);
    line-height: 25px;
}

#head-main-buttom{

    width: 900px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* background-color: aquamarine; */
}


.head-main-buttom-item{
    width: 125px;
    height: 40px;
    /* background-color: whitesmoke; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.head-main-buttom-item-div{
    width: 85px;
    height: 30px;
    /* background-color: rgb(0, 169, 255); */
    border-radius: 20px;
    line-height: 30px;
    text-align: center;
}
#head-main-buttom-drop{
    width: 150px;
    height: 40px;

    /* position: absolute;
    right: 0px; */
}


#head-main-buttom-drop-down-image{
    width: 15px;
    height: 15px;
    background-image: url("../assets/down_drop.png");
    /* background-color: rgb(245, 252, 255); */
    background-size:contain; 
}

/* #head-main-buttom-drop-up{
    
    position: relative;
    width: 85px;
    height: 30px;
    left: 30px;
    top: 5px;
    background-color: aqua;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    
  
} */

#head-main-buttom-drop-down{
    
    position: relative;
    width: 85px;
    height: 30px;
    left: 30px;
    top: 5px;
    /* background-color: aqua; */
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.head-main-buttom-item:hover .head-main-buttom-item-div {
 color: rgb(0, 169, 255);
 /* background-color: rgb(0, 169, 255); */
}
.head-main-buttom-item:focus .head-main-buttom-item-div {
 /* color: rgb(0, 169, 255); */
 background-color: rgb(0, 169, 255);
}

#head-main-buttom-drop:hover #head-main-buttom-drop-down{
    color: aliceblue;
    background-color: rgb(0, 169, 255);
}

#head-main-buttom-drop:hover #head-main-buttom-drop-down-image{
    background-image: url("../assets/up_drop.png");
}

</style>

<script>
import router from '@/router';


export default {
    data(){
        return{
            
        }
    },
    methods:{
        goToIndex : function(event){
            event.currentTarget.getElementsByClassName("head-main-buttom-item-div")[0].style.backgroundColor="rgb(0, 169, 255)"
            event.currentTarget.getElementsByClassName("head-main-buttom-item-div")[0].style.color="aliceblue"
            this.$router.push({path:'/home'})
        },
    },
    mounted:function(){
        
    },
}

</script>