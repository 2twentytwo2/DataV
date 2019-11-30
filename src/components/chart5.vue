<template>
    <div id="main">
        <div class="row1">
            <div class="col1 animated" @click="reverse(1)" v-bind:class="{'flipInX':showChart.show1,'flipInY':!showChart.show1}">
                <p class="text" v-show="showChart.show1" >TOP1<br>?</p>
                <p class='bg1 bg' v-show="!showChart.show1"></p>
            </div>
            <div class="col2 animated" @click="reverse(2)" v-bind:class="{'flipInX':showChart.show6,'flipInY':!showChart.show6}">
                <p class="text" v-show="showChart.show6">TOP2<br>肖XX</p>
                <p class='bg6 bg' v-show="!showChart.show6"></p>

            </div>
            <div class="col3 animated" @click="reverse(3)" v-bind:class="{'flipInX':showChart.show2,'flipInY':!showChart.show2}">
                <p class="text" v-show="showChart.show2">TOP3<br>胡XX</p>
                <p class='bg2 bg' v-show="!showChart.show2"></p>

            </div>
            <div class="col4 animated" @click="reverse(4)" v-bind:class="{'flipInX':showChart.show7,'flipInY':!showChart.show7}">
                <p class="text" v-show="showChart.show7">TOP4<br>王XX</p>
                <p class='bg7 bg' v-show="!showChart.show7"></p>

            </div>
            <div class="col5 animated" @click="reverse(5)" v-bind:class="{'flipInX':showChart.show3,'flipInY':!showChart.show3}">
                <p class="text" v-show="showChart.show3">TOP5<br>朱XX</p>
                <p class='bg3 bg' v-show="!showChart.show3"></p>

            </div>
        </div>
        <div class="row2">
            <div class="col1 animated" @click="reverse(6)" v-bind:class="{'flipInX':showChart.show8,'flipInY':!showChart.show8}">
                <p class="text" v-show="showChart.show8">TOP6<br>周XX</p>
                <p class='bg8 bg' v-show="!showChart.show8"></p>
            </div>
            <div class="col2 animated" @click="reverse(7)" v-bind:class="{'flipInX':showChart.show4,'flipInY':!showChart.show4}">
                <p class="text" v-show="showChart.show4">TOP7<br>白XX</p>
                <p class='bg4 bg' v-show="!showChart.show4"></p>
<!--                <p class="text" v-show="showChart.show7">TOP4<br>王XX</p>-->
<!--                <p class='bg7 bg' v-show="!showChart.show7"></p>-->
            </div>
            <div class="col3 animated" @click="reverse(8)" v-bind:class="{'flipInX':showChart.show9,'flipInY':!showChart.show9}">
                <p class="text" v-show="showChart.show9">TOP8<br>刘XX</p>
                <p class='bg9 bg' v-show="!showChart.show9"></p>
            </div>
            <div class="col4 animated" @click="reverse(9)" v-bind:class="{'flipInX':showChart.show10,'flipInY':!showChart.show10}">
                <p class="text" v-show="showChart.show10">TOP9<br>华XX</p>
                <p class='bg10 bg' v-show="!showChart.show10"></p>
            </div>
            <div class="col5 animated" @click="reverse(10)" v-bind:class="{'flipInX':showChart.show5,'flipInY':!showChart.show5}">
                <p class="text" v-show="showChart.show5">TOP10<br>撒XX</p>
                <p class='bg5 bg' v-show="!showChart.show5"></p>
            </div>
        </div>

    </div>
</template>

<script>
    // import common from "@/components/common";
    export default {
        name: "chart5",
        props: ['start'],
        data(){
            return{
                // eslint-disable-next-line vue/no-dupe-keys
                start:false,
                count:0,
                showChart:{
                    show1:true,
                    show11:true,
                    show2:true,
                    show3:true,
                    show4:true,
                    show5:true,
                    show6:true,
                    show7:true,
                    show8:true,
                    show9:true,
                    show10:true
                }
            }
        },
        methods:{
            reverse(count){
                // let that = this;
                // this.showChart.show11 = false;
                switch (count) {
                    case 1:

                        // setTimeout(function () {
                        //     that.showChart.show11 = true;
                        //     window.console.log(that.showChart.show11)
                        // },100);
                        // window.console.log(that.showChart.show11)
                        this.showChart.show1 = !this.showChart.show1;

                        break;
                    case 2:
                        this.showChart.show6 = !this.showChart.show6;
                        break;
                    case 3:
                        this.showChart.show2 = !this.showChart.show2;
                        break;
                    case 4:
                        this.showChart.show7 = !this.showChart.show7;
                        break;
                    case 5:
                        this.showChart.show3 = !this.showChart.show3;
                        break;
                    case 6:
                        this.showChart.show8 = !this.showChart.show8;
                        break;
                    case 7:
                        this.showChart.show4 = !this.showChart.show4;
                        break;
                    case 8:
                        this.showChart.show9 = !this.showChart.show9;
                        break;
                    case 9:
                        this.showChart.show10 = !this.showChart.show10;
                        break;
                    case 10:
                        this.showChart.show5 = !this.showChart.show5;
                        break;

                }
                return count;

            },
            doReverse(){
                switch(this.count){
                    case 0:
                        this.reverse(10);
                        break;
                    case 1:
                        this.reverse(9);
                        break;
                    case 2:
                        this.reverse(8);
                        break;
                    case 3:
                        this.reverse(7);
                        break;
                    case 4:
                        this.reverse(6);
                        break;
                    case 5:
                        this.reverse(5);
                        break;
                    case 6:
                        this.reverse(4);
                        break;
                    case 7:
                        this.reverse(3);
                        break;
                    case 8:
                        this.reverse(2);
                        break;
                    case 9:
                        this.reverse(1);
                        break;
                    case 10:
                        clearInterval(this.timer);
                        this.count = -1;
                }
                this.count++;

            }


        },
        watch:{
            start:function (val, oldVal) {
                window.console.log('new: %s, old: %s', val, oldVal)
                if(val == true){
                    this.timer = setInterval(this.doReverse, 1000);
                }
            },
        },
        mounted: function () {
            // this.showChart.show1 = false;
            window.console.log(this.start)


        }
    }
</script>

<style scoped>
    #main{
        margin: 20px;
        width: 95%;
        height: 85%;
        background-color: rgba(128, 128, 128, 0.18);
    }

    .row1{
        display: flex;
        height: 50%;
    }

    .row2{
         display: flex;
         height: 47%;
     }

    .row1 div,.row2 div{
        /*border: #48bde2 1px solid;*/
        position: relative;
        /*height: 94%;*/
        margin: 5px;
        /*border-color: rgb(51, 51, 51);*/
        /*border-radius:4px;*/
        /*box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.76);*/
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
        overflow: hidden;
        text-align: center;
        /*width:100%;*/
        /*height:0;*/
        /*padding-bottom: 94%;*/
        /*overflow:hidden;*/

    }

    .text{
        position: absolute;
        line-height: 30px;
        width: 100%;
        top: 50%;
        margin-top: -30px;
        color: white;

    }



    .row1 .col1{
        background-color: #9999cc;
        line-height: 100%;

    }
    .row2 .col1{
        background-color: #5ab1ef;
    }

    .row1 .col2{
        background-color: #ffb980;
    }
    .row2 .col2{
        background-color: #ea848b;
    }

    .row1 .col3{
        background-color: #2ec7c9;
    }
    .row2 .col3{
        background-color: #c96158;
    }

    .row1 .col4{
        background-color: #f5994e;
    }
    .row2 .col4{
        background-color: #5ab1ef;
    }

    .row1 .col5{
        background-color: #9a7fd1;
    }
    .row2 .col5{
        background-color: #97b552;
    }





    .col1{
        width: 22%;
    }

    .col2{
        width: 21%;
    }

    .col3{
        width: 20%;
    }

    .col4{
        width: 19%;
    }

    .col5{
        width: 18%;
    }

    .bg {
        margin: 0;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
    }

    .bg1{
        background-image: url("../assets/star/易烊千玺1.png");
    }

    .bg2{
        background-image: url("../assets/star/胡歌.jpg");
    }
    .bg3{
        background-image: url("../assets/star/朱一龙.jpg");
    }

    .bg4{
        background-image: url("../assets/star/白敬亭1.jpg");
    }

    .bg5{
        background-image: url("../assets/star/撒贝宁.jpeg");
    }

    .bg6{
        background-image: url("../assets/star/肖战1.jpg");
    }

    .bg7{
        background-image: url("../assets/star/王一博.jpg");
    }

    .bg8{
        background-image: url("../assets/star/周杰伦.jpg");
    }

    .bg9{
        background-image: url("../assets/star/刘昊然.jpg");
    }

    .bg10{
        background-image: url("../assets/star/华晨宇.jpg");
    }

</style>