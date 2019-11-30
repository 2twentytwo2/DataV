<template>
    <div id="common"></div>
</template>
<script>
   // let echarts = require('echarts/lib/echarts')

    //******chart1 option1********************************************************************************

    //******chart3 option3**********************************************************************************

    //********chart4 option4**********************************************************************
    let data = [
        [167.03, 8.9884, 178.89, 4.2753,28.75,4.6],//58.588,17.112,4.1116,
        [168.346, 8.483, 186.16, 3.6958,35.11,9.22]//59.619,17.839,3.8566,
    ];
    const option4 = {
        legend: {
            orient: 'vertical',  //垂直显示
            y: 'top',    //延Y轴居中
            x: 'right', //居右显示
            align: 'left',
            // padding:-0.5, //调节legend的位置
            textStyle: {
                color: 'white',
            },
            data: ['总体学生','体育特长生'],
        },
        grid:{
            top:50,
            bottom:30,
            left:30,
            right:10,
        },
        tooltip : {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            data: ['身高', '五十米跑', '立定跳远','1000米','仰卧起坐','引体向上'],//'体重','座位体前屈','800米',
            axisLine: {
                show: true ,//隐藏X轴轴线
                lineStyle: {
                    color:'white'
                }
            },
            axisTick: {
                show: false, //隐藏X轴刻度
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "white" //X轴文字颜色
                },
                interval: 0
            },
            splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                show:false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                // interval:"auto",        //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                // lineStyle:mylineStyle
            }
        }

        ],
        yAxis: [{
            type: 'value',
            max: 187,
            min:3,
            axisLine: {
                show: true ,//隐藏X轴轴线
                lineStyle: {
                    color:'white'
                }
            },
            axisTick: {
                show: false, //隐藏X轴刻度
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                show:false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                // interval:"auto",        //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                // lineStyle:mylineStyle
            }
        }],
        series: [{
            name: '总体学生',
            type: 'bar',
            barWidth:23,
            // barMaxWidth:20,
            data: data[0],
            zlevel: 1,
            itemStyle: {
                color: '#2ec7c9'
            },
            markPoint : {
                data : [
                    // {type : 'max', name: '最大值'},
                    // {type : 'min', name: '最小值'},
                    {name : '身高', value :167.0, xAxis: 0, yAxis: 167},
                    // {name : '体重', value :58.5, xAxis: 1, yAxis: 59},
                    {name : '50m', value :8.9, xAxis: 1, yAxis: 9},
                    {name : '跳远', value :178.2, xAxis: 2, yAxis: 179},
                    // {name : '体前屈', value :17.1, xAxis: 4, yAxis: 17},
                    // {name : '800', value :4.1, xAxis: 3, yAxis: 4.1},
                    {name : '1000', value :4.3, xAxis: 3, yAxis: 4.3},
                    {name : '仰卧起坐', value :29, xAxis: 4, yAxis: 29},
                    {name : '引体向上', value :5, xAxis: 5, yAxis: 5},
                ]
            },

        },
            {
                name: '体育特长生',
                type: 'bar',
                barWidth:22,
                barMaxWidth:30,
                data: data[1],
                zlevel: 1,
                itemStyle: {
                    color: '#b6a2de'
                },
                markPoint : {
                    data : [
                        {name : '身高', value :168.3, xAxis: 0, yAxis: 168.3},
                        // {name : '体重', value :59.6, xAxis: 1, yAxis: 60},
                        {name : '50m', value :8.5, xAxis: 1, yAxis: 8.4},
                        {name : '跳远', value :186.2, xAxis: 2, yAxis: 186},
                        // {name : '体前屈', value :17.8, xAxis: 4, yAxis: 17.8},
                        // {name : '800', value :3.8, xAxis: 3, yAxis: 3.6},
                        {name : '1000', value :3.7, xAxis: 3, yAxis: 3.7},
                        {name : '仰卧起坐', value :34, xAxis: 4, yAxis: 34},
                        {name : '引体向上', value :9, xAxis: 5, yAxis: 9},
                    ]
                },

            }
        ]};


    //***********chart5 option5********************************************************
    let data1 = [
        {
            name: '?',//易烊千玺
            value: 3.3577,
            rank:1,
            itemStyle: {
                normal: {
                    color: '#9999cc',
                    fontSize: 28
                }
            }
        },
        {
            name: '肖X',//肖战
            value: 3.1492,
            rank:2,
            itemStyle: {
                normal: {
                    color: '#5ab1ef',
                    fontSize: 28,
                }
            }
        },
        {
            name: '胡X',//胡歌
            value: 2.8935,
            rank:3,
            itemStyle: {
                normal: {
                    color: '#ffb980',
                }
            }},
        {
            name: '王XX',//王一博
            value: 2.7902,
            rank:4,
            itemStyle: {
                normal: {
                    color: '#ea848b',
                }
            }},
        {
            name: '朱XX',//朱一龙
            value: 2.6386,
            rank:5,
            itemStyle: {
                normal: {
                    color: '#2ec7c9',
                }
            }
        },
        {
            name: '周XX',//周杰伦
            value: 2.5029,
            rank:6,
            itemStyle: {
                normal: {
                    color: '#c96158',
                }
            }},
        {
            name: '白XX',//白敬亭
            value: 2.4443,
            rank:7,
            itemStyle: {
                normal: {
                    color: '#f5994e',
                }
            }
        },
        {
            name: '刘XX',//刘昊然
            value: 2.4023,
            rank:8,
            itemStyle: {
                normal: {
                    color: '#5ab1ef',
                }
            }
        },
        {
            name: '华XX',//华晨宇
            value: 2.3575,
            rank:9,
            itemStyle: {
                normal: {
                    color: '#97b552',
                }
            }
        },
        {
            name: '撒XX',//撒贝宁
            value: 2.3575,
            rank:10,
            itemStyle: {
                normal: {
                    color: '#9a7fd1',
                }
            }}
    ];

    const option5 = {
        grid:{
            bottom:10,
            top:10,
            left: 0,
            right:0
        },
        backgroundColor:'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
        tooltip: {
            trigger: 'item',
            showContent: true,
            formatter: function(a){
                return (a['data'].rank+"："+a['name']);

            },
            // formatter: ,
            backgroundColor:'black'//悬浮框背景色设置

        },
        series: [{
            type: 'treemap',
            width: '100%',
            height: '100%',
            // top: '5%',
            roam: false, //是否开启拖拽漫游（移动和缩放）
            nodeClick: true, //点击节点后的行为,false无反应
            upperLabel: true,
            breadcrumb: {  //面包屑 关闭
                show: false
            },

            label: { //描述了每个矩形中，文本标签的样式。
                normal: {
                    show: true,
                    // position: ['10%', '10%'],
                    // formatter: '{b}: {c}'
                }
            },
            //--------------------树图中每个节点的样式
            itemStyle: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 28,
                    },
                    borderWidth: 3,
                    gapWidth:6,
                    strokeColor:'#311b92',
                    borderColor: 'transparent',//grey
                },
                emphasis: {
                    label: {
                        show: true,//树图中个图形和标签高亮的样式
                    }
                }
            },
            data: data1
        }]
    };


    export default {
        getOption1(showLegned,showTitle,showLabel){
            const option1={
                grid:{
                    top:10,
                    bottom:0,
                    // left:40,
                    // right:40,
                },
                title : [{
                    show:showTitle,
                    text: '文艺赛事',
                    // subtext: '纯属虚构',
                    // center : ['35%', '50%'],
                    x:'21%',
                    textStyle: {
                        fontWeight: "normal",
                        color: "#fff",
                        fontSize: 14
                    },
                    // color:"white"
                    // x:'center'
                },{
                    show:showTitle,
                    text: '体育赛事',
                    // subtext: '纯属虚构',
                    // center : ['75%', '50%'],
                    x:'71%',
                    // y:'center',
                    textStyle: {
                        fontWeight: "normal",
                        color: "#fff",
                        fontSize: 14
                    },
                }],
                tooltip : {
                    trigger: 'item',
                    // formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    show:showLegned,
                    x : 'center',
                    y : 'bottom',
                    data:['国家级','省级','校级','院级'],
                    textStyle: {
                        color: 'white',
                        // fontSize: 20,
                        // padding:5
                    },
                },
                color:[ '#fdb628','#9fe6b8','#8378ea','#ff9f7f'],
                // calculable : true,
                series : [
                    {
                        name:'文艺赛事',
                        minAngle: 30,  // 设置每块扇形的最小占比
                        // maxAngle:50,
                        type:'pie',
                        radius : ['18%', '58%'],
                        center : ['25%', '50%'],
                        roseType : 'radius',
                        label: {
                            normal: {
                                show: showLabel,
                                // formatter: '{value} %'
                                // position : 'inner',
                                // width:10,
                                // formatter: function (p) {   //指示线对应文字，说明文字
                                //     return p.data.name+"%";
                                // }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },


                        data:[
                            {value:0.2, name:'国家级'},
                            {value:1.2, name:'省级'},
                            {value:32.6, name:'校级'},
                            {value:66.0, name:'院级'},
                        ],
                        itemStyle: {
                            normal: {
                                // 阴影的大小
                                shadowBlur: 200,
                                // 阴影水平方向上的偏移
                                shadowOffsetX: 0,
                                // 阴影垂直方向上的偏移
                                shadowOffsetY: 0,
                                // 阴影颜色
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        visualMap: {
                            // 不显示 visualMap 组件，只用于明暗度的映射
                            show: false,
                            // 映射的最小值为 80
                            min: 80,
                            // 映射的最大值为 600
                            max: 600,
                            inRange: {
                                // 明暗度的范围是 0 到 1
                                colorLightness: [0, 1]
                            }
                        }
                    },
                    {
                        name:'体育赛事',
                        type:'pie',
                        minAngle: 20,  // 设置每块扇形的最小占比
                        radius : ['20%', '55%'],
                        center : ['75%', '50%'],
                        roseType : 'radius',
                        data:[
                            {value:52.7, name:'校级'},
                            {value:7.3, name:'省级'},
                            {value:1.3, name:'国家级'},
                            {value:38.8, name:'院级'}
                        ],
                        label: {
                            normal: {
                                show: showLabel,
                                // position : '',
                                // width:10,
                                // formatter: function (p) {   //指示线对应文字，说明文字
                                //     return p.data.name;
                                // }
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: false
                            }
                        },
                    }
                ]
            };
            return option1;

        },
        // option1,
        // option3,
        option4,
        option5,
        getOption3(echarts){
            // this.$echarts.init(document.getElementById("common"));
            let option3 = {
                // title: {
                //     text: '折线图堆叠'
                // },
                grid:{
                    top:10,
                    bottom:20,
                    left:60,
                    right:60,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',  //垂直显示
                    y: 'top',    //延Y轴居中
                    x: '50%', //居右显示
                    align: 'left',
                    // padding:-0.5, //调节legend的位置
                    textStyle: {
                        color: 'white',
                        fontSize: 10,
                        // padding:5
                    },
                    data:['立定跳远','50米跑']
                },
                toolbox: {
                    // feature: {
                    //     saveAsImage: {}
                    // }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['15级','16级','17级','18级'],
                    axisLine: {
                        show: true ,//隐藏X轴轴线
                        lineStyle: {
                            color:'#0d579b'
                        }
                    },
                    axisTick: {
                        show: false, //隐藏X轴刻度
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "white" //X轴文字颜色
                        },
                        interval: 0
                    },

                },
                yAxis: [{
                    // name: '立定跳远',
                    type: 'value',
                    max: 185,
                    min:173,
                    splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                        show:false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                        interval:2,        //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

                        // lineStyle:mylineStyle
                    },
                    axisLine: {
                        show: false ,//隐藏X轴轴线
                        lineStyle: {
                            color:'white'
                        }
                    },
                    axisTick: {
                        show: false, //隐藏X轴刻度
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "white", //X轴文字颜色
                            fontSize: 10,
                        },
                        // interval: 1,
                        formatter: '{value} cm'
                    },
                },{
                    // type: '50m',
                    // name: '50米跑',
                    type: 'value',
                    max: 9.3,
                    min:8.9,
                    splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                        show:false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                        // interval:"auto",        //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                        // lineStyle:mylineStyle
                    },
                    axisLine: {
                        show: false ,//隐藏X轴轴线
                        lineStyle: {
                            color:'white'
                        }
                    },
                    axisTick: {
                        show: false, //隐藏X轴刻度
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "white", //X轴文字颜色
                            fontSize: 10
                        },
                        interval: 0,
                        formatter: '{value} s'
                    },
                }],
                series: [
                    {
                        name:'立定跳远',
                        type:'line',
                        smooth:true,

                        // stack: '总量',
                        data:[184.08, 177.43, 176.44, 174.96],
                        itemStyle: {
                            normal: {
                                color: '#fbfb07',
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#fbfb07'
                                }, {
                                    offset: 1,
                                    color: 'transparent'
                                }])
                            }
                        },
                    },
                    {
                        name:'50米跑',
                        type:'line',
                        yAxisIndex:1,
                        // stack: '总量',
                        data:[9.036, 8.940, 8.924, 9.050],
                        itemStyle: {
                            normal: {
                                color: '#05e8ed',
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#01d5d4'
                                }, {
                                    offset: 1,
                                    color: 'transparent'
                                }])
                            }
                        },
                    }
                ]
            };
            return option3;
        }

    }
</script>
