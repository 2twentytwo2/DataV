<template>
    <div id="main">
        <div id="barchart3" ref="barchart3"></div>
    </div>
</template>

<script>
    import common from "@/components/common";
    export default {
        name: "chart3",
        data(){
            return{
            }
        },
        methods:{
            drawChart() {
                this.myChart3 = this.$echarts.init(this.$refs.barchart3);
                this.myChart3.setOption(common.getOption3(this.$echarts));

            }
        },
        mounted: function () {
            this.drawChart();
            window.console.log("mychart3",this.myChart3)//this.$refs.barchart3
            window.console.log("mychart33",this.$refs.barchart3)
            this.myChart3.resize();
            window.onresize = () => {
                // 基于准备好的dom，初始化echarts实例
                this.myChart3.resize();
            };
        }
    }
</script>

<style scoped>
    #main{
        height: 100%;
        width: 100%;
        margin:10px;
    }
    #barchart3{
        height: 70%;
        width:95%;
    }

</style>