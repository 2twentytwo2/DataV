/**
 * 社会实践的animate定时器
 * **/
$(function () {
    socialInterval();
})

let maintime=0;
let socialInterval=function () {
    let $dom=$("#main");
    let DIVNAME='ditu';
    let main_title_content=$("#main_title_content");//主屏标题

    //侧边栏
    let main_1=$('#main_1'),main_2=$('#main_2'),
        main_3=$('#main_3'),main_4=$('#main_4'),main_5=$('#main_5');

    let option='';
    //隐藏当前的div
    let temp=setInterval(()=>{
        $dom.addClass("flipOutX");
        main_1.hide();
        main_5.hide();
        main_3.hide();
        main_4.hide();
        clearInterval(temp);
    },4000);

    //显示下一个div
    let mainInter=setInterval(()=>{
        $dom.removeClass('flipOutX');
        $dom.addClass("flipInX");
        maintime=(maintime+1)%5;
        console.log(maintime)
        if (maintime==0){//第一张主图 地图
            option=dituOption();
            main_title_content.text('概述');
            $('#main_1').show();
            console.log('0000')
        }
        if (maintime==1){//第二张 综合能力
            option=abilityOption();
            main_title_content.text('综合能力');
            //$('#main_1').hide();
            $('#main_2').show();
            console.log('1111')
        }
        if (maintime==2){//第三张 话题演变
            option=main_topicChangeOption();
            main_title_content.text('话题演变');
            $('#main_3').show();
            console.log('2222')
        }
        if (maintime==3){//第四张 班级参与度
            option=main_joinDegreeOption();
            main_title_content.text('班级参与度');
            $('#main_4').show();
            console.log('333')
        }
        if (maintime==4){//第五张 同乡率
            option=main_ciyunOption();
            main_title_content.text('同乡率');
            $('#main_5').show();
            console.log('4444')
        }
        mainChart.setOption(option,true);
    },4300);

    let hide=setInterval(()=>{
        //let $dom=$("#main");
        $dom.addClass("flipOutX");
        $('#main_1').hide();
        $('#main_2').hide();
        $('#main_3').hide();
        $('#main_4').hide();
        $('#main_5').hide();
    },4000);
}