<template>
    <div id="main">
        <div id="barchart4" ref="ref4"></div>
    </div>
</template>

<script>
    import common from "@/components/common";
    export default {
        name: "chart4",
        data(){
            return{
            }
        },
        methods:{
            drawChart(){
                // const chart1 = this.$refs.chart1;
                window.console.log(this.$refs.ref4)
                // this.$refs.barchart4
                this.myChart4 = this.$echarts.init(this.$refs.ref4);
                this.myChart4.setOption(common.option4);

            }

        },
        mounted: function () {
            this.drawChart();
            this.myChart4.resize();
            window.onresize = () => {
                // 基于准备好的dom，初始化echarts实例
                this.myChart4.resize();
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
    #barchart4{
        height: 85%;
        width:95%;
    }

</style>