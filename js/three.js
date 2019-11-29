/*
* three.html 对应的echart js
* **/
let mainChart;
let myChart1;
let myChart2;
let myChart3;
let myChart4;
let rankChart;

let mainShow=function (name) {
    mainChart=echarts.init(document.getElementById(name));
    let option=mainOption();
    mainChart.setOption(option);
}
/***
 * 累加数据的渐变折线图
 */
let mainOption=function(){
    var dataIPSxAxis = [0.5,1.0,1.5,2.0,2.50,3.0,4.0,4.5,5.0,5.5,6.0,6.5,
        7.0,7.5,8.0,8.5,9.0,9.5,10.0,10.5,11.0,11.5,12.0,12.50,13.00,14.00,14.5,15.00,
        15.50,16.00,16.50,17.0,17.5,18.0,19.0,19.5,20.0,20.5,21.0,22.0,22.5,23.0,24.0,
        24.5,25.0,27.5,29.0,30.0,34.5,35.0,36.5,37.5,40.0,55.0];
    var dataIPS3 = [
        91, 114, 115, 142, 157, 158, 188, 197, 249,
        254, 255, 256, 258, 261, 262, 263, 274, 274,
        368, 379, 383, 384, 389, 396, 398, 421, 425,
        456, 459, 461, 463, 466, 469, 473, 474, 475,
        482, 482, 485, 485, 487, 487, 488, 488, 490,
        490, 494, 500, 500, 500, 501, 502, 504, 507
    ];
    var dataIPS2 =[
        171, 192, 200, 222, 242, 244, 285, 288,
        341, 346, 348, 348, 351, 353, 353, 354,
        355, 356, 442, 463, 466, 467, 483, 493,
        496, 516, 521, 541, 548, 548, 548, 549,
        551, 554, 556, 556, 567, 575, 577, 578,
        579, 580, 585, 587, 589, 590, 590, 590,
        591, 592, 592, 592, 592, 592
    ];
    var dataIPS=[
        320, 360, 376, 384, 390, 390, 394, 397,
        419, 427, 429, 429, 429, 430, 432, 432,
        434, 434, 489, 502, 502, 503, 503, 504,
        504, 506, 506, 511, 514, 514, 515, 515,
        515, 515, 516, 516, 518, 519, 519, 519,
        519, 519, 519, 519, 519, 520, 520, 520,
        520, 520, 520, 520, 520, 520
    ];
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                },
            }
        },
        legend:{
            itemGap:12,
            data:['18','17','16'],
            show:true,
            zlevel:100,
            align:'center'
        },
        color: ["#da20a9", "#da20a9","#da20a9"],
        toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
        },
        grid: {
            left: '5%',
            right: '5%',
            top:'10%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataIPSxAxis,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                formatter: function(value) {
                    //debugger
                    var ret = ""; //拼接加\n返回的类目项
                    var maxLength = 5; //每项显示文字个数
                    var valLength = value.length; //X轴类目项的文字个数
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                    if (rowN > 1) //如果类目项的文字大于3,
                    {
                        for (var i = 0; i < rowN; i++) {
                            var temp = ""; //每次截取的字符串
                            var start = i * maxLength; //开始截取的位置
                            var end = start + maxLength; //结束截取的位置
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                            temp = value.substring(start, end) + "\n";
                            ret += temp; //凭借最终的字符串
                        }
                        return ret;
                    } else {
                        return value;
                    }
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#0a2b52',
                    width: 0.5, //这里是为了突出显示加上的
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#0a2b52',
                    width: 1, //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                formatter: function(val) {
                    return val + '';
                },
                show: true,
                textStyle: {
                    color: '#fff' //字体颜色
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }

            },
        }],
        series: [
            {
                name: '18级',
                type: 'line',
                smooth: true,
                //  symbol: "none", //去掉折线点
                stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#da20a9' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#da20a9' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#2b2182' // 最下面的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'solid',
                            color: "#da20a9"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: dataIPS,
            },
            {
                name: '17级',
                type: 'line',
                smooth: true,
                //  symbol: "none", //去掉折线点
                stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#f986ee' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#a24ee1' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#a24ee1' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'solid',
                            color: "#a24ee1"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式

                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: dataIPS2,
            },
            {
                name: '16级',
                type: 'line',
                smooth: true,
                //  symbol: "none", //去掉折线点
                stack: 100,
                itemStyle: {
                    normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5ca3f3' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#8065d6' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#8065d6' // 100% 处的颜色
                        }]), //背景渐变色
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'solid',
                            color: "#8065d6"
                        }
                    },
                    emphasis: {
                        color: '#02675f',
                        lineStyle: { // 系列级个性化折线样式
                            width: 0.5,
                            type: 'dotted',
                            color: "#02675f" //折线的颜色
                        }
                    }
                }, //线条样式
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {}
                },
                data: dataIPS3,
            },
        ]
    };
    return option;
}
/***
 * 好看的蓝紫色散点图
 * 但是 放上数据后 不好看
 *

let mainOption=function () {
    let option = {
        visualMap: {
            min: 0,
            max: 55,
            dimension: 1,
            left: 'right',
            top: 'top',
            text: ['HIGH', 'LOW'], // 文本，默认为数值文本
            calculable: true,
            itemWidth:10,
            itemHeight:30,
            textStyle: {
                color:'#fff',
                height: 8,
                fontSize:10,
                lineHeight:20,
            },
            inRange: {
                color: ['#3EACE5', '#F02FC2']
            },
            padding:[50, 20],
            orient:'horizontal',
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return '积分: ' +
                        params.value[0] + '<br/> ' +'全校总人数: '+
                        params.value[1] ;
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + ' : ' +
                        params.value ;
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        xAxis: [{
            type: 'value',
            scale: true,
            max:55,
            min:0,
            axisLabel: {
                formatter: '{value}'
            },
            nameTextStyle: {
                color: '#fff',
                fontSize: 14,
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show:false,
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            max:20,
            min:0,
            axisLabel: {
                formatter: '{value}'
            },
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            axisTick:{
                show:false,
            },
            axisLine: {
                lineStyle: {
                    color:'#fff',
                }
            },
            splitLine: {
                show:false,
            }
        }],
        series: [{
            name: 'price-area',
            type: 'scatter',
            data: [[ 0.5, 811 ], [ 1, 101 ],   [ 1.5, 40 ], [ 2, 38 ],
                [ 2.5, 32 ],  [ 3, 2 ],     [ 4, 49 ],   [ 4.5, 9 ],
                [ 5, 97 ],    [ 5.5, 21 ],  [ 6, 6 ],    [ 6.5, 0 ],
                [ 7, 3 ],     [ 7.5, 4 ],   [ 8, 4 ],    [ 8.5, 1 ],
                [ 9, 5 ],     [ 9.5, 1 ],   [ 10, 196 ], [ 10.5, 47 ],
                [ 11, 3 ],    [ 11.5, 3 ],  [ 12, 16 ],  [ 12.5, 12 ],
                [ 13, 3 ],    [ 14, 24 ],   [ 14.5, 5 ], [ 15, 30 ],
                [ 15.5, 13 ], [ 16, 0 ],    [ 16.5, 2 ], [ 17, 1 ],
                [ 17.5, 2 ],  [ 18, 3 ],    [ 19, 4 ],   [ 19.5, 0 ],
                [ 20, 15 ],   [ 20.5, 10 ], [ 21, 2 ],   [ 22, 1 ],
                [ 22.5, 1 ],  [ 23, 1 ],    [ 24, 5 ],   [ 24.5, 2 ],
                [ 25, 2 ],    [ 27.5, 3 ],  [ 29, 0 ],   [ 30, 0 ],
                [ 34.5, 1 ],  [ 35, 1 ],    [ 36.5, 0 ], [ 37.5, 0 ],
                [ 40, 0 ],    [ 55, 0 ]],
            symbolSize:4,
        },
        ]
    };
    return option;
}*/

/***
 * 好看的蓝紫色折线图
 */
let zhexian=function (name) {
    mainChart=echarts.init(document.getElementById(name));
    let option=zhexianOption();
    mainChart.setOption(option);
}
let zhexianOption=function () {
    option = {
        title: {
            text: "BE HAPPY",
            left: "center",
            bottom: "5%",
            textStyle: {
                color: "#fff",
                fontSize: 8
            }
        },
        grid: {
            top: '20%',
            left: '10%',
            right: '10%',
            bottom: '15%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            axisLabel: {
                margin: 30,
                color: '#ffffff63',
                fontSize:8,
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
                length: 25,
                lineStyle: {
                    color: "#ffffff1f"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff1f'
                }
            }
        },
        yAxis: [{
            type: 'value',
            position: 'right',
            axisLabel: {
                margin: 20,
                color: '#ffffff63',
                fontSize:8,
            },

            axisTick: {
                show: true,
                length: 15,
                lineStyle: {
                    color: "#ffffff1f",
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ffffff1f'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            }
        }],
        series: [{
            name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "#fff", // 线条颜色
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                    fontSize:8,
                }
            },
            itemStyle: {
                color: "red",
                borderColor: "#fff",
                borderWidth: 3
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#83adff'//蓝色
                    },
                        {
                            offset: 1,
                            color: '#ba5ae8'//紫色
                        }
                    ], false),
                }
            },
            data: [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200]
        }]
    };
    return option;
}
/***
 * 综合能力
 * @param name
 */
let ability=function(name){
    myChart1=echarts.init(document.getElementById(name));
    let option=abilityOption();
    myChart1.setOption(option);
}
let abilityOption=function(){
    let option = {
        color: ['#9c9cff', '#da20a9','#f2c87c'],
        legend: {//底部标识
            show: true,
            icon: "circle",
            bottom:-3,
            center: 0,
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 11,
            orient: "horizontal",
            data: ['2016级', '2017级','2018级'],
            textStyle: {
                fontSize: 10,
                color: '#8C8C8C'
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    borderRadius: 3,
                    padding: 0
                }
            },
            nameGap:5,
            indicator: [{
                name: '科研创新',
                max: 15
            },
                {
                    name: '专业技能',
                    max: 15
                },
                {
                    name: '文体特长',
                    max: 15
                },
                {
                    name: '团学工作',
                    max: 15
                },
                {
                    name: '社会实践',
                    max: 15
                }
            ],
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 10,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
        },

        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            //areaStyle: {normal: {}},

            data: [{
                value: [6.315450644,10.14806867,3.714592275,8.072961373,14.55793991],
                name: '2016级',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: 'rgba(92,163,243,0.1)'
                            }, {
                                offset: 1,
                                color: 'rgba(92,163,243,0.9)'
                            }],
                            false)
                    },
                },
            },
                {
                    value: [5.104325266,14.36200086,3.508546395,12.15953569,13.53830616],
                    name: '2017级',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [{
                                    offset: 0,
                                    color: 'rgba(218,32,169,0.1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(218,32,169,0.9)'
                                }],
                                false)
                        },
                    },
                },
                {
                    value: [1.075581395,1.901162791,4.430232558,9.488372093,11.43604651],
                    name: '2018级',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [{
                                    offset: 0,
                                    color: 'rgba(242,200,124,0.1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(242,200,124,0.9)'
                                }],
                                false)
                        },
                    },
                }
            ]
        }]
    };
    return option;
}

/***
 * 主屏侧边栏的图
 */
let subChart1,subChart2,subChart3;
let subAbility=function(name){
    subChart1=echarts.init(document.getElementById(name));
    let option=abilityOption2();
    subChart1.setOption(option);
}
let abilityOption2=function(){
    let option = {
        color: ['#9c9cff', '#da20a9','#f2c87c'],
        grid:{
          bottom:'1%',
            top:'top',
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    show:false,
                    color: '#fff',
                    fontSize: 8,
                    borderRadius: 3,
                    padding: 0,
                }
            },
            nameGap:1,
            indicator: [
                {
                name: '科研',
                max: 15
            },
                {
                    name: '专业',
                    max: 15
                },
                {
                    name: '文体',
                    max: 15
                },
                {
                    name: '团学',
                    max: 15
                },
                {
                    name: '实践',
                    max: 15
                }
            ],
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 2,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
        },
        series: [{
            name: '2016级',
            type: 'radar',
            //areaStyle: {normal: {}},
            data: [{
                value: [6.315450644, 10.14806867, 3.714592275, 8.072961373, 14.55793991],
                name: '2016级',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: 'rgba(92,163,243,0.1)'
                            }, {
                                offset: 1,
                                color: 'rgba(92,163,243,0.9)'
                            }],
                            false)
                    },
                },
            }
            ]
        }]
    };
    return option;
}

let subAbility1=function(name){
    subChart2=echarts.init(document.getElementById(name));
    let option=abilityOption3();
    subChart2.setOption(option);
}
let abilityOption3=function(){
    let option = {
        color: ['#da20a9', '#da20a9','#da20a9'],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    fontSize: 8,
                    color: '#fff',
                    borderRadius: 3,
                    padding: [0,0]
                }
            },
            nameGap:1,
            indicator: [
                {
                name: '科研',
                max: 15
            },
                {
                    name: '专业',
                    max: 15
                },
                {
                    name: '文体',
                    max: 15
                },
                {
                    name: '团学',
                    max: 15
                },
                {
                    name: '实践',
                    max: 15
                }
            ],
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 5,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
        },
        series: [{
            name: '17级',
            type: 'radar',
            data: [
                {
                    name: '2017级',
                    value: [5.104325266,14.36200086,3.508546395,12.15953569,13.53830616],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [{
                                    offset: 0,
                                    color: 'rgba(218,32,169,0.1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(218,32,169,0.9)'
                                }],
                                false)
                        },
                    },
                },
            ]
        }]
    };
    return option;
}

let subAbility2=function(name){
    subChart3=echarts.init(document.getElementById(name));
    let option=abilityOption4();
    subChart3.setOption(option);
}
let abilityOption4=function(){
    let option = {
        color: ['#F2C87C', '#F2C87C','#f2c87c'],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    fontSize: 8,
                    color: '#fff',
                    borderRadius: 3,
                    padding: 0
                }
            },
            nameGap:5,
            indicator: [{
                name: '科研',
                max: 15
            },
                {
                    name: '专业',
                    max: 15
                },
                {
                    name: '文体',
                    max: 15
                },
                {
                    name: '团学',
                    max: 15
                },
                {
                    name: '实践',
                    max: 15
                }
            ],
            splitArea: {
                areaStyle: {
                    color: 'transparent'
                }
            },
            axisLabel: {
                show: false,
                fontSize: 10,
                color: "#000",
                fontStyle: "normal",
                fontWeight: "normal"
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(111,46,178,0.5)"
                }
            },
        },
        series: [{
            name: '2018级',
            type: 'radar',
            //areaStyle: {normal: {}},

            data: [
                {
                    value: [1.075581395,1.901162791,4.430232558,9.488372093,11.43604651],
                    name: '2018级',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                [{
                                    offset: 0,
                                    color: 'rgba(242,200,124,0.1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(242,200,124,0.9)'
                                }],
                                true)
                        },
                    },
                }
            ]
        }]
    };
    return option;
}

let ciyun3=function(name){
    mainChart=echarts.init(document.getElementById(name));
    let option=ciyun3Option();
    mainChart.setOption(option);
}
let ciyun3Option=function(){
    let option = {
        "tooltip": {
            "show": true,
            "textStyle": {
                "fontSize": "16",
                "color": "#3c3c3c"
            },
            "backgroundColor": "#fff",
            "borderColor": "#ddd",
            "borderWidth": 1
        },
        "series": [{
            "name": "积分排行",
            "type": "wordCloud",
            "gridSize": 20,
            "sizeRange": [12, 50],
            "rotationRange": [0, 0],
            "shape": "circle",
            "autoSize": {
                "enable": true,
                "minSize": 18
            },
            "data": [{
                "name": "供应商01",
                "value": 200,
                "textStyle": {
                    "normal": {
                        "color": "#ffe400"
                    }
                }
            }, {
                "name": "供应商02",
                "value": 181,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商03",
                "value": 386,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商04",
                "value": 155,
                "textStyle": {
                    "normal": {
                        "color": "#ffe400"
                    }
                }
            }, {
                "name": "供应商05",
                "value": 467,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商06",
                "value": 244,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商07",
                "value": 898,
                "textStyle": {
                    "normal": {
                        "color": "#e75a46"
                    }
                }
            }, {
                "name": "供应商08",
                "value": 484,
                "textStyle": {
                    "normal": {
                        "color": "#e75a46"
                    }
                }
            }, {
                "name": "供应商09",
                "value": 112,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商10",
                "value": 465,
                "textStyle": {
                    "normal": {
                        "color": "#ffe400"
                    }
                }
            }, {
                "name": "供应商11",
                "value": 447,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商12",
                "value": 582,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商13",
                "value": 555,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商14",
                "value": 550,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商15",
                "value": 462,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商16",
                "value": 366,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商17",
                "value": 360,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商18",
                "value": 282,
                "textStyle": {
                    "normal": {
                        "color": "#e75a46"
                    }
                }
            }, {
                "name": "供应商19",
                "value": 273,
                "textStyle": {
                    "normal": {
                        "color": "#29a8ed"
                    }
                }
            }, {
                "name": "供应商20",
                "value": 265,
                "textStyle": {
                    "normal": {
                        "color": "#ffe400"
                    }
                }
            }, {
                "name": "供应商21",
                "value": 265,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }, {
                "name": "供应商22",
                "value": 265,
                "textStyle": {
                    "normal": {
                        "color": "#634fd4"
                    }
                }
            }]
        }]
    };
    return option;
}

/**
 * 班级参与度 TOP3
 * @param name
 */
let joinDegree=function(name){
    myChart3=echarts.init(document.getElementById(name));
    let option=joinDegreeOption();
    myChart3.setOption(option);
}
//网址 https://gallery.echartsjs.com/editor.html?c=xLFM_rZCC
let joinDegreeOption=function(){
    let option={
        grid:{
            left:'25%',
            top:'25%',
            bottom:'15%',
            right:'20%'
        },
        legend:{
            itemWidth:18,
            itemHeight:10,
            name:[],
            textStyle:{
                color:'#fff',
                fontSize:8,
            },
            top:'5%',
            bottom:'20%'
        },
        // tooltip（提示框组件）
        tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'shadow'
            },
            //formatter:'{b0}: {c0}+{c1}<br />{b1}: {c1}' 设置鼠标悬浮时的时间
            show:false,
        },
        xAxis: {
            type: 'category',
            data: ['会基1801', '人力1701', '财政1703'],
            axisLabel: {
                show: true ,
                color: 'rgba(242,200,124,0.6)',
                fontSize: 6,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                // show:false,
                lineStyle: {
                    color: 'rgba(242,200,124,0.1)'
                }
            },
            axisTick: {
                show: false
            },

        },
        yAxis: [
            {
                type: 'value',
                //axisTick 坐标轴刻度相关设置
                axisTick: {
                    show: false
                },
                //axixLine 坐标轴轴线相关设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(242,200,124,0.6)'
                    }
                },
                spitLine:{//隐藏分割线
                    show:false,
                },
                //axisLabel 坐标轴刻度标签的相关设置
                axisLabel: {
                    show: true,
                    color: 'rgba(242,200,124,0.6)',
                    fontSize: 8
                }
            },
        ],
        series: [
            {
                name:'全班人数',
                type: 'bar',
                stack:'费用',
                data: [19,32,27],
                barWidth: '10%',
                itemStyle: {
                    color:'#8f63de',
                    size:12,
                },
            },
            {
                name: '参与人数',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack:'费用',
                data: [11,14,10],
                barWidth: '10%',
                itemStyle: {
                    color:'#da20a9',
                },
            },
        ]
    };
    return option;
}

let main_joinDegreeOption=function(){
    let option={
        grid:{
            left:'25%',
            top:'25%',
            bottom:'15%',
            right:'20%'
        },
        legend:{
            name:[],
            textStyle:{
                color:'#fff',
                fontSize:'120%',
            },
            top:'10%',
            bottom:'20%'
        },
        // tooltip（提示框组件）
        tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['会基1801', '人力1701', '财政1703'],
            axisLabel: {
                show: true ,
                color: '#fff',
                fontSize: 12,
            },
            splitLine: {
                show: false
            },
            axisLine: {
                // show:false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisTick: {
                show: false
            },

        },
        yAxis: [
            {
                type: 'value',
                //axisTick 坐标轴刻度相关设置
                axisTick: {
                    show: true
                },
                //axixLine 坐标轴轴线相关设置
                axisLine: {
                    lineStyle: {
                        color: '#FFFFFF',
                    }
                },
                //axisLabel 坐标轴刻度标签的相关设置
                axisLabel: {
                    show: true,
                    color: '#fff',
                    fontSize: 14
                }
            },
        ],
        series: [
            {
                name:'全班人数',
                type: 'bar',
                stack:'费用',
                data: [19,32,27],
                barWidth: '10%',
                itemStyle: {
                    color:'#8f63de',
                    size:12,
                },
            },
            {
                name: '参与人数',
                //type决定图表类型
                type: 'bar',
                //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                stack:'费用',
                data: [11,14,10],
                barWidth: '10%',
                itemStyle: {
                    color:'#da20a9',
                },
            },
        ]
    };
    return option;
}

/**
 * 主图
 * @param name
 */
let ditu=function(name){
    mainChart=echarts.init(document.getElementById(name));
    let option=dituOption();
    mainChart.setOption(option);
}
//网址 https://gallery.echartsjs.com/editor.html?c=xbjlViJ7Q
let dituOption=function(){
    var mapName = 'china'
    var data = [
        {name:"湖北",value:335},
        {name:"云南",value:250},
        {name:"河南",value:200},
        {name:"山东",value:175},
        {name:"四川",value:125},
        {name:"江西",value:125},
        {name:"安徽",value:125},
        {name:"湖南",value:75},
        {name:"广东",value:75},
        {name:"北京",value:75},
        {name:"深圳",value:50},
        {name:"江苏",value:50},
        {name:"贵州",value:50},
        {name:"重庆",value:50},
        {name:"陕西",value:50},
        {name:"新疆",value:50},
        {name:"内蒙古",value:25},
        {name:"西藏",value:25},
        {name:"青海",value:25},
        {name:"福建",value:25},
        {name:"上海",value:25},
        {name:"海南",value:25},
        {name:"浙江",value:25},
        {name:"甘肃",value:25},
    ];

    var geoCoordMap = {};
    /*获取地图数据*/
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;

    });

    console.log(data)
    var max = 480,
        min = 9; // todo
    var maxSize4Pin = 100,
        minSize4Pin = 20;

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    let option = {
        grid:{
          top:'10%',
          bottom:'10%',
        },
        tooltip: {
            padding: 0,
            enterable: true,
            transitionDuration: 1,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },

        },
        visualMap: {
            show: true,
            min: 0,
            max: 200,
            left: '10%',
            top: 'bottom',
            itemWidth:10,
            itemHeight:80,
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#7F70D8', '#DF64BD'] // 蓝 紫 （低 高）
            }
        },
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#023677',
                    borderColor: '#1180c7',
                },
                emphasis: {
                    areaColor: '#4499d0',
                }
            },
            layoutCenter: ['50%', '50%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 460
        },
        series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFF400'
                }
            }
        },
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 6,
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 10)),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'left',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'yellow',
                        shadowBlur: 10,
                        shadowColor: 'yellow'
                    }
                },
                zlevel: 1
            },

        ]
    };
    return option;
}
/***
 * 地图排名
 * @param name
 */
//社会实践地区排名
let rank=function(name){
    rankChart=echarts.init(document.getElementById(name));
    let option=rankOption();
    rankChart.setOption(option);
}
//网址：https://gallery.echartsjs.com/editor.html?c=xmutj6hMd
let rankOption=function(){
    var yData = ['四川', '山东', '河南', '云南', '湖北']
    var data = [1.25, 1.75, 2, 2.5, 33.5]
//  红色
    var color = ['#784ba0', '#bd5293', '#d565c0', '#956FD4','#FF6B5F']
    var seriesData = []
    data.map((item, index) => {
        seriesData.push({
            name: '',
            value: item,
            itemStyle: {
                normal: {
                    color: color[index],
                    barBorderRadius: 12
                }
            }
        })
    })
    let option = {
        legend: {
            show: false
        },
        grid: {
            left: '1%',
            right: '12%',
            bottom: '0%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
            max:40,
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#363e83'
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: 10
                    }
                },
                data: yData
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: yData
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: yData
            }],
        series: [
            {
                name: '',
                type: 'bar',
                stack: '1',
                yAxisIndex: 0,
                data: seriesData,
                color: ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F'],
                barWidth: 8,
                z: 3
            },
            {
                name: '',
                type: 'bar',
                yAxisIndex: 2,
                data: [400, 400, 400, 400, 400],
                barWidth: 8,
                itemStyle: {
                    color: '#001a2b',
                    barBorderRadius: 8
                },
                label: {
                    normal: {
                        show: true,
                        color: '#fff',
                        fontSize: 10,
                        padding: [0, 0, 0, 0],
                        position: 'right',
                        formatter: function (params) {
                            return data[params.dataIndex]
                        }
                    }
                },
                z: 0
            }
        ]
    };
    return option;
}

/**
 * 标题演变
 * @param name
 */
let topicChange=function(name){
    myChart2=echarts.init(document.getElementById(name));
    let option=topicChangeOption();
    myChart2.setOption(option);
}
//网址： https://gallery.echartsjs.com/editor.html?c=xB5W30nk3N
let topicChangeOption=function(){
    // 排行数据
    let rankData = [
        {
            'category': '2018-07',
            'data': [
                {
                    'name': '扶贫',
                    'value': 0.16
                },

                {
                    'name': '乡村振兴',
                    'value': 0.11
                },

                {
                    'name': '红色',
                    'value': 0.11
                },

                {
                    'name': '助力',
                    'value': 0.096
                },

                {
                    'name': '新时代',
                    'value': 0.096
                },
            ],
            'date': '2018-09'
        },

        {
            'category': '2019-07',
            'data': [
                {
                    'name': '扶贫',
                    'value': 0.186
                },

                {
                    'name': '乡村振兴',
                    'value': 0.16
                },

                {
                    'name': '红色',
                    'value': 0.12
                },

                {
                    'name': '建设',
                    'value': 0.107
                },

                {
                    'name': '产业',
                    'value': 0.107
                },
                ],
            'date': '2019-09'
        },

    ];

    let playInterval = 50;
    let unit = {
        '0': '',
        '1': '万',
        '2': '亿',
        '3': '兆'
    };
// 千分位
    function formatNum(strNum) {
        if (Math.round(strNum) <= 10 && strNum.length <= 3) {
            return strNum;
        }
        u0 = 0
        while (Math.round(strNum) > 1000000 && u0 < 3) {
            strNum = Math.round(Math.round(strNum) / 10000);
            u0 = u0 + 1
        }

        if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
            return strNum;
        }
        var a = RegExp.$1,
            b = RegExp.$2,
            c = RegExp.$3;
        var re = new RegExp();
        re.compile("(\\d)(\\d{3})(,|$)");
        while (re.test(b)) {
            b = b.replace(re, "$1,$2$3");
        }
        return a + "" + b + "" + c + unit[String(u0)];
    }
// 排行颜色
    let colorListMapping = {
        '广东': '#7711AF',
        '山东': '#CF77FF',
        '浙江': '#AE004F',
        '上海': '#F35872',
        '北京': '#FA7729',
        '江苏': '#FFC526',
        '安徽': '#F8E71C',
        '四川': '#34ADAE',
        '湖北': '#3DDFD2',
        '河北': '#A0FFFF',
        '湖南': '#7711AF',
        '福建': '#CF77FF',
        '河南': '#7711AF',
        '广西': '#CF77FF',
        '陕西': '#AE004F',
        '云南': '#F35872',
        '江西': '#FA7729',
        '天津': '#FFC526',
        '重庆': '#F8E71C',
        '山西': '#34ADAE',
        '辽宁': '#3DDFD2',
        '贵州': '#A0FFFF',
        '甘肃': '#7711AF',
        '内蒙古': '#CF77FF',
        '海南': '#7711AF',
        '黑龙江': '#CF77FF',
        '吉林': '#AE004F',
        '宁夏': '#F35872',
        '新疆': '#FA7729',
        '青海': '#FFC526'
    };
    let colorListS1 = [];
    let colors = []
    for (let key in colorListMapping) {
        colors.push(colorListMapping[key])
    }
    for (let i = 0; i < rankData.length; i++) {
        let colorListF1 = {};
        for (let n = 0; n < rankData[i].data.length; n++) {
            let name = rankData[i].data[n].name;
            colorListF1[name] = colors[n];
        }
        colorListS1[i] = colorListF1;
    }
// 基础设置
    let option = {
        baseOption: {
            animationDurationUpdate: playInterval*100,
            animationEasingUpdate: 'quinticInOut',
            timeline: {
                show: false,
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                loop: false,
                playInterval: playInterval*80,
                left: null,
                right: 30,
                top: 330,
                bottom: 100,
                height: null,
                label: {
                    normal: {
                        show: true,
                        interval: 0
                    }
                },
                title: [{
                    left: 'center',
                    top: '3%',
                    color:'#fff',
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }, {
                    left: 'center',
                    top: '5%'
                }],
                symbol: 'none',
                lineStyle: {
                    color: '#ccc',
                    show: false
                },
                checkpointStyle: {
                    symbol: 'none',
                    color: '#fff',
                    borderColor: '#777',
                    show: false,
                    borderWidth: 1
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#fff',
                        show: false,
                        borderColor: '#fff'
                    },
                    emphasis: {
                        color: '#fff',
                        borderColor: '#fff'
                    }
                },
                data: rankData.map(function(ele) {
                    return ele.date
                })
            },
            title:{
                color:'#fff',
                left:'center',
                top:'6%',
                right:'80%'
            },
            grid: [{
                left: '15%',
                right: '25%',
                top: '22%',
                height: 'auto',
                bottom: '15%'
            }],
            xAxis: [{

            }],
            yAxis: [{
                max:0.5,
                min:0,
            }],
            series: [{
                id: 'bar',
                type: 'bar',
                barWidth: '10',
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: []
            }]
        },
        options: []
    };
    let xMaxInterval = 0.1;
    for (let i = 0; i < rankData.length; i++) {
        let xMax = 0.5;
        if (rankData[i].data[0].value > 20) {
            xMax = 'dataMax'
        }
        if (rankData[i].data[0].value / xMaxInterval >= 10) {
            xMaxInterval = rankData[i].data[0].value / 5
        }
        option.options.push({
            xAxis: [{
                show: true,
                type: 'value',
                interval: xMaxInterval,
                max:0.5,
                min:0,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: 'rgba(121,121,121,0.9)',
                    formatter: function(value, index) {
                        // 空一格显示一次坐标值
                        if (index % 2 === 0) {
                            u = 0;
                            while (value > 100000 && u < 3) {
                                value = Math.round(value / 10000);
                                u = u + 1
                            }
                            return String(value) + unit[String(u)]
                        } else {
                            return '';
                        }
                    },
                    textStyle: {
                        color: 'rgba(121,121,121,0.9)'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(121,121,121,0.3)', 'rgba(121,121,121,0)']
                    }
                }
            }],
            title: {
                text: rankData[i].category+' 至 '+rankData[i].date+'',
                color: '#fff',
                textStyle:{
                    fontSize:'140%',
                    color:'#fff'
                }
            },
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)'
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {}
                },
                data: rankData[i].data.map(function(ele) {
                    return ele.name
                }).reverse()
            }],
            series: [{
                id: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#f4aeff',
                                '#CF77FF',
                                '#FA7729',
                                '#FFC526',
                                '#F8E71C',];
                            var colorListr = [
                                '#f4aeff',
                                '#CF77FF',
                                '#FA7729',
                                '#FFC526',
                                '#F8E71C',];
                            return colorListr[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%'
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(40, 40, 40, 0.5)',
                    }
                },
                label: {
                    normal: {
                        position: 'right',
                        formatter: function(p) {
                            return p.name + ": " + formatNum(p.value);
                        }
                    }
                },
                data: rankData[i].data.map(function(ele) {
                    return ele.value
                }).reverse()/*sort(function(a, b) {
                    return a > b
                })*/
            }]
        })
    };
    return option;
}

let main_topicChange=function(name){
    myChart2=echarts.init(document.getElementById(name));
    let option=main_topicChangeOption();
    myChart2.setOption(option);
}

let main_topicChangeOption=function(){
    // 排行数据
    let rankData = [
        {
            'category': '2018-07',
            'data': [
                {
                    'name': '扶贫',
                    'value': 0.16
                },

                {
                    'name': '乡村振兴',
                    'value': 0.11
                },

                {
                    'name': '红色',
                    'value': 0.11
                },

                {
                    'name': '助力',
                    'value': 0.096
                },

                {
                    'name': '新时代',
                    'value': 0.096
                },
            ],
            'date': '2018-09'
        },

        {
            'category': '2019-07',
            'data': [
                {
                    'name': '扶贫',
                    'value': 0.186
                },

                {
                    'name': '乡村振兴',
                    'value': 0.16
                },

                {
                    'name': '红色',
                    'value': 0.12
                },

                {
                    'name': '建设',
                    'value': 0.107
                },

                {
                    'name': '产业',
                    'value': 0.107
                },
            ],
            'date': '2019-09'
        },

    ];

    let playInterval = 50;
    let unit = {
        '0': '',
        '1': '万',
        '2': '亿',
        '3': '兆'
    };
// 千分位
    function formatNum(strNum) {
        if (Math.round(strNum) <= 10 && strNum.length <= 3) {
            return strNum;
        }
        u0 = 0
        while (Math.round(strNum) > 1000000 && u0 < 3) {
            strNum = Math.round(Math.round(strNum) / 10000);
            u0 = u0 + 1
        }

        if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
            return strNum;
        }
        var a = RegExp.$1,
            b = RegExp.$2,
            c = RegExp.$3;
        var re = new RegExp();
        re.compile("(\\d)(\\d{3})(,|$)");
        while (re.test(b)) {
            b = b.replace(re, "$1,$2$3");
        }
        return a + "" + b + "" + c + unit[String(u0)];
    }
// 排行颜色
    let colorListMapping = {
        '广东': '#7711AF',
        '山东': '#CF77FF',
        '浙江': '#AE004F',
        '上海': '#F35872',
        '北京': '#FA7729',
        '江苏': '#FFC526',
        '安徽': '#F8E71C',
        '四川': '#34ADAE',
        '湖北': '#3DDFD2',
        '河北': '#A0FFFF',
        '湖南': '#7711AF',
        '福建': '#CF77FF',
        '河南': '#7711AF',
        '广西': '#CF77FF',
        '陕西': '#AE004F',
        '云南': '#F35872',
        '江西': '#FA7729',
        '天津': '#FFC526',
        '重庆': '#F8E71C',
        '山西': '#34ADAE',
        '辽宁': '#3DDFD2',
        '贵州': '#A0FFFF',
        '甘肃': '#7711AF',
        '内蒙古': '#CF77FF',
        '海南': '#7711AF',
        '黑龙江': '#CF77FF',
        '吉林': '#AE004F',
        '宁夏': '#F35872',
        '新疆': '#FA7729',
        '青海': '#FFC526'
    };
    let colorListS1 =  [
        '#7711AF',
        '#CF77FF',
        '#FA7729',
        '#FFC526',
        '#F8E71C',];
    let colors = [
        '#7711AF',
        '#CF77FF',
        '#FA7729',
        '#FFC526',
        '#F8E71C',];
// 基础设置
    let option = {
        baseOption: {
            animationDurationUpdate: playInterval*60,
            animationEasingUpdate: 'quinticInOut',
            timeline: {
                show: false,
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                loop: false,
                playInterval: playInterval*40,
                left: null,
                right: 30,
                top: 330,
                bottom: 100,
                height: null,
                label: {
                    normal: {
                        show: true,
                        interval: 0
                    }
                },
                title: [{
                    left: 'center',
                    top: '3%',
                    color:'#fff',
                    textStyle: {
                        fontSize: 16,
                        color: '#fff'
                    }
                }, {
                    left: 'center',
                    top: '5%'
                }],
                symbol: 'none',
                lineStyle: {
                    color: '#ccc',
                    show: false
                },
                checkpointStyle: {
                    symbol: 'none',
                    color: '#fff',
                    borderColor: '#777',
                    show: false,
                    borderWidth: 1
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#fff',
                        show: false,
                        borderColor: '#fff'
                    },
                    emphasis: {
                        color: '#fff',
                        borderColor: '#fff'
                    }
                },
                data: rankData.map(function(ele) {
                    return ele.date
                })
            },
            title:{
                color:'#fff',
                left:'center',
                top:'6%',
                right:'80%'
            },
            grid: [{
                left: '20%',
                right: '15%',
                top: '22%',
                height: 'auto',
                bottom: '15%'
            }],
            xAxis: [{

            }],
            yAxis: [{

            }],
            series: [{
                id: 'bar',
                type: 'bar',
                barWidth: '10',
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                data: []
            }]
        },
        options: []
    };
    let xMaxInterval = 0.1;
    for (let i = 0; i < rankData.length; i++) {
        let xMax = 0.5;
        if (rankData[i].data[0].value > 20) {
            xMax = 'dataMax'
        }
        if (rankData[i].data[0].value / xMaxInterval >= 10) {
            xMaxInterval = rankData[i].data[0].value / 5
        }
        option.options.push({
            xAxis: [{
                show: true,
                type: 'value',
                interval: xMaxInterval,
                max: xMax,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: 'rgba(121,121,121,0.9)',
                    formatter: function(value, index) {
                        // 空一格显示一次坐标值
                        if (index % 2 === 0) {
                            u = 0;
                            while (value > 100000 && u < 3) {
                                value = Math.round(value / 10000);
                                u = u + 1
                            }
                            return String(value) + unit[String(u)]
                        } else {
                            return '';
                        }
                    },
                    textStyle: {
                        color: 'rgba(121,121,121,0.9)'
                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(121,121,121,0.3)', 'rgba(121,121,121,0)']
                    }
                }
            }],
            title: {
                text: rankData[i].category+' 至 '+rankData[i].date+'',
                color: '#fff',
                textStyle:{
                    fontSize:20,
                    color:'#fff'
                }
            },
            yAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(121,121,121,0.3)'
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {}
                },
                data: rankData[i].data.map(function(ele) {
                    return ele.name
                }).reverse()
            }],
            series: [{
                id: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#f4aeff',
                                '#CF77FF',
                                '#FA7729',
                                '#FFC526',
                                '#F8E71C',];
                            var colorListr = [
                                '#f4aeff',
                                '#CF77FF',
                                '#FA7729',
                                '#FFC526',
                                '#F8E71C',];
                            return colorListr[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%'
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(40, 40, 40, 0.5)',
                    }
                },
                label: {
                    normal: {
                        position: 'right',
                        formatter: function(p) {
                            return p.name + ": " + formatNum(p.value);
                        }
                    }
                },
                data: rankData[i].data.map(function(ele) {
                    return ele.value
                }).reverse()/*sort(function(a, b) {
                    return a > b
                })*/
            }]
        })
    };
    return option;
}

/***
 * 话题综合排名-作废
 * @param name
 */
let topicChart;
let topicRank=function(name){
     topicChart=echarts.init(document.getElementById(name));
    let option=topicRankOption();
    topicChart.setOption(option);
}

let topicRankOption=function(){
    let option = {
        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name + '：' + params.data['value'] + '个'
            },
        },
        grid: {
            left: 10,
            top:'top'
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            inverse: true,
            nameGap: 16,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                lineHeight:4,
                interval: 0,
                margin: 10,
                textStyle: {
                    color: '#fff',
                    align: 'left',
                    fontSize: 14
                },
                rich: {
                    a: {
                        color: '#fff',
                        backgroundColor: '#d565c0',
                        width: 15,
                        height: 15,
                        align: 'center',
                        borderRadius: 5
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: '#784ba0',
                        width: 15,
                        height: 15,
                        align: 'center',
                        borderRadius: 5
                    }
                },
                formatter: function(params) {
                    if (parseInt(params.slice(0, 1)) < 3) {
                        return [
                            '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    } else {
                        return [
                            '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    }
                }
            },
            data: ["0石嘴山市", "1银川市", "2吴忠市", "3中卫市", "4固原市"]
        },
        series: []
    }
    return option;
}

/****
 * 同乡率排名
 */
let tongxiangChart;
let tongxiangRank=function(name){
    tongxiangChart=echarts.init(document.getElementById(name));
    let option=topicRankOption();
    tongxiangChart.setOption(option);
}

let tongxiangRankOption=function(){
    let option = {
        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name + '：' + params.data['value'] + '个'
            },
        },
        grid: {
            left: 10,
            top:'top'
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            inverse: true,
            nameGap: 16,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                lineHeight:4,
                interval: 0,
                margin: 10,
                textStyle: {
                    color: '#fff',
                    align: 'left',
                    fontSize: 14
                },
                rich: {
                    a: {
                        color: '#fff',
                        backgroundColor: '#d565c0',
                        width: 15,
                        height: 15,
                        align: 'center',
                        borderRadius: 5
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: '#784ba0',
                        width: 15,
                        height: 15,
                        align: 'center',
                        borderRadius: 5
                    }
                },
                formatter: function(params) {
                    if (parseInt(params.slice(0, 1)) < 3) {
                        return [
                            '{a|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    } else {
                        return [
                            '{b|' + (parseInt(params.slice(0, 1)) + 1) + '}' + '  ' + params.slice(1)
                        ].join('\n')
                    }
                }
            },
            data: ["0湖北省", "1广东省", "2广西省", "3河南省", "4山东省"]
        },
        series: []
    }
    return option;
}

/***
 * 同乡率
 * @param name
 */
let ciyun=function (name) {
    myChart4=echarts.init(document.getElementById(name));
    let option=ciyunOption();
    myChart4.setOption(option);
}
//网址 https://gallery.echartsjs.com/editor.html?c=xrD67xXLT9
let  ciyunOption=function () {
    let data = [{
        name: "湖北",
        value: 0.857
    },
        {
            name: "山东",
            value: 0.8
        },
        {
            name: "广西",
            value: 0.7
        }
    ];
    let arrName = getArrayValue(data, "name");
    let arrValue = getArrayValue(data, "value");
    let sumValue = 1;
    let objData = array2obj(data, "name");
    let optionData = getData(data);
    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function(t) {
                res.push(t[key]);
            });
        }
        return res;
    }

    function array2obj(array,key) {
        var resObj = {};
        for(var i=0;i<array.length;i++){
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }

    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '同乡率',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],//彩色圆圈的半径
                center: ["34%", "55%"],//彩色圆圈的中心位置
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],//白色圆圈的半径
                center: ["34%", "55%"],//圆圈的中心位置
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 100,
                    itemStyle: {
                        color: "#fff",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 0,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push((data[i].value * 100).toFixed(2) + "%");
        }
        return res;
    }

    let option = {
        legend: {//图例样式设置
            show: true,
            top: "center",
            left: '68%',
            data: arrName,
            itemWidth: 10,
            itemHeight: 6,
            width:50,
            padding: [0, 5],
            itemGap: 25,
            formatter: function(name) {
                return "{title|" + name + "}\n{value|" + (objData[name].value*100) + "%}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 10,
                        lineHeight: 10,
                        color: "rgba(255,255,255,.45)"
                    },
                    value: {
                        fontSize: 14,
                        lineHeight: 18,
                        color: "rgba(255,255,255,.85)"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['#9c9cff', '#cf77ff', '#f0acfb'],
        grid: {
            top: '20%',
            bottom: '48%',
            left: "40%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: "#000",
                    fontSize: 10,
                },
                show: false
            },
            data: optionData.yAxis
        }],
        xAxis: [{
            show: false
        }],
        series: optionData.series
    };
    return option;
}

//主图显示同乡率
let main_ciyun=function(name){
    let mychart=echarts.init(document.getElementById(name));
    let option=main_ciyunOption();
    mychart.setOption(option);
}
let main_ciyunOption=function(){
    data = [
        {
        name: "湖北",
        value: 0.8571
    },
        {
            name: "山东",
            value: 0.8
        },
        {
            name: "广西",
            value: 0.7
        }
    ];
    let arrName = getArrayValue(data, "name");
    let arrValue = getArrayValue(data, "value");
    let sumValue = 1;
    let objData = array2obj(data, "name");
    let optionData = getData(data);
    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function(t) {
                res.push(t[key]);
            });
        }
        return res;
    }

    function array2obj(array,key) {
        var resObj = {};
        for(var i=0;i<array.length;i++){
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }

    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: '同乡率',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["38%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                center: ["38%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 100,
                    itemStyle: {
                        color: "#fff",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 0,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push((data[i].value * 100).toFixed(2) + "%");
        }
        return res;
    }

    let option = {
        legend: {
            show: true,
            top: "center",
            left: '70%',
            data: arrName,
            itemWidth: 35,
            itemHeight: 20,
            width:50,
            padding: [0, 5],
            itemGap: 25,
            formatter: function(name) {
                return "{title|" + name + "}\n{value|" + (objData[name].value*100) + "%}"
            },
            textStyle: {
                rich: {
                    title: {
                        fontSize: 10,
                        lineHeight: 10,
                        color: "rgba(255,255,255,.45)"
                    },
                    value: {
                        fontSize: 14,
                        lineHeight: 18,
                        color: "rgba(255,255,255,.85)"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['#9c9cff', '#cf77ff', '#f0acfb'],
        grid: {
            top: '20%',
            bottom: '48%',
            left: "30%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                inside: true,
                textStyle: {
                    color: "#000",
                    fontSize: 10,
                },
                show: false
            },
            data: optionData.yAxis
        }],
        xAxis: [{
            show: false
        }],
        series: optionData.series
    };
    return option;
}


let time=[0.5,1.0,1.5,2.0,2.50,3.0,4.0,4.5,5.0,5.5,6.0,6.5,7.0,7.5,8.0,8.5,9.0,9.5,10.0,10.5,11.0,11.5,12.0,12.50,13.00,14.00,14.5,15.00,15.50,16.00,16.50,17.0,17.5,18.0,19.0,19.5,20.0,20.5,21.0,22.0,22.5,23.0,24.0,24.5,25.0,27.5,29.0,30.0,34.5,35.0,36.5,37.5,40.0,55.0]
let four=[ 91,23,1,27,15,1,30,9,52,5,1,1,2,3,1,1,11,0,94,11,4,1,5,7,2,23,4,31,3,2,2,3,3,4,1,1,7,0,3,0,2,0,1,0,2,0,4,6,0,0,1,1,2,3]
let three=[171,21,8,22,20,2,41,3,53,5,2,0,3,2,0,1,1,1,86,21,3,1,16,10,3,20,5,20,7,0,0,1,2,3,2,0,11,8,2,1,1,1,5,2,2,1,0,0,1,1,0,0,0,0]
let second=[320,40,16,8,6,0,4,3,22,8,2,0,0,1,2,0,2,0,55,13,0,1,0,1,0,2,0,5,3,0,1,0,0,0,1,0,2,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]
let list=[];
let temp=[];//[[0.5,2016,91]]
let len=time.length;
let sum=0;
for(let i=0;i<len;i++){
    //temp.push(time[i]);
    //temp.push('2018')
    //temp.push(second[i]+three[i]+second[i]);
    sum+=second[i]
    list.push(sum)
    //temp=[]
}
console.log(list)