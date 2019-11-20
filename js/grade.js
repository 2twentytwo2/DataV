
let img=document.getElementsByClassName("Choices_left");
console.log(img.item(0))

/***
 * simple 柱状图
 * 做成 动态变化的柱状图 展示
 * 假期安排，教室位置，起床时间
 * @param name
 */
var myChart;
var myOption;
/**
 * 柱形图
 * @param name
 * @param data
 * @returns {*}
 */
var simpleBar=function (name,data) {
     myChart=echarts.init(document.getElementById(name));
    var option=simpleBarOption(data);
    myChart.setOption(option);
    console.log(myChart);
    return myChart
}
var simpleBarOption=function (data) {
    const curInt = 2;
    var option = {
        color: ['#f0f01c'],
        title : {
            text: '学霸的假期',
            x: 'center',
            textStyle:{
                color:'#fff'
            },
            top:20
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine:{       //y轴
                    lineStyle:{
                        color:'#fff',
                        width:2,//这里是为了突出显示加上的
                    }
                },
                axisTick:{       //y轴刻度线
                    show:false
                },
                splitLine: {     //网格线
                    show: false
                }
            }
        ],
        xAxis : [
            {
                show:false,
                type : 'value',
                axisLine:{       //x轴隐藏
                    show:false
                },
                axisTick:{       //x轴刻度线
                    show:false
                },
                splitLine: {     //网格线
                    show: false
                }

            }
        ],
        series : [{
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390],
                itemStyle: {
                    color: function(params){
                        const key = params.dataIndex;
                        if(key === curInt){
                            return '#f0f01c';
                        }else{
                            return '#37A2DA'
                        }
                    }
                },
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ],
                itemStyle:{
                    color:'#37A2DA'
                },

            }
            }]
    };
 return option;
}

var ciyun=function (name) {
     myChart=echarts.init(document.getElementById(name));
    var option=ciyunOption();
    myChart.setOption(option);
}
var ciyunOption=function () {
    var option = {
        title: {
            text: '最爱通识课',
            x: 'center',
            textStyle: {
                fontSize: 20,
                bottom:20,
                color: 'rgba(255,255,255)'
            }

        },
        tooltip: {
            show: true
        },
        series: [{
            name: '热点分析',
            type: 'wordCloud',
            // size: ['9%', '99%'],
            sizeRange: [6, 36],//最小文字——最大文字
            // textRotation: [0, 45, 90, -45],
            // rotationRange: [-45, 90],//旋转角度区间
            // rotationStep: 90,//旋转角度间隔
            // shape: 'circle',
            // gridSize: 10,//字符间距
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 6
            },
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                            Math.round(Math.random() * 105)+150,
                            Math.round(Math.random() * 105)+150,
                            Math.round(Math.random() * 105)+150
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            }
        }]
    };

    var JosnList = [{
        name: "生活资源",
        value: "999"
    }, {
        name: "供热管理",
        value: "888"
    }, {
        name: "供气质量",
        value: "777"
    }, {
        name: "生活用水管理",
        value: "688"
    }, {
        name: "一次供水问题",
        value: "588"
    }, {
        name: "交通运输",
        value: "516"
    }, {
        name: "城市交通",
        value: "515"
    }, {
        name: "环境保护",
        value: "483"
    }, {
        name: "房地产管理",
        value: "462"
    }, {
        name: "城乡建设",
        value: "449"
    }, {
        name: "社会保障与福利",
        value: "429"
    }, {
        name: "社会保障",
        value: "407"
    }, {
        name: "文体与教育管理",
        value: "406"
    }, {
        name: "公共安全",
        value: "406"
    }, {
        name: "公交运输管理",
        value: "386"
    }, {
        name: "出租车运营管理",
        value: "385"
    }, {
        name: "供热管理",
        value: "375"
    }, {
        name: "市容环卫",
        value: "355"
    }, {
        name: "自然资源管理",
        value: "355"
    }, {
        name: "粉尘污染",
        value: "335"
    }, {
        name: "噪声污染",
        value: "324"
    }];

    option.series[0].data = JosnList;
    return option;
}

let shandian=function (name) {
    let mychart=echarts.init(document.getElementById(name));
    let option=shandianOption();
    mychart.setOption(option);
}
let shandianOption=function () {
    var plantCap = [{
        name: '教学楼',
        value: '86.00'
    }, {
        name: '图书馆',
        value: '53.62'
    }, {
        name: '宿舍',
        value: '54.11'
    }, {
        name: '休闲场所',
        value: '10.63'
    }, {
        name: '其他',
        value: '2.42'
    }];

    var datalist = [{
        offset: [56, 58],
        symbolSize: 55,
        opacity: .95,
        color: 'rgba(0,204,188, 1)'
    },  {
        offset: [70, 13],
        symbolSize: 40,
        opacity: .84,
        color: 'rgba(0,204,188, 0.95)'
    }, {
        offset: [3, 76],
        symbolSize: 38,
        opacity: .8,
        color: 'rgba(0,204,188,0.95)'
    }, {
        offset: [15, 25],
        symbolSize: 52,
        opacity: .75,
        color: 'rgba(0,204,188,1)'
    }, {
        offset: [98, 70],
        symbolSize: 30,
        opacity: .7,
        color: 'rgba(0,204,188, 0.90)'
    }];
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.value + '\n' + item.name,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 10,
                        color:'#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
    option = {
        grid: {
            show: false,
            top: 10,
            bottom: 10
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        series: [{
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#fff',
                    textStyle: {
                        fontSize: '8'
                    }
                },
            },
            itemStyle: {
                normal: {
                    borderWidth: '4',
                    borderType: 'solid',
                    borderColor: '#fff',
                    color: '#68b837',
                    shadowColor: '#009ACD',
                    shadowBlur: 10
                }
            },
            data: datas
        }]
    };
    return option;
}


/***
 * 柱状图-折线图
 * @param name
 */
var average=function(name){
    //设置容器高宽
    // 基于准备好的dom，初始化echarts实例
     myChart = echarts.init(document.getElementById(name));
    //myChart1.showLoading();chart的加载动画
    // Generate data
    let option=averageSetOption();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}
var averageSetOption=function () {
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid:{
            x:25,
            y:38,
            x2:25,
            y2:20,
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['蒸发量','降水量','平均温度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'蒸发量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'降水量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均温度',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

        return option;
}

/**
 *
 * @param name
 */
let lighterBintu=function (name) {
    let myChart = echarts.init(document.getElementById(name));
    let option=lighterBintuOption();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}

let lighterBintuOption=function()
{
   let  option = {
       color:['#8f63de', '#da20a9', '#ff54af','#4e4d4d',
           '#014289','#006faf','#009acd','#00ccbc','#60f3ab','#d3f5ce'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'自习时长',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },

                },
                data:[
                    {value:48.30, name:'0-3小时'},
                    {value:39.13, name:'3-6小时'},
                    {value:9.66, name:'6-9小时'},
                    {value:2.90,name:'大于9小时'}
                ]
            },
            {
                name:'自习时长',
                type:'pie',
                radius: ['40%', '55%'],
                labelLine:{
                    length:3,
                    length2:2,
                },
                startAngle:80,
                data:[
                    {value:85.99, name:'教学楼'},
                    {value:53.62, name:'图书馆'},
                    {value:54.10, name:'宿舍'},
                    {value:10.63, name:'休闲场所'},
                    {value:2.42, name:'其他'}
                ]
            }
        ]
    };
    return option;
}

/*let lighterBintuOption=function () {
    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 8,
            },
            labelLine: {
                //smooth: 0.2,
                length: 10,
                length2: 10
            },
        }
    };

    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 3,
        formatter: [
            '{d| {d}% }',
            '{b| {b} }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 15,
                color: '#fff'
            },
            b: {
                fontSize: 18,
                color: '#fff'
            },
        }
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    let option = {
        color: ['#67cd8f', '#6851f1', '#78eea6', '#8bd46e', '#248ff7'],//#8bd46e', '#67cd8f', 248ff7 6851f1];
        tooltip: {
            show: true,
            formatter: "{b} <br/> {c} ({d}%)"
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                show:false
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 100,
        },
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [15, 25],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data: [{
                value: 260,
                name: '',
                itemStyle: placeHolderStyle
            },
                {
                    value: 100,
                    name: '',
                    label: labelShow,
                },
                {
                    value: 0,
                    name: '',
                    itemStyle: placeHolderStyle
                }
            ]
        },
            {
                name: 'Line 2',
                type: 'pie',
                clockWise: false,
                radius: [25, 40],
                itemStyle: dataStyle,
                hoverAnimation: false,
                data: [{
                    value: 190,
                    name: '  ',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 70,
                        name: '  ',
                        label: labelShow,
                    },
                    {
                        value: 100,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 3',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [40, 55],
                itemStyle: dataStyle,

                data: [{
                    value: 130,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 60,
                        name: '   ',
                        label: labelShow,
                    },
                    {
                        value: 170,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 4',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [55, 60],
                itemStyle: dataStyle,
                data: [{
                    value: 40,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 90,
                        name: '    ',
                        label: labelShow,
                    },
                    {
                        value: 230,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 5',
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [60, 70],
                itemStyle: dataStyle,

                data: [{
                    value: 0,
                    name: '',
                    itemStyle: placeHolderStyle
                },
                    {
                        value: 40,
                        name: '.',
                        label: labelShow,
                    },
                    {
                        value: 320,
                        name: '',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                type: 'bar',
                data: [0],
                coordinateSystem: 'polar',
                name: '06a',
                stack: 'a'
            },

        ]
    };
    return option;
}*/

<!--蓝绿色 柱形图-->
let bar=function(name){
    // 基于准备好的dom，初始化echarts实例
     myChart = echarts.init(document.getElementById(name));
    let option=barOption();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}
/**
 * 全校学生和获奖学生成绩对比
 * @param name
 */
let duibiBar=function(name){
    let myChart = echarts.init(document.getElementById(name));
    let option=duibiBarOption();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}

let duibiBarOption=function(){
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top:'16%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['专业课','选修课','通识课'],
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },

        yAxis: {
            type: 'value',
            max:'95',
            min:'85',
            interval:2,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        series: [
            {
                name: '优绩学子',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8bd46e'
                        }, {
                            offset: 1,
                            color: '#09bcb7'
                        }]),
                        barBorderRadius: 11,
                    }

                },
                data: [99.3,89.2,95.8]
            },]
    };
    return option;
}

let barOption=function () {
    // Generate data
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];

    for (let i = 0; i < 20; i++) {
        let date = new Date(dottedBase += 3600 * 24 * 1000);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        let b = Math.random() * 200;
        let d = Math.random() * 200;
        barData.push(b)
        lineData.push(d + b);
    }
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        grid:{
            x:45,
            y:25,
            x2:25,
            y2:25,
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        }, {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
    };
    return option;
}

let bintu=function (name) {
    myChart = echarts.init(document.getElementById(name));
    //myChart1.showLoading();chart的加载动画
    // Generate data
    let linear_color = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#0986e8'
        }, {
            offset: 1,
            color: '#4cd8f4'
        }]
    };
    let option = {
        title: {
            text: "",
            textStyle: {
                color: '#fff',
                fontSize: 24,
                position:'center',
            },
            left: 'center',
            top:'350'
        },
        series: [{
            type: 'pie',
            radius: ['45%', '45%'],
            silent: true,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#050f58',
                        borderColor: '#162abb',
                        borderWidth: 2,
                        shadowBlur: 50,
                        shadowColor: 'rgba(21,41,185,.75)'
                    }
                }
            }]
        }, {
            type: 'pie',
            radius: ['35%', '35%'],
            silent: true,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#050f58',
                        borderColor: '#162abb',
                        borderWidth: 2,
                        shadowBlur: 50,
                        shadowColor: 'rgba(21,41,185,.75)'
                    }
                }
            }]
        },{
            type: 'pie',
            radius: ['30%', '30%'],
            silent: true,
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#1ebef5',
                        borderColor: '#1ebef5',
                        borderWidth: 2,
                        shadowBlur: 50,
                        borderType:'dashed',
                        barBorderRadius:5,
                    }
                }
            }]
        },{
            type: 'pie',
            radius: ['39%', '41%'],
            silent: false,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: 1,
                itemStyle: {
                    normal: {
                        color: '#050f58',
                        barBorderRadius: 30,
                        // shadowBlur: 50,
                        shadowColor: 'rgba(21,41,185,.75)'
                    }
                }
            }]
        }, {
            name: '占比',
            type: 'pie',
            radius: ['39%', '41%'],
            hoverAnimation: false,
            data: [{
                value: 75,
                show: false,
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '35',
                            fontWeight: 'normal',
                            color: '#3dd4de'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: linear_color,
                        shadowColor: '#3dd4de',
                        shadowBlur: 6,
                        borderWidth: 6,
                        borderColor:linear_color
                    }
                }
            }, {
                value: 25,
                show: false,
                itemStyle: {
                    normal: {
                        barBorderRadius: 300,
                        color: 'rgba(10,9,86,0.2)', // 未完成的圆环的颜色
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                         color: 'rgba(100,59,70,1)' // 未完成的圆环的颜色
                    }
                }
            }]

        }]
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
        }
    };
}

//3D图像显示
/***
 * 三维 x轴 学院
 * z轴 成绩
 * y轴 各个成绩的指标；加权方差 能力方差 综合方差
 */
var myChartMain;//主图的chart
let threeD=function (data,name) {
    // 基于准备好的dom，初始化echarts实例
    myChartMain = echarts.init(document.getElementById(name));
    myChartMain.showLoading();//chart的加载动画
    let option=threeDOption();//threeDOption3D(data);
    window.onresize = myChartMain.resize;
    myChartMain.hideLoading();
    myChartMain.setOption(option);
    console.log(myChartMain)
    return option;
    return '';
}
let threeDOption=function(){
    var mapName = 'china'
    var data = [
        {
            name:"浙江",
                value:0.2591743119
        },
        {
            name:"山东",
            value:0.2230769231
        },
        {
            name:"福建",
            value:0.2171717172
        },
        {
            name:"江苏",
            value:0.2014134276
        },
        {
            name:"四川",
            value:0.1976470588
        },
        {
            name:"上海",
            value:0.1842105263
        },
        {
            name:"辽宁",
            value:0.180952381
        },
        {
            name:"河南",
            value:0.1774975752
        },
        {
            name:"河北",
            value:0.1711899791
        },
        {
            name:"湖南",
            value:0.1634146341
        },
        {
            name:"安徽",
            value:0.16
        },
        {
            name:"江西",
            value:0.154589372
        },
        {
            name:"广东",
            value:0.151556157
        },
        {
            name:"山西",
            value:0.1428571429
        },
        {
            name:"湖北",
            value:0.1398963731
        },
        {
            name:"陕西",
            value:0.1191135734
        },
        {
            name:"重庆",
            value:0.10546875
        },
        {
            name:"广西",
            value:0.104719764
        },
        {
            name:"甘肃",
            value:0.1
        },
        {
            name:"云南",
            value:0.0981912145
        },
        {
            name:"内蒙古",
            value:0.095505618
        },
        {
            name:"北京",
            value:0.09375
        },
        {
            name:"贵州",
            value:0.0899280576
        },
        {
            name:"黑龙江",
            value:0.0891089109
        },
        {
            name:"天津",
            value:0.0849056604
        },
        {
            name:"吉林",
            value:0.08
        },
        {
            name:"宁夏",
            value:0.075
        },
        {
            name:"海南",
            value:0.0671936759
        },
        {
            name:"新疆",
            value:0.0350877193
        },
        {
            name:"青海",
            value:0.0185185185
        },{
            name:'西藏',
            value:0,
        },{
            name:'台湾',
            value:0,
        },{
            name:'香港',
            value:0,
        },{
            name:'澳门',
            value:0
        }
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

    var max = 0.3,
        min = 0; // todo
    var maxSize4Pin = 0.3,
        minSize4Pin = 0;

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
            max: 0.3,
            left: '10%',
            top: 'bottom',
            bottom:-20,
            calculable: true,
            seriesIndex: [1],
            inRange: {
                color: ['#60f3ab', '#00ccbc','#009ac0','#006faf','#014289'] // 蓝绿
            },
            itemWidth:10,
            itemHeight:60,
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
            }
        },
        series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] *10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow'
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
                data: convertData(data),
                symbolSize: function(val) {
                    return val[1]/5;
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
                        show: false
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
let threeDOptionditu=function(){
    var data = [
        {
        name:"浙江",
        value:0.2591743119
    },
        {
            name:"山东",
            value:0.2230769231
        },
        {
            name:"福建",
            value:0.2171717172
        },
        {
            name:"江苏",
            value:0.2014134276
        },
        {
            name:"四川",
            value:0.1976470588
        },
        {
            name:"上海",
            value:0.1842105263
        },
        {
            name:"辽宁",
            value:0.180952381
        },
        {
            name:"河南",
            value:0.1774975752
        },
        {
            name:"河北",
            value:0.1711899791
        },
        {
            name:"湖南",
            value:0.1634146341
        },
        {
            name:"安徽",
            value:0.16
        },
        {
            name:"江西",
            value:0.154589372
        },
        {
            name:"广东",
            value:0.151556157
        },
        {
            name:"山西",
            value:0.1428571429
        },
        {
            name:"湖北",
            value:0.1398963731
        },
        {
            name:"陕西",
            value:0.1191135734
        },
        {
            name:"重庆",
            value:0.10546875
        },
        {
            name:"广西",
            value:0.104719764
        },
        {
            name:"甘肃",
            value:0.1
        },
        {
            name:"云南",
            value:0.0981912145
        },
        {
            name:"内蒙古",
            value:0.095505618
        },
        {
            name:"北京",
            value:0.09375
        },
        {
            name:"贵州",
            value:0.0899280576
        },
        {
            name:"黑龙江",
            value:0.0891089109
        },
        {
            name:"天津",
            value:0.0849056604
        },
        {
            name:"吉林",
            value:0.08
        },
        {
            name:"宁夏",
            value:0.075
        },
        {
            name:"海南",
            value:0.0671936759
        },
        {
            name:"新疆",
            value:0.0350877193
        },
        {
            name:"青海",
            value:0.0185185185
        },{
            name:'西藏',
            value:0,
        },{
            name:'台湾',
            value:0,
        },{
            name:'香港',
            value:0,
        },{
            name:'澳门',
            value:0
        }
    ];
    var mapName = 'china';
    var geoCoordMap = {};
    /*获取地图数据*/
    myChartMain.showLoading();
    var mapFeatures = echarts.getMap(mapName).geoJson.features;
    myChartMain.hideLoading();
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
    });

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

    var yData = [];
    var barData = [];
//设置柱形图的数据 前10
    for (var i = 0; i < 10; i++) {
        barData.push(data[i]);
        yData.push(i + data[i].name);
    }

    var convertData = function(data1) {
        return this.data;
    };
    let option = {
        title: [{
            show: true,
            text: '排名情况',
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            left: 25,
            top: 120
        }],
        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name + '：' + params.data['value']
            },
        },
        visualMap: {
            //左下角条状图
            type: 'continuous',
            orient: 'horizontal',
            itemWidth: 10,
            itemHeight: 80,
            text: ['高', '低'],
            showLabel: true,
            seriesIndex: [0],
            min: 0,
            max: 0.3,
            inRange: {
                //地图的颜色
                color:['#60f3ab', '#00ccbc','#009ac0','#006faf','#014289'],
                //color:['#014289','#006faf','#009ac0', '#00ccbc',' #60f3ab']
                //color: ['#6FCF6A', '#FFFD64', '#FF5000']
            },
            textStyle: {
                color: '#7B93A7'
            },
            bottom: 30,
            left: 'center',
            right:20,
        },
        grid: {
            //渐变轴
            left: 80,//排序主体距离左边
            top: 150,
            bottom: 10,//距离下面的距离
            width: '10%'
        },
        xAxis: {
            show: false
        },
        //y轴列表的颜色
        yAxis: {
            type: 'category',
            inverse: true,
            nameGap: 16,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                interval: 0,
                margin: 50,//字体与柱状之间的间隔
                textStyle: {
                    color: '#fff',
                    align: 'left',
                    fontSize: 10//排序字体大小
                },
                rich: {
                    a: {
                        color: '#fff',
                        backgroundColor: '#ff1760 ',//1-3 排名编号的颜色
                        width: 14,
                        height: 14,//排序方框大小
                        align: 'center',
                        borderRadius: 2
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: '#89106f',//4-10 排名编号的颜色
                        width: 14,
                        height: 14,
                        align: 'center',
                        borderRadius: 2
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
            data: yData
        },
        geo: {
            // 地图
            map: mapName,
            left: 'center',//地图位置
            aspectScale:0.7,//地图的比例
            layoutCenter: ['60%', '50%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 350,
            label: {
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal:{
                    borderColor:'#D3F5CE',//地图边框颜色
                    opacity:0.9,
                },
                emphasis: {
                    areaColor: '#fff464'//地图鼠标触及的颜色
                }
            }
        },
        series: [{
            name: mapName,
            type: 'map',
            roam: false,
            geoIndex: 0,
            label: {
                show: true,
            },
            data: data
        }, {
            //右侧列表 颜色
            name: 'barSer',
            type: 'bar',
            roam: false,
            visualMap: false,
            zlevel: 2,
            barMaxWidth: 8,//渐变最宽的宽带
            barGap: 0,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                            //柱形图 条状的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#8bd46e' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#09bcb7' // 100% 处的颜色
                            }]
                        },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#248ff7' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#6851f1' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                    barBorderRadius: 15
                }
            },
            data: barData
        },
            {
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[1] *10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                }
            },
            {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 6,
            },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data:  convertData(data),
                symbolSize: 10,
                symbol:'circle',
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
                zlevel: 10
            },]
    };
    return option;
}
let threeDOption3D=function(data){
    var geoCoordMap = {
        '新疆玛纳斯基地': [86.22, 44.30],
        '九江': [116.00, 29.70],
        '新乡': [116.402217, 35.311657],
        ' ':[79.92,37.12],
        '  ':[86.85,47.70],
        '若羌县':[88.17,39.02],
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{
            name: '新乡'
        }, {
            name: '新乡',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '哈尔滨',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '石家庄',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '昆明',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '新乡'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '贵阳',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '南宁',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '济南',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '太原',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '新乡'
        }, {
            name: '武汉',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '合肥',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '南京',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '沈阳',
            value: 20
        }],
        [{
            name: '新乡'
        }, {
            name: '成都',
            value: 10
        }]
    ];

    var SHData = [
        [{
            name: '九江'
        }, {
            name: '九江',
            value:90
        }],

        [{
            name: '九江'
        }, {
            name: '长沙',
            value: 95
        }],
        [{
            name: '九江'
        }, {
            name: '武汉',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '南昌',
            value: 20
        }],
        [{
            name: '九江'
        }, {
            name: '合肥',
            value: 70
        }],
        [{
            name: '九江'
        }, {
            name: '南京',
            value: 60
        }],
        [{
            name: '九江'
        }, {
            name: '福州',
            value: 50
        }],
        [{
            name: '九江'
        }, {
            name: '上海',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '深圳',
            value: 100
        }],

    ];

    var GZData = [
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '新疆玛纳斯基地',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '  ',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: ' ',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '昆明',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '兰州',
            value: 95
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '银川',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '西宁',
            value: 80
        }],

    ];

    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#8bd46e', '#67cd8f', '#09bcb7'];
    var series = [];
    [
        ['新乡', BJData],
        ['九江', SHData],
        ['新疆', GZData]
    ].forEach(function(item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    let option = {
        tooltip: {
            trigger: 'item'
        },
        viewControl:{
            distance:400,
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            layoutCenter: ['50%', '50%'],
            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            layoutSize: 480,//设置地图的默认大小
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(42,162,171,0.8)',
                    opacity:0.3,
                    borderColor: '#06e7ff'
                },
                emphasis: {
                    areaColor: '#0490f0'
                }
            }
        },
        series: series
    };
    return option;
}
/*let threeDOption3D=function(data){
    let geoCoordMap = {
        "海门": [121.15, 31.89],
        "鄂尔多斯": [109.781327, 39.608266],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
        "泉州": [118.58, 24.93],
        "莱西": [120.53, 36.86],
        "日照": [119.46, 35.42],
        "胶南": [119.97, 35.88],
        "南通": [121.05, 32.08],
        "拉萨": [91.11, 29.97],
        "云浮": [112.02, 22.93],
        "梅州": [116.1, 24.55],
        "文登": [122.05, 37.2],
        "上海": [121.48, 31.22],
        "攀枝花": [101.718637, 26.582347],
        "威海": [122.1, 37.5],
        "承德": [117.93, 40.97],
        "厦门": [118.1, 24.46],
        "汕尾": [115.375279, 22.786211],
        "潮州": [116.63, 23.68],
        "丹东": [124.37, 40.13],
        "太仓": [121.1, 31.45],
        "曲靖": [103.79, 25.51],
        "烟台": [121.39, 37.52],
        "福州": [119.3, 26.08],
        "瓦房店": [121.979603, 39.627114],
        "即墨": [120.45, 36.38],
        "抚顺": [123.97, 41.97],
        "玉溪": [102.52, 24.35],
        "张家口": [114.87, 40.82],
        "阳泉": [113.57, 37.85],
        "莱州": [119.942327, 37.177017],
        "湖州": [120.1, 30.86],
        "汕头": [116.69, 23.39],
        "昆山": [120.95, 31.39],
        "宁波": [121.56, 29.86],
        "湛江": [110.359377, 21.270708],
        "揭阳": [116.35, 23.55],
        "荣成": [122.41, 37.16],
        "连云港": [119.16, 34.59],
        "葫芦岛": [120.836932, 40.711052],
        "常熟": [120.74, 31.64],
        "东莞": [113.75, 23.04],
        "河源": [114.68, 23.73],
        "淮安": [119.15, 33.5],
        "泰州": [119.9, 32.49],
        "南宁": [108.33, 22.84],
        "营口": [122.18, 40.65],
        "惠州": [114.4, 23.09],
        "江阴": [120.26, 31.91],
        "蓬莱": [120.75, 37.8],
        "韶关": [113.62, 24.84],
        "嘉峪关": [98.289152, 39.77313],
        "广州": [113.23, 23.16],
        "延安": [109.47, 36.6],
        "太原": [112.53, 37.87],
        "清远": [113.01, 23.7],
        "中山": [113.38, 22.52],
        "昆明": [102.73, 25.04],
        "寿光": [118.73, 36.86],
        "盘锦": [122.070714, 41.119997],
        "长治": [113.08, 36.18],
        "深圳": [114.07, 22.62],
        "珠海": [113.52, 22.3],
        "宿迁": [118.3, 33.96],
        "咸阳": [108.72, 34.36],
        "铜川": [109.11, 35.09],
        "平度": [119.97, 36.77],
        "佛山": [113.11, 23.05],
        "海口": [110.35, 20.02],
        "江门": [113.06, 22.61],
        "章丘": [117.53, 36.72],
        "肇庆": [112.44, 23.05],
        "大连": [121.62, 38.92],
        "临汾": [111.5, 36.08],
        "吴江": [120.63, 31.16],
        "石嘴山": [106.39, 39.04],
        "沈阳": [123.38, 41.8],
        "苏州": [120.62, 31.32],
        "茂名": [110.88, 21.68],
        "嘉兴": [120.76, 30.77],
        "长春": [125.35, 43.88],
        "胶州": [120.03336, 36.264622],
        "银川": [106.27, 38.47],
        "张家港": [120.555821, 31.875428],
        "三门峡": [111.19, 34.76],
        "锦州": [121.15, 41.13],
        "南昌": [115.89, 28.68],
        "柳州": [109.4, 24.33],
        "三亚": [109.511909, 18.252847],
        "自贡": [104.778442, 29.33903],
        "吉林": [126.57, 43.87],
        "阳江": [111.95, 21.85],
        "泸州": [105.39, 28.91],
        "西宁": [101.74, 36.56],
        "宜宾": [104.56, 29.77],
        "呼和浩特": [111.65, 40.82],
        "成都": [104.06, 30.67],
        "大同": [113.3, 40.12],
        "镇江": [119.44, 32.2],
        "桂林": [110.28, 25.29],
        "张家界": [110.479191, 29.117096],
        "宜兴": [119.82, 31.36],
        "北海": [109.12, 21.49],
        "西安": [108.95, 34.27],
        "金坛": [119.56, 31.74],
        "东营": [118.49, 37.46],
        "牡丹江": [129.58, 44.6],
        "遵义": [106.9, 27.7],
        "绍兴": [120.58, 30.01],
        "扬州": [119.42, 32.39],
        "常州": [119.95, 31.79],
        "潍坊": [119.1, 36.62],
        "重庆": [106.54, 29.59],
        "台州": [121.420757, 28.656386],
        "南京": [118.78, 32.04],
        "滨州": [118.03, 37.36],
        "贵阳": [106.71, 26.57],
        "无锡": [120.29, 31.59],
        "本溪": [123.73, 41.3],
        "克拉玛依": [84.77, 45.59],
        "渭南": [109.5, 34.52],
        "马鞍山": [118.48, 31.56],
        "宝鸡": [107.15, 34.38],
        "焦作": [113.21, 35.24],
        "句容": [119.16, 31.95],
        "北京": [116.46, 39.92],
        "徐州": [117.2, 34.26],
        "衡水": [115.72, 37.72],
        "包头": [110, 40.58],
        "绵阳": [104.73, 31.48],
        "乌鲁木齐": [87.68, 43.77],
        "枣庄": [117.57, 34.86],
        "杭州": [120.19, 30.26],
        "淄博": [118.05, 36.78],
        "鞍山": [122.85, 41.12],
        "溧阳": [119.48, 31.43],
        "库尔勒": [86.06, 41.68],
        "安阳": [114.35, 36.1],
        "开封": [114.35, 34.79],
        "济南": [117, 36.65],
        "德阳": [104.37, 31.13],
        "温州": [120.65, 28.01],
        "九江": [115.97, 29.71],
        "邯郸": [114.47, 36.6],
        "临安": [119.72, 30.23],
        "兰州": [103.73, 36.03],
        "沧州": [116.83, 38.33],
        "临沂": [118.35, 35.05],
        "南充": [106.110698, 30.837793],
        "天津": [117.2, 39.13],
        "富阳": [119.95, 30.07],
        "泰安": [117.13, 36.18],
        "诸暨": [120.23, 29.71],
        "郑州": [113.65, 34.76],
        "哈尔滨": [126.63, 45.75],
        "聊城": [115.97, 36.45],
        "芜湖": [118.38, 31.33],
        "唐山": [118.02, 39.63],
        "平顶山": [113.29, 33.75],
        "邢台": [114.48, 37.05],
        "德州": [116.29, 37.45],
        "济宁": [116.59, 35.38],
        "荆州": [112.239741, 30.335165],
        "宜昌": [111.3, 30.7],
        "义乌": [120.06, 29.32],
        "丽水": [119.92, 28.45],
        "洛阳": [112.44, 34.7],
        "秦皇岛": [119.57, 39.95],
        "株洲": [113.16, 27.83],
        "石家庄": [114.48, 38.03],
        "莱芜": [117.67, 36.19],
        "常德": [111.69, 29.05],
        "保定": [115.48, 38.85],
        "湘潭": [112.91, 27.87],
        "金华": [119.64, 29.12],
        "岳阳": [113.09, 29.37],
        "长沙": [113, 28.21],
        "衢州": [118.88, 28.97],
        "廊坊": [116.7, 39.53],
        "菏泽": [115.480656, 35.23375],
        "合肥": [117.27, 31.86],
        "武汉": [114.31, 30.52],
        "大庆": [125.03, 46.58]
    };
    //设置线的起始点
    var alirl=  [[[121.15, 31.89],[114.30,30.6 ]],
        [[120.38, 37.35],[114.30,30.6 ]],
        [[123.97, 47.33],[114.30,30.6 ]],
        [[118.87, 42.28],[114.30,30.6 ]],
        [[121.52, 36.89],  [114.30,30.6 ]],
        [[102.188043, 38.520089], [114.30,30.6 ]],
        [[118.58, 24.93],[114.30,30.6 ]],
        [[120.53, 36.86],[114.30,30.6 ]],
        [[119.46, 35.42],[114.30,30.6 ]],
        [[119.97, 35.88],[114.30,30.6 ]],
        [[121.05, 32.08],[114.30,30.6 ]],
        [[91.11, 29.97],[114.30,30.6 ]]
    ]
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        // console.log(res)
        return res;
    };
    let option = {
        tooltip: {
            show: true,
        },
        visualMap: [{
            type: 'continuous',
            seriesIndex: 0,
            show: false,
            text: ['bar3D'],
            calculable: true,
            max: 300,
            inRange: {
                opacity: 1,
                color: ['rgba(238,62,136,0.7)', 'rgb(238,62,136)']
            }
        }, {
            type: 'continuous',
            seriesIndex: 1,
            text: ['scatter3D'],
            show: false,
            left: 'right',
            max: 100,
            calculable: true,
            inRange: {
                color: ['rgba(235,236,6,1)']//气泡配色
            }
        }],
        geo3D: {
            map: 'china',
            roam: true,
            regionHeight: 1,
            itemStyle: {
                //areaColor: '#072289',// 地图配色
                color:'rgba(10, 133, 171, 0.4)',// 地图配色
                //areaColor: 'rgba(4,144,240,0.94)',
                opacity: 1,
                borderWidth: 0.4,
                borderColor: '#00FFF8'// 地图边配色
            },
            shading: 'color',
            light: { //光照阴影
                main: {
                    color: '#fff', //光照颜色
                    intensity: 1.2, //光照强度
                    shadowQuality: 'high', //阴影亮度
                    shadow: true, //是否显示阴影
                    alpha:55,
                    beta:10
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [
            //柱状图
            {
                name: 'bar3D',
                type: "bar3D",
                coordinateSystem: 'geo3D',
                barSize: 0.5, //柱子粗细
                shading: 'lambert',
                opacity: 1,
                bevelSize:0.2,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                data: convertData([{
                    name: "海门",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "鄂尔多斯",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "招远",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "舟山",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "齐齐哈尔",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "盐城",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "赤峰",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "青岛",
                    value: (Math.random() * 300).toFixed(2)
                },  {
                    name: "南通",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "拉萨",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "云浮",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "梅州",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "文登",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "上海",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "攀枝花",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "威海",
                    value: (Math.random() * 200).toFixed(2)
                },  {
                    name: "福州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "瓦房店",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "即墨",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "抚顺",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "玉溪",
                    value: (Math.random() * 200).toFixed(2)
                },{
                    name: "常熟",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "东莞",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "河源",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "淮安",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "泰州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "南宁",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "营口",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "惠州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "江阴",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "蓬莱",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "韶关",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "嘉峪关",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "广州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "延安",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "太原",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "清远",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "中山",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "昆明",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "寿光",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "盘锦",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "长治",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "深圳",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "珠海",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "宿迁",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "咸阳",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "铜川",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "平度",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "佛山",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "海口",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "江门",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "章丘",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "肇庆",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "大连",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "临汾",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "吴江",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "石嘴山",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "沈阳",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "苏州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "茂名",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "嘉兴",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "长春",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "胶州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "银川",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "张家港",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "三门峡",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "锦州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "南昌",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "柳州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "三亚",
                    value: (Math.random() * 300).toFixed(2)
                }, {
                    name: "自贡",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "吉林",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "阳江",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "泸州",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "西宁",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "宜宾",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "呼和浩特",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "成都",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "大同",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "镇江",
                    value: (Math.random() * 100).toFixed(2)
                }, {
                    name: "桂林",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "张家界",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "宜兴",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "北海",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "西安",
                    value: (Math.random() * 200).toFixed(2)
                }, {
                    name: "金坛",
                    value: (Math.random() * 200).toFixed(2)
                },
                    {
                        name: "包头",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "绵阳",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "乌鲁木齐",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "枣庄",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "杭州",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "淄博",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "鞍山",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "溧阳",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "库尔勒",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "安阳",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "开封",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "济南",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "德阳",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "温州",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "九江",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "邯郸",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "临安",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "兰州",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "沧州",
                        value: (Math.random() * 200).toFixed(2)
                    },

                    {
                        name: "秦皇岛",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "株洲",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "石家庄",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "莱芜",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "常德",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "保定",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "湘潭",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "金华",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "岳阳",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "长沙",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "衢州",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "廊坊",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "菏泽",
                        value: (Math.random() * 100).toFixed(2)
                    }, {
                        name: "合肥",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "武汉",
                        value: (Math.random() * 200).toFixed(2)
                    }, {
                        name: "大庆",
                        value: (Math.random() * 200).toFixed(2)
                    }
                ]),
            },

            {
                name: 'scatter3D',
                type: "scatter3D",
                coordinateSystem: 'geo3D',
                symbol: 'circle',
                symbolSize: 14,
                opacity: 1,
                label: {
                    show: false,
                    formatter: '{b}'
                },
                itemStyle: {
                    // borderWidth: 0.5,
                    // borderColor: '#fff'//气泡边的颜色
                },
                data: convertData([{
                    name: "阳泉",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "莱州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "湖州",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "汕头",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "昆山",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }, {
                    name: "张家口",
                    value: ((Math.random() * 100) + 50).toFixed(2)
                }])
            },
            //画线
            {
                type: 'lines3D',
                coordinateSystem: 'geo3D',
                animation:true,
                effect: {
                    show: true,
                    trailWidth: 5,
                    trailOpacity: 1,
                    trailLength: 0.2,
                    constantSpeed: 5
                },
                blendMode: 'lighter',
                lineStyle:
                    { //航线的视图效果
                        color: '#fbfe00',
                        width: 1,
                        opacity: 2
                    },
                data:alirl
            }
        ]
    };
    return option;
}*/
/**
 * 三维柱状图
 * */
 threeDGradeOption=function (data) {
/**X: 加权成绩 能力成绩 综合成绩
 * Y：学院名称
 * Z：成绩
 * **/
    /**X轴*/
    let gradeName = ['加权成绩','能力成绩','综合成绩'];
    /**Y轴**/
    let yzhou=[],i=0;
    for (let temp in data){//学院名称
        yzhou.push(temp);
        i++;
        if (i==8) break;
    }
    /**成绩**/
    let grade=[];
    let oneGrade=[],senGrade=[],threeGrade=[];
    //var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
    /**构造data结构展示数据**/
    for (let y=0;y<yzhou.length;y++){//学院个数 能力评价总分
        oneGrade[1]=y;//y轴
        oneGrade[0]=0;//x轴
        oneGrade[2]=data[yzhou[y]]['加权平均成绩'][1]-80;//平均分
        grade.push(oneGrade)
        senGrade[1]=y;//y轴
        senGrade[0]=1;//x轴
        senGrade[2]=data[yzhou[y]]['综合评价总分'][1]-50;//最高分
        grade.push(senGrade)
        /*threeGrade[0]=y;//x轴
        threeGrade[1]=2;//y轴
        threeGrade[2]=data[yzhou[y]][''][1];//平均分
        grade.push(threeGrade)*/
        oneGrade=[],senGrade=[],threeGrade=[];
    }

    let option = {
        legend:{
            rotation: -90
        },
        visualMap: {
            max: 20,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9',
                    '#e0f3f8', '#ffffbf', '#fee090', '#fdae61',
                    '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            data: yzhou,
            axisLine:{
                lineStyle:{
                    color:'#abd9e9'
                }
            }
        },
        yAxis3D: {
            type: 'category',
            data: gradeName ,
            axisLine:{
                lineStyle:{
                    color:'#abd9e9'
                }
            }
        },
        zAxis3D: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'#abd9e9'
                }
            },
            show:false
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
                projection: 'orthographic',
                autoRotate:true,
                autoRotateDirection:'cw',
                autoRotateSpeed:20,
                distance:1000,
            },
            light: {
                main: {
                    intensity: 1.2,
                    shadow: false
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: grade.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]],
                }
            }),
            shading: 'lambert',

            label: {
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#f0f01c'
                    }
                },
                itemStyle: {
                    color: '#f0f01c'
                }
            }
        }]
    }
    return option;
}
/**
 * 地图下方的柱状图
 * @param name
 */
let threeDbar=function(name){
     var myChart=echarts.init(document.getElementById(name));
     var option=threeDbarOption();
     myChart.setOption(option);
}
let threeDbarOption=function(){
    var myColor = ['#81E7ED'];
    var dataLine = [40, 56, 23];
    var positionLeft = 10,
        max = 100 + positionLeft;

    var g_cellBar0_y = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAoCAYAAAAhf6DEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA6SURBVEhLY2x8/vY/A4mg3zwcTDOBSTLBqGYSwahmEsGoZhLBqGYSwahmEsGoZhLBqGYSwZDUzMAAAJldBMF2UASmAAAAAElFTkSuQmCC';
    var g_cellBarImg0_y = new Image();
    g_cellBarImg0_y.src = g_cellBar0_y;

    var option = {
        grid: [{
            left: '8%',
            top: '12%',
            right: '5%',
            bottom: '8%',
            containLabel: true
        },
            {
                left: '10%',
                top: '12%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            }
        ],
        xAxis: [{
            //   max:max,
            show: false
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                inside: true,
                align: 'left',
                textStyle: {
                    color: '#81E7ED',
                    fontSize: '8'
                }
            },
            z: 10,
            data: ['CCA', 'CHH', 'ABC']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                inside: true,
                align: 'right',
                textStyle: {
                    color: '#ffffff',
                    fontSize: '8'
                }
            },
            z: 10,
            data: [40, 56, 23]
        }, {

            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: []
        }],
        series: [

            { //间距
                type: 'bar',
                barWidth: 10,//进度条宽度
                stack: 'b',
                legendHoverLink: false,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                z: 3,
                data: [positionLeft, positionLeft, positionLeft]
            }, {
                name: '条',
                type: 'bar',
                stack: 'b',
                yAxisIndex: 0,
                data: dataLine,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        distance: 2,
                        formatter: function(param) {
                            return param.value + '%'
                        },
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '4'
                        }
                    }
                },
                barWidth: 30,
                itemStyle: {
                    color: {
                        image: g_cellBarImg0_y,
                        repeat: 'repeat'
                    }
                    /*normal: {
                        color: function(params) {
                            var num = myColor.length
                            return myColor[params.dataIndex % num]
                        }
                    }*/
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.8, 99.9, 99.9],
                barWidth: 57,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 2
                    }
                },
                z: 1
            },
            {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100],
                barWidth: 15,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        distance: 10,
                        formatter: function(data) {
                            return dataLine[data.dataIndex] + "%";
                        },
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '8'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: [0, 7, 0, 7]
                    }
                },
                z: 0
            },
        ]
    }
    return option;
}
/**
 * 堆叠图
 * 小图之间的轮流变换
 */
let duidie=function (name) {
    myChart=echarts.init(document.getElementById(name));
    let option=duidieOption();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}
let duidie2=function () {
    let myChart=echarts.init(document.getElementById('div5'));
    let option=duidieOption2();
    window.onresize = myChart.resize;
    myChart.setOption(option);
}
let duidieOption=function () {

    let option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        grid: {
            x: '5px',
            x2: '2px',
            y2: '5px'
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    return option;
}
let duidieOption2=function () {
    let option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    return option;
}
/***
 * 两个div中的内容相互交换
 */
let changeDuidie=function () {
    let div5=document.getElementById('div5');
    let div6=document.getElementById("div6");
    let singal=true;
    if (singal){
        div5.css("display","hide");
        div6.css("display","block");
    }
    else {
        div6.css("display","hide");
        div5.css("display","block");
    }
    singal=!singal;
}

let nannv=function (name) {
     myChart=echarts.init(document.getElementById(name));
    let option=nannvOption();
    myChart.setOption(option);
}
let nannvOption=function () {
    let option = {
        title : {
            text: '学霸脱单率',
            x: 'center',
            textStyle:{
                color:'#fff'
            },
            top:20
        },
        "series": [
            {
                "center": [
                    "30%",
                    "50%"
                ],
                "radius": [
                    "49%",
                    "50%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 15,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "#0b3cff",
                        "borderColor": "#0b3cff",
                        "borderWidth": 25
                    },
                    "emphasis": {
                        "label": {
                            "textStyle": {
                                "fontSize": 15,
                                "fontWeight": "bold"
                            }
                        },
                        "color": "#0490f0",
                        "borderColor": "#0490f0",
                        "borderWidth": 25
                    }
                },
                "data": [
                    {
                        "value": 52.7,
                        "name": "男 52.7%"
                    },
                    {
                        "name": " ",
                        "value": 47.3,
                        "itemStyle": {
                            "normal": {
                                "label": {
                                    "show": false
                                },
                                "labelLine": {
                                    "show": false
                                },
                                "color": "#0b3cff",
                                "borderColor": "#0b3cff",
                                "borderWidth": 0
                            },
                            "emphasis": {
                                "color": "#0490f0",
                                "borderColor": "#0490f0",
                                "borderWidth": 0
                            }
                        }
                    }
                ]
            },
            {
                "center": [
                    "75.0%",
                    "50%"
                ],
                "radius": [
                    "49%",
                    "50%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 15,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "#f0f01c",
                        "borderColor": "#f0f01c",
                        "borderWidth": 25
                    },
                    "emphasis": {
                        "label": {
                            "textStyle": {
                                "fontSize": 15,
                                "fontWeight": "bold"
                            }
                        },
                        "color": "#f0eda2",
                        "borderColor": "#f0eda2",
                        "borderWidth": 25
                    }
                },
                "data": [
                    {
                        "value": 47.3,
                        "name": "女  47.3%"
                    },
                    {
                        "name": " ",
                        "value": 52.7,
                        "itemStyle": {
                            "normal": {
                                "label": {
                                    "show": false
                                },
                                "labelLine": {
                                    "show": false
                                },
                                "color": "#f0f01c",
                                "borderColor": "#f0ed31",
                                "borderWidth": 0
                            },
                            "emphasis": {
                                "color": "#f0eda2",
                                "borderColor": "#f0eda2",
                                "borderWidth": 0
                            }
                        }
                    }
                ]
            }
        ]
    };
    return option;
}

let leida=function (name) {
    let leidaCharts=echarts.init(document.getElementById(name));
    let option=leidaOption();
    leidaCharts.setOption(option);
}
let leidaOption=function () {
    let option = {
        title: {
            text: '能力',
            top:10,
            left:'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#87CEFA',//EE3E88 6495ED
                    fontSize: 14,
                    fontWeight:'bolder',
                    borderRadius: 10,
                    padding: -10
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(	65,105,225, 0.1)', 'rgba(	65,105,225, 0.2)',
                        'rgba(	65,105,225, 0.4)', 'rgba(	65,105,225, 0.6)',
                        'rgba(	65,105,225, 0.8)', 'rgba(	65,105,225, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: ['rgba(	0,191,255,0.5)', 'rgb(	0,191,255)'],

                }
            },
            indicator: [
                { name: '科 研', max: 6500},
                { name: '文 体', max: 16000},
                { name: '信息技术', max: 30000},
                { name: '客服', max: 38000},
                { name: '研发', max: 52000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）',
                    itemStyle: {
                        normal: {
                            color: 'rgb(15,213,206,0.6)'},
                    },
                }
            ]
        }]
    };
    return option;
}

let funShow=function (name) {
    var myChart=echarts.init(document.getElementById(name));
    let option = {
        title: {
            text: '内存占用率',
            x: '50%',
            y: '45%',
            textAlign: "center",
            textStyle: {
                fontWeight: 'normal',
                fontSize: 24
            },
            subtextStyle: {
                fontWeight: 'bold',
                fontSize: 32,
                color: '#3ea1ff'
            }
        },
        series: [{
            name: ' ',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
            }]), "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    borderColor: "transparent",
                    borderWidth: "20"
                },
                emphasis: {
                    borderColor: "transparent",
                    borderWidth: "20"
                }
            },
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }, {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: ["#c2f5e1", "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }

        ]
    };
    timeTicket = setInterval(function() {
        var value = parseInt(Math.random() * 100);
        setPercent(value);
    }, 1000);

    function setPercent(p) {
        var value = parseInt(Math.random() * 100) + 1,
            value_ = 75 * value / 100;
        option.title.subtext = value + "%";
        option.series[0].data[0].value = value_;
        option.series[0].data[1].value = 100 - value_;
        myChart.setOption(option, true);
    }

    myChart.setOption(option);
}

let manyBin=function (name) {
    let mychart=echarts.init(document.getElementById(name));
    let option=manyBinOption();
    mychart.setOption(option);
}
let manyBinOption=function () {
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 0,
            shadowColor: '#203665'
        }
    };
    option = {
        series: [{
            name: '第一个圆环',
            type: 'pie',
            clockWise: false,
            radius: [30, 40],//圆环的半径
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['20%', '50%'],
            data: [{
                value: 56.5,
                label: {
                    normal: {
                        rich: {
                            a: {
                                // #009aco #00ccbc #60f3ab
                                color: '#009acd',
                                align: 'center',
                                fontSize: 10,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 8
                            }
                        },
                        formatter: function(params){
                            return "{b|起床时间}\n\n"+"{a|7:00-8:00}"+"\n\n{b|56.5%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '8',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00ccbc',
                        shadowColor: '#2c6cc4',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 43.5,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#24375c'
                    },
                    emphasis: {
                        color: '#24375c'
                    }
                }
            }]
        }, {
            name: '第二个圆环',
            type: 'pie',
            clockWise: false,
            radius: [40, 50],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '45%'],
            data: [{
                value: 48.31,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#d3f5ce',//字体颜色
                                align: 'center',
                                fontSize: 13,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 10
                            }
                        },
                        formatter: function(params){
                            return "{b|自习时间}\n\n"+"{a|0-3h}"+"\n\n{b|48.31%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#60f3ab',//圆环强调的颜色
                        shadowColor: '#ef45ac',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 51.69,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#412a4e'
                    },
                    emphasis: {
                        color: '#412a4e'
                    }
                }
            }]
        }, {
            name: '第三个圆环',
            type: 'pie',
            clockWise: false,
            radius: [30, 40],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['80%', '50%'],
            data: [{
                value: 51,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#009acd',//字体颜色
                                align: 'center',
                                fontSize: 10,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 8
                            }
                        },
                        formatter: function(params){
                            return "{b|中午}\n\n"+"{a|有午休习惯}"+"\n\n{b|51%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '8',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00ccbc',
                        shadowColor: '#613fd1',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 49,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#453284'
                    },
                    emphasis: {
                        color: '#453284'
                    }
                }
            }]
        }]
    }
    return option;
}

let nianji=function () {

}
let nianjiOption=function () {
    placeHolderStyle = {
        normal: {
            label: {
                show: false,
                position: "center"
            },
            labelLine: {
                show: false
            },
            color: "#dedede",
            borderColor: "#dedede",
            borderWidth: 0
        },
        emphasis: {
            color: "#dedede",
            borderColor: "#dedede",
            borderWidth: 0
        }
    };
    option = {
        color: ['#30ce88','#7de393', '#d3f5ce'],
        legend: [{
            orient: '',
            icon: 'circle',
            left: 'right',
            top: 'center',
            data: ['16级', '17级', '18级']
        }],
        series: [{
            name: '值',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [199, 200],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside'
                    },
                    labelLine: {
                        show: true,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#30ce88",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 7,
                name: '70%'
            }, {
                value: 3,
                name: '',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: '白',
            type: 'pie',
            clockWise: false,
            radius: [180, 180],
            hoverAnimation: false,
            data: [{
                value: 1
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [159, 160],
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#7de393",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 6,
                name: '60%'
            }, {
                value: 4,
                name: '',
                itemStyle: placeHolderStyle
            }]
        }, {
            name: '白',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [140, 140],
            data: [{
                value: 1
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [119, 120],
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#d3f5ce",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 4,
                name: '40%'
            }, {
                value: 6,
                name: '',
                itemStyle: placeHolderStyle
            }]
        }, {
            type: 'pie',
            color: ['#30ce88','#7de393', '#d3f5ce'],
            data: [{
                value: '',
                name: '16级'
            }, {
                value: '',
                name: '17级'
            }, {
                value: '',
                name: '18级'
            }]
        }, {
            name: '白',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [100, 100],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '学霸年级',
                        textStyle: {
                            color: '#666666',
                            fontSize: 26
                        }
                    }
                }
            }, {
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        formatter: '\n1200',
                        textStyle: {
                            color: '#666666',
                            fontSize: 26
                        }
                    }
                }
            }]
        }]
    };
    return option;
}

let fumu=function(name){
    let myChart=echarts.init(document.getElementById(name));
    let option=fumuOption();
    myChart.setOption(option);
}

let fumuOption=function(){
    var value = [29.51,6.56,0.55,63.9];

    option = {
        tooltip: {
            trigger: 'item'
        },
        dataRange: {
            show: false,
            min : 0,
            max : 12,
            calculable : true,
            color: ['#2c6cc4','#50a3ba','#00ccbc','#60f3ab'],
            y:'center',
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: ['本科','硕士','博士','其他']
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        opacity:0.6,
                        shadowBlur: 80,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                silent: true,
                barWidth: 50,
                barGap: '-100%', // Make series be overlap
                data: [29.51,6.56,0.55,63.9]
            },
            {
                name: '学霸父母学历',
                type: 'pictorialBar',
                symbolSize: [50, 35],
                symbolOffset: [0, -20],
                z: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#50a3ba','#50a3ba','#50a3ba','#50a3ba','#50a3ba'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            opacity:1,
                            color: '#fff',
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}%'
                        }
                    }
                },
                data: [
                    {
                    value: 29.51,
                    symbolPosition: 'end'
                }, {
                    value: 6.56,
                    symbolPosition: 'end'
                }, {
                    value: 0.55,
                    symbolPosition: 'end'
                },{
                    value: 63.9,
                    symbolPosition: 'end'
                }]
            },
            {
                name: '学历',
                type: 'pictorialBar',
                symbolSize: [50, 35],
                symbolOffset: [0, 20],
                z: 12,
                itemStyle: {
                    normal: {
                        opacity:0.8
                    }
                },
                data: [29.51,6.56,0.55,63.9]
            },
        ]
    };
    return option;
}

let gradePaiming=function (name) {
    let mychart=echarts.init(document.getElementById(name));
    let option=gradeOption();
    mychart.setOption(option);
}
let gradeOption=function (){
    var yData = ['四川省', '江苏省', '福建省', '山东省', '浙江省']
    var data = ['19.8', '20.1', '21.7', '22.3', '25.9']
    var color = ['#6BF1BF', '#C7F895', '#E6D349', '#F8A065', '#FF6B5F']
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
            left: '8%',
            right: '12%',
            bottom: '8%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
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
                        color: '#00adff',
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
                barWidth: 5,
                z: 3
            },
            {
                name: '',
                type: 'bar',
                yAxisIndex: 2,
                data: [28,28,28,28,28],
                barWidth: 5,
                itemStyle: {
                    color: '#001a2b',
                    barBorderRadius: 2
                },
                label: {
                    normal: {
                        show: true,
                        color: '#00FFEC',
                        fontSize: 10,
                        padding: [0, 0, 0, 0],
                        position: 'right',
                        formatter: function (params) {
                            return data[params.dataIndex]+'%'
                        }
                    }
                },
                z: 0
            }
        ]
    }
    return option;
}