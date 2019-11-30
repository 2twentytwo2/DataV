<template>
    <div id="main">
        <div id="barchart" ref="ref1"></div>
    </div>
</template>

<script>
    // import common from "@/components/common";
    export default {
        name: "chart1",
        data(){
            return{

            }
        },
        methods:{
            drawChart(){
                window.console.log(this.$refs.ref1)
                this.myChart = this.$echarts.init(this.$refs.ref1);
                var data_year_rang = ["2016级", "2017级", "2018级"]
                var data_dd = [{
                    'dim_year':2016,
                    'radar_indicator': [{
                        name: '科研创新',
                        max: 4
                    }, {
                        name: '专业技能',
                        max: 12
                    }, {
                        name: '文体特长',
                        max: 4
                    }, {
                        name: '团学工作',
                        max: 7.5
                    }, {
                        name: '社会实践',
                        max: 2.5
                    }],
                    'trade_range': [3.64, 9.82, 2.22, 4.38, 2.01]
                },
                    {
                        'dim_year':2017,
                        'radar_indicator': [{
                            name: '科研创新',
                            max: 4
                        }, {
                            name: '专业技能',
                            max: 12
                        }, {
                            name: '文体特长',
                            max: 4
                        }, {
                            name: '团学工作',
                            max: 7.5
                        }, {
                            name: '社会实践',
                            max: 2.5
                        }],
                        'trade_range': [2.39,11.50,3.38,7.06,1.77]
                    },
                    {
                        'dim_year':2018,
                        'radar_indicator': [{
                            name: '科研创新',
                            max: 4
                        }, {
                            name: '专业技能',
                            max: 12
                        }, {
                            name: '文体特长',
                            max: 4
                        }, {
                            name: '团学工作',
                            max: 7.5
                        }, {
                            name: '社会实践',
                            max: 2.5
                        }],
                        'trade_range': [0.35,1.71,3.18,5.38,0.69]
                    },
                    {
                        'dim_year':2019.4,
                        'radar_indicator': [{
                            name: '产品设计',
                            max: 100
                        }, {
                            name: '项目管理',
                            max: 100
                        }, {
                            name: '数据分析',
                            max: 100
                        }, {
                            name: '抗压能力',
                            max: 100
                        }, {
                            name: '执行能力',
                            max: 100
                        }, {
                            name: '技术知识',
                            max: 100
                        }, {
                            name: '沟通能力',
                            max: 100
                        }],
                        'trade_range': [80, 70, 75, 75, 80, 65,80]
                    }
                ]

                // let sizeValue = '57%';
                let option = {
                    // dataset: {
                    //     source: [
                    //         ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    //         ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    //         ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    //         ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    //         // ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                    //     ]
                    // },
                    tooltip: {},
                    baseOption: {
                        title: {
                            textStyle: {
                                color: '#eb6b56'
                            }
                        },
                        timeline: {
                            axisType: 'category',
                            autoPlay: true,
                            width:'50%',
                            x:'center',
                            playInterval: 4000,
                            top:"65%",
                            data: data_year_rang,
                            label: {
                                normal: {
                                    color: 'rgba(232,105,88, 1)',
                                    interval: 0,
                                    fontSize: 20,
                                    padding: [0, 0, -56, 0],
                                    lineHeight: 100
                                },
                            }
                        },
                        color:[ '#fdb628','#9fe6b8','#8378ea','#ff9f7f'],
                        tooltip: {},
                        legend: {
                            show:false
                        },
                        series: [{
                            name: 'radar',
                            type: 'radar',
                            areaStyle: {
                                normal: {
                                    shadowBlur: 13,
                                    shadowColor: 'rgba(0,0,0,0)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    opacity: 1
                                }
                            },
                            itemStyle: {
                                color: 'rgba(232,105,88, 0.5)',
                                borderColor: 'rgba(232,105,88, 0.5)'
                            },
                        },{
                            //科研创新
                            type: 'pie',
                            center: ['15%', '15%'],
                            radius: ['40', '60'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {value:3.64, name:'16'},
                                {value:2.39, name:'17'},
                                {value:0.35, name:'18'},
                            ]
                            // No encode specified, by default, it is '2012'.
                        }, {
                            //专业技能
                            type: 'pie',
                            radius: 60,
                            // roseType: 'radius',
                            center: ['85%', '15%'],
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {value:9.82, name:'16'},
                                {value:11.50, name:'17'},
                                {value:1.71, name:'18'},
                            ],
                        }, {
                            //团学工作
                            type: 'pie',
                            radius: 60,
                            roseType: 'area',
                            center: ['15%', '85%'],
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {value:4.38, name:'16'},
                                {value:7.06, name:'17'},
                                {value:5.38, name:'18'},
                            ],
                        }, {
                            //社会实践
                            type: 'pie',
                            radius: 60,
                            roseType: 'area',
                            center: ['85%', '85%'],
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data: [
                                {value:2.01, name:'16'},
                                {value:1.77, name:'17'},
                                {value:0.69, name:'18'},
                            ]
                        }]
                    },
                    options: [
                        {
                            radar: {
                                center: ['50%', '50%'],             // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
                                radius: '30%',
                                name: {
                                    textStyle: {
                                        color: '#F6F46D',
                                        fontSize: 20
                                    },
                                    formatter: function(value) {
                                        return '{a|' + value + '} '
                                    },
                                    lineHeight: 20,
                                    rich: {
                                        a: {
                                            fontSize: 20,
                                            align: 'center'
                                        },
                                        b: {
                                            fontSize: 12,
                                            align: 'left'
                                        }
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: ['rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)'
                                        ]
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        // color: [   //此处可以修改圆环的颜色
                                        //     '#FFC221', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1'
                                        // ].reverse(),
                                        width: 1
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(238,238,238, 0.2)'
                                    }
                                },
                                splitNumber: 6,
                                // shape: 'circle',
                                indicator: data_dd[0].radar_indicator
                            },
                            series: [{
                                lineStyle: {
                                    normal: {
                                        type: "dashed",
                                        color: '#eb6b56',
                                        width: 2
                                    }
                                },
                                data: [{
                                    value: data_dd[0].trade_range
                                }]
                            }]
                        },

                        {
                            radar: {
                                name: {
                                    textStyle: {
                                        color: '#F6F46D',
                                        fontSize: 20
                                    },
                                    formatter: function(value) {
                                        return '{a|' + value + '} '
                                    },
                                    lineHeight: 20,
                                    rich: {
                                        a: {
                                            fontSize: 20,
                                            align: 'center'
                                        },
                                        b: {
                                            fontSize: 12,
                                            align: 'left'
                                        }
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: ['rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)'
                                        ]
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        // color: [   //此处可以修改圆环的颜色
                                        //     '#FFC221', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1'
                                        // ].reverse(),
                                        width: 1
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(238,238,238, 0.2)'
                                    }
                                },
                                splitNumber: 6,
                                // shape: 'circle',
                                indicator: data_dd[1].radar_indicator
                            },
                            series: [{
                                lineStyle: {
                                    normal: {
                                        type: "dashed",
                                        color: '#eb6b56',
                                        width: 2
                                    }
                                },
                                data: [{
                                    value: data_dd[1].trade_range
                                }]
                            }]
                        },
                        {
                            radar: {
                                name: {
                                    textStyle: {
                                        color: '#F6F46D',
                                        fontSize: 20
                                    },
                                    formatter: function(value) {
                                        return '{a|' + value + '} '
                                    },
                                    lineHeight: 20,
                                    rich: {
                                        a: {
                                            fontSize: 20,
                                            align: 'center'
                                        },
                                        b: {
                                            fontSize: 12,
                                            align: 'left'
                                        }
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: ['rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)'
                                        ]
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        // color: [   //此处可以修改圆环的颜色
                                        //     '#FFC221', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1'
                                        // ].reverse(),
                                        width: 1
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(238,238,238, 0.2)'
                                    }
                                },
                                splitNumber: 6,
                                // shape: 'circle',
                                indicator: data_dd[2].radar_indicator
                            },
                            series: [{
                                lineStyle: {
                                    normal: {
                                        type: "dashed",
                                        color: '#eb6b56',
                                        width: 2
                                    }
                                },
                                data: [{
                                    value: data_dd[2].trade_range
                                }]
                            }]
                        },
                        {
                            radar: {
                                name: {
                                    textStyle: {
                                        color: '#F6F46D',
                                        fontSize: 20
                                    },
                                    formatter: function(value) {
                                        return '{a|' + value + '} '
                                    },
                                    lineHeight: 20,
                                    rich: {
                                        a: {
                                            fontSize: 20,
                                            align: 'center'
                                        },
                                        b: {
                                            fontSize: 12,
                                            align: 'left'
                                        }
                                    }
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: ['rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                                            'rgba(255,255,255,0.03)'
                                        ]
                                    }
                                },
                                splitLine: {
                                    lineStyle: {
                                        type: "dashed",
                                        // color: [   //此处可以修改圆环的颜色
                                        //     '#FFC221', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1',
                                        //     '#6B6EB1', '#6B6EB1'
                                        // ].reverse(),
                                        width: 1
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(238,238,238, 0.2)'
                                    }
                                },
                                splitNumber: 6,
                                // shape: 'circle',
                                indicator: data_dd[3].radar_indicator
                            },
                            series: [{
                                // center: ['25%', '30%'],
                                lineStyle: {
                                    normal: {
                                        type: "dashed",
                                        color: '#eb6b56',
                                        width: 2
                                    }
                                },
                                data: [{
                                    value: data_dd[3].trade_range
                                }]
                            }]
                        }


                    ]
                }
                this.myChart.setOption(option);
            },
        },
        mounted: function () {
            this.drawChart();
            this.myChart.resize();
            window.onresize = () => {
                // 基于准备好的dom，初始化echarts实例
                this.myChart.resize();
            };
        }
    }
</script>

<style scoped>
    #main{
        height: 100%;
        width: 100%;
        margin:0px;
        background-color: #2c3e50;
        overflow: hidden;
    }
    #barchart{
        height: 90%;
        width:60%;
        background-color: rgba(240, 248, 255, 0.12);
        margin: 20px auto;
    }

</style>