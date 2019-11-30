/****
 * animate 的动画
 */
//animate.css动画触动一次方法
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
/**
 * 显示模态框方法
 * @param targetModel 模态框选择器，jquery选择器
 * @param animateName 弹出动作
 * @ callback 回调方法
 */
var modalShow = function(targetModel, animateName, callback){
    var animationIn = ["bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp",
        "fadeIn", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeOutUp",
        "fadeInDownBig", "fadeInLeftBig", "fadeOutRightBig", "fadeOutUpBig","flipInX","flipInY",
        "lightSpeedIn","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight",
        "zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","slideInDown","slideInLeft",
        "slideInRight", "slideInUp","rollIn"];
    if(!animateName || animationIn.indexOf(animateName)==-1){
        console.log(animationIn.length);
        var intRandom =  Math.floor(Math.random()*animationIn.length);
        animateName = animationIn[intRandom];
    }
    console.log(targetModel + " " + animateName);
    $(targetModel).show().animateCss(animateName);
    callback.call(this);
}
/**
 * 隐藏模态框方法
 * @param targetModel 模态框选择器，jquery选择器
 * @param animateName 隐藏动作
 * @ callback 回调方法
 */
var modalHide = function(targetModel, animateName, callback){
    var animationOut = ["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp",
        "fadeOut", "fadeOutDown", "fadeOutLeft", "fadeOutRight", "fadeOutUp",
        "fadeOutDownBig", "fadeOutLeftBig", "fadeOutRightBig", "fadeOutUpBig","flipOutX","flipOutY",
        "lightSpeedOut","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight",
        "zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp",
        "zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideOutDown","slideOutLeft",
        "slideOutRight", "slideOutUp","rollOut"];
    if(!animateName || animationOut.indexOf(animateName)==-1){
        console.log(animationOut.length);
        var intRandom =  Math.floor(Math.random()*animationOut.length);
        animateName = animationOut[intRandom];
    }
    $(targetModel).children().click(function(e){e.stopPropagation()});
    $(targetModel).animateCss(animateName);
    $(targetModel).delay(900).hide(1,function(){
        $(this).removeClass('animated ' + animateName);
    });
    callback.call(this);
}

var modalDataInit = function(info){
    //alert(info);
    //填充数据，对弹出模态框数据样式初始化或修改
}

$(function () {
    mainIterval();
})
/***
 * 主屏幕的定时器
 */
let maintime=0;
let mainIterval=function () {
    $('#div4').removeClass('zoomIn');
    $('#div2_1').removeClass('zoomIn');
    $('#div2_2').removeClass('zoomIn');
    $('#div3').removeClass('zoomIn');
    let sub1=$("#sub1"),main_sub1=$('#main_sub1');
    let main_sub1_content=$('#main_sub1_content');
    let main_sub2=$("#main_sub2"),main_sub2_content=$("#main_sub2_content");
    let main_sub3=$("#main_sub3"),paming_content=$('#paming_content');
    let sub4_content=$('#sub4_content'),main_sub4=$('#main_sub4'),word=$("#word");

    let option='';
    let str='div1Content_';
    //隐藏当前的div
    let temp=setInterval(()=>{
        let $dom=$("#div1Content_"+maintime);
        $dom.addClass("zoomOut");
        clearInterval(temp);
    },10000);
    //显示下一个div
    setInterval(()=>{
        let $dom=$("#div1Content_1");
        $dom.addClass("zoomIn");
        $dom.removeClass('zoomOut');
        maintime=(maintime+1)%5;

        if (maintime==0){
            sub1.text('概述');
            main_sub1.text('全校优绩学子共');
            main_sub1_content.html('<h2>2212</h2>');
            main_sub2.text('国奖加持的优绩共');
            main_sub2_content.html('<h2>174</h2>');
            $('#paiming').attr('style','display:flex');
            word.attr('style','display:none');
            option=threeDOption();
        }
        if (maintime==1){
            $('#div2_1').addClass('flash');
            $('#div4').removeClass('flash');
            sub1.text('成绩组成');
            main_sub1.text('必修课平均成绩');
            main_sub1_content.html('<h2>90.91</h2>');
            main_sub2.text('限选课平均成绩');
            main_sub2_content.html('<h2>91.41</h2>');
            main_sub4.text('通识课课平均成绩');
            sub4_content.text('94.33');
            word.attr('style','display:block');
            $('#paiming').attr('style','display:none');
            option=main_duibiBarOption();
        }
        if (maintime==2){
            $('#div2_1').removeClass('flash');
            $('#div2_2').addClass('flash');
            sub1.text('自习地点');
            main_sub1.text('教学楼');
            main_sub1_content.html('<h2>86.00%</h2>');
            main_sub2.text('宿舍');
            main_sub2_content.html('<h2>54.11%</h2>');
            main_sub4.text('图书馆');
            sub4_content.text('94.33');
            option=bigshandianOption();
        }
        if (maintime==3){
            $('#div2_2').removeClass('flash');
            $('#div3').addClass('flash');
            $('#sub1').text('学霸的一天');
            main_sub1.text('7点-8点起床');
            main_sub1_content.html('<h2>56.50%</h2>');
            main_sub2.text('自习0-3h');
            main_sub2_content.html('<h2>48.31%</h2>');
            main_sub4.text('中午午休');
            sub4_content.text('51.00%');
            option=bigmanyBinOption();
        }
        if (maintime==4){
            $('#div3').removeClass('flash');
            $('#div4').addClass('flash');
            $('#sub1').text('学霸的父母');
            main_sub1.text('本科学历');
            main_sub1_content.html('<h2>29.51%</h2>');
            main_sub2.text('硕士学历');
            main_sub2_content.html('<h2>6.56%</h2>');
            main_sub4.text('博士学位');
            sub4_content.text('0.55');
            option=bigfumuOption();
        }

        myChartMain.setOption(option,true);
    },10500);
    //隐藏当前div
    setInterval(()=>{
        let $dom=$("#div1Content_1");
        $dom.addClass("zoomOut");
    },10000);
}

//点击div2_1
let changeDiv2_1=function () {
   let main=$('#div1Content_1');
   let div2_1=$('#div2_1');
   let mainContent=main.innerHTML;
   let div2_1Content=div2_1.innerHTML;
   main.innerHTML=div2_1Content;
   div2_1.innerHTML=mainContent;
}

/**
 * 照片定时器
let photoInterval=function(){
    data=JSON.parse(data)
    let i=0;
    setInterval(()=>{
        let name=document.getElementById("grade_name");
        let desc=document.getElementById("grade_description");
        let imgdiv=document.getElementsByClassName("Choices_left").item(0);
        name.innerText=data[i]["name"]
        desc.innerText='我是'+data[i]["des"]+';我是第'+(i+1)+'个';
        let str='<img src="img/grade_star/grade'+i+'.jpg" width="100%">'
        imgdiv.innerHTML=str;
        i++;
        i=i%data.length;
    },2000)
} */