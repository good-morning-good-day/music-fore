<template>
    <div id="select">
        <div id="select_up">
            <div id="select_up_box">
                <input type="text">
                <div id="select_up_icon">
                    <svg t="1725590816043" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4360" width="20" height="20"><path d="M889.6 838.4l-192-192C742.4 595.2 768 524.8 768 448c0-179.2-140.8-320-320-320S128 268.8 128 448s140.8 320 320 320c76.8 0 147.2-25.6 198.4-70.4l192 192c12.8 12.8 32 12.8 44.8 0C896 876.8 896 851.2 889.6 838.4zM192 448c0-140.8 115.2-256 256-256s256 115.2 256 256c0 140.8-115.2 256-256 256S192 588.8 192 448z" p-id="4361" fill=""></path>
                    </svg>
                </div>
            </div>
        </div>
        <div id="select_down">
            <div id="select_down_up">
                <div class="select_down_up_item click_change_color" @click="changeList">
                    <span>单曲</span>
                </div>
                <div class="select_down_up_item" @click="changeList">
                    <span>歌单</span>
                </div>
                <div class="select_down_up_item" @click="changeList">
                    <span>MV</span>
                </div>
            </div>
            <div id="select_down_mindow">
                <div id="select_down_mindow_left">
                    <span>随机搜索推荐相关的歌曲</span>
                </div>
                <div id="select_down_mindow_right">
                    <svg t="1725594080249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6425" width="20" height="20"><path d="M683.11867466 511.93378743L305.13945048 286.673108V737.3202714L683.11867466 511.93378743zM222.13577976 882.78857422V141.21142578l622.39510714 370.72236165L222.13577976 882.78857422z" p-id="6426" fill="white"></path>
                    </svg>
                    <span>播放</span>
                </div>
            </div>
            <div id="select_down_bottom">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    :header-cell-style="{background:'#f8f8f8'}"
                    @cell-mouse-enter="mouseEnter"
                    @cell-mouse-leave="mouseLeave"
                    >
                    <el-table-column
                        type="selection"
                        width="45">
                    </el-table-column>
                    <el-table-column
                        label="歌曲名"
                        width="300"
                        >
                        <template slot-scope="scope" >{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="专辑"
                        width="220">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="时长"
                        align="right"
                        >

                        <template slot-scope="scope" id="icon_time">
                            <div v-show="showEditFileNameButton&&rowId==scope.row.id" id="icon_time_icons">
                                <svg t="1725609928714"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6856" id="mx_n_1725609928714" width="15" height="15"><path d="M683.11867466 511.93378743L305.13945048 286.673108V737.3202714L683.11867466 511.93378743zM222.13577976 882.78857422V141.21142578l622.39510714 370.72236165L222.13577976 882.78857422z" p-id="6857" fill=""></path>
                                </svg>
                                <svg t="1725609987340" style="margin-left: 5px; " class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7955" width="15" height="15"><path d="M857.6 956.8H166.4c-54.4 0-102.4-48-102.4-105.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c0 22.4 16 41.6 38.4 41.6h694.4c19.2 0 38.4-19.2 38.4-41.6v-182.4c0-19.2 12.8-32 32-32s32 12.8 32 32v182.4c-3.2 57.6-48 105.6-105.6 105.6z" fill="" p-id="7956"></path><path d="M512 758.4c-19.2 0-32-12.8-32-32v-640c0-19.2 12.8-32 32-32s32 12.8 32 32v640c0 16-12.8 32-32 32z" fill="" p-id="7957"></path><path d="M512 764.8c-9.6 0-16-3.2-22.4-9.6l-208-208c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l185.6 185.6 185.6-185.6c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-208 208c-6.4 6.4-12.8 9.6-22.4 9.6z" fill="" p-id="7958"></path>
                                </svg>
                                <svg t="1725610063784" style="margin-left: 5px; " class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9255" id="mx_n_1725610063785" width="15" height="15"><path d="M865.922728 583.211878c-16.276708 0-29.580712 13.246699-29.667693 29.727045l0 215.125569c0 17.992793-14.58723 32.637328-32.520671 32.637328L181.762717 860.70182c-17.935488 0-32.520671-14.645558-32.520671-32.637328L149.242046 292.155966c0-17.992793 14.586207-32.637328 32.520671-32.637328l291.230897 0c16.304338-0.029676 29.580712-13.363356 29.580712-29.724998 0-16.392342-13.276375-29.727045-29.610388-29.727045l-295.336402 0c-48.358381 0-87.721901 39.450501-87.721901 87.925538l0 544.205493c0 48.475038 39.36352 87.925538 87.721901 87.925538l630.239961 0c48.358381 0 87.720877-39.450501 87.720877-87.925538L895.588375 612.762915C895.501394 596.458577 882.19739 583.211878 865.922728 583.211878z" fill="" p-id="9256"></path><path d="M930.818761 338.183256l0-0.318248L727.07645 133.511783l-6.435573-6.259564-0.814552 0.844228c-4.511757-2.532683-9.606799-3.873214-14.876826-3.873214-16.974603 0-30.774911 13.829983-30.774911 30.832216 0 5.298679 1.338485 10.393721 3.873214 14.907525l-0.903579 0.931209 141.845589 142.224212-145.573493 0.057305C436.396091 342.726735 378.197598 489.375723 361.049033 717.050096c0 17.004279 13.800307 30.832216 30.772864 30.832216 13.858636 0 25.620517-9.229199 29.464055-21.893636l1.397836-8.181333c18.022469-215.329207 60.470233-321.567833 251.839749-342.937536l144.466276 0L683.433464 510.804778l-5.502317 7.744381c-1.951445 4.104481-2.969635 9.112542-2.969635 13.654998 0 17.002232 13.799284 30.832216 30.772864 30.832216 4.832052 0 10.160407-1.164522 14.439874-3.37691L929.954067 350.740246c1.860371-1.305739 4.140297-4.52506 4.140297-6.970762C934.093341 341.323782 932.679132 339.488994 930.818761 338.183256z" fill="" p-id="9257"></path>
                                </svg>
                            </div>

                            <span>
                                <!-- {{ scope.row.id }} -->
                                {{ scope.row.date }}
                            </span>
                        </template>



                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button @click="toggleSelection()">取消选择</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#select{
    width: 100vw;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* background-color: aqua; */
    
}
#select_up{
    width: 100vw;
    height: 100px;
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(248, 248, 248);
}

#select_up_box{
    width: 450px;
    height: 40px;
    /* background-color: aquamarine; */
    border: 1px solid #666;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    
}
#select_up_box > input{
    width: 400px;
    height: 35px;
    list-style: none;
    border-style: none;
    outline: none;
    font-size: 20px;
    margin-left: 10px;
    /* background-color: azure; */
}
#select_up_icon{
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#select_up_icon > svg{
    fill: #666;
}
#select_up_icon:hover svg{
    fill:rgb(0, 169, 255);
}

#select_down_up{
    width: 800px;
    height: 40px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.select_down_up_item{
    width: 100px;
    height: 40px;
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    user-select: none;
}



.select_down_up_item:hover{
    cursor:pointer;
}

.click_change_color{
    color:rgb(0, 169, 255);
    border-bottom: 2px solid rgb(0, 169, 255);
}

#select_down_mindow{
    width: 800px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    /* background-color: aqua; */
}

#select_down_mindow_left{
    font-size: 12px;
    color: #666;
}

#select_down_mindow_right{
    width: 80px;
    height: 30px;
    background-color: rgb(0, 169, 255);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    border-radius: 5px;
    color: white;
    font-size: 15px;
}
.el-table__body tr.current-row>td{
		background-color: #f5f8fb;
}

.el-table_10_column_40 > .cell{
    width: 200px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
} 
#icon_time_icons{
    display: inline;
    margin-right: 30px;
    fill:"#666";
}

#icon_time_icons > svg:hover{
    fill:rgb(0, 169, 255);
}
/* #select_table_song_name:hover{
    color: rgb(0, 169, 255);
} */


</style>
<script>

export default{

    data(){
        return{
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:1,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:2
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:3
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:4
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:5
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:6
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id:7
        }],
        multipleSelection: [],
        rowid:"",
        showEditFileNameButton:false

        }
       
    },
    methods:{
        //鼠标移入单元格事件
        mouseEnter(row) {
            this.showEditFileNameButton = true;
            this.rowId=row.id   //赋值行id，便于页面判断
            // console.log(row.id)
            // console.log(this)
            // console.log(showEditFileNameButton&&t his.rowId==scope.row.id)
        },
        //鼠标移出单元格事件
        mouseLeave(row) {
            this.showEditFileNameButton = false;
            this.rowId=""
        },

        changeList:function(event){
            let items = document.getElementsByClassName("select_down_up_item")
            for(let i=0;i<items.length;i++){
                items[i].classList=["select_down_up_item"]
            }
            event.currentTarget.classList.add("click_change_color")
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
            },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }



    },
    mounted:function(){

       this.$axios.get('http://127.0.0.1:8081/api/music/getSongsBySinger?singer=孙燕姿').then(res=>{
        console.log(res.data)
       })


    }

}

</script>