<template>
    <div class="container">
      <img src="../assets/bac3.png" class="bacImg"/>
      <div class="title" >
        <div class="subtitle" style="margin-left: 3%;margin-right:2%;float: left;width:25%;height: 80%;margin-top: 1%" >科研创新</div>

        <div style="display: flex;flex-direction: row;flex-wrap: wrap;width:70%;height: 80%">
          <div style="margin-top:3%;margin-right:3%;width: 5px;height: 50%;background-color: #0de6f9;"></div>
          <div style="margin-top:3%;margin-right:3%;height: 50%;font-size: 20px;color:#0de6f9">学术论文</div>
          <div style="margin-top:2.3%;margin-right:8%;height: 50%;font-size: 28px;font-weight: bold;color:#efc04e">224篇</div>

          <div style="margin-top:3%;margin-right:3%;width: 5px;height: 50%;background-color: #0de6f9"></div>
          <div style="margin-top:3%;margin-right:3%;height: 50%;font-size: 20px;color:#0de6f9">国家级奖项</div>
          <div style="margin-top:2.3%;margin-right:8%;height: 50%;font-size: 28px;font-weight: bold;color:#efc04e">98项</div>


          <div style="margin-top:3%;margin-right:3%;width: 5px;height: 50%;background-color: #0de6f9"></div>
          <div style="margin-top:3%;margin-right:3%;height: 50%;font-size: 20px;color:#0de6f9">发明专利</div>
          <div style="margin-top:2.3%;margin-right:3%;height: 50%;font-size: 28px;font-weight: bold;color:#efc04e">24项</div>


        </div>


      </div>
      <!--<section class="parent">-->
        <!--<section class="top">-->
          <!--<section style="width: 65%">-->

            <!--<div class="sub">-->
                <!--<div style="height: 100%;width: 10px;background-color: #0de6f9;margin:10px;float: left;">-->
                <!--</div>-->
                <!--<p class="subtitle" style="margin: 10px">测试</p>-->
              <!--<dot style="height: 100%;margin: 10px"></dot>-->
            <!--</div>-->
            <!--<chart1 style="height: calc(100% - 50px);width: 100%;margin-top: 20px"></chart1>-->
          <!--</section>-->
          <!--<section style="width: 32%">-->
            <!--<div class="sub">-->
              <!--<div style="height: 100%;width: 10px;background-color: #0de6f9;margin:10px;float: left;">-->
              <!--</div>-->
              <!--<p class="subtitle" style="margin: 10px">测试</p>-->
              <!--<dot style="height: 100%;margin: 10px"></dot>-->
            <!--</div>-->
            <!--<chart2 style="height: calc(100% - 50px);width: 100%;margin-top: 20px"></chart2>-->
          <!--</section>-->
        <!--</section>-->
        <!--<section class="bottom">-->
          <!--<section>-->
            <!--<div class="sub">-->
              <!--<div style="height: 100%;width: 10px;background-color: #0de6f9;margin:10px;float: left;">-->
              <!--</div>-->
              <!--<p class="subtitle" style="margin: 10px">测试</p>-->
              <!--<dot style="height: 100%;margin: 10px"></dot>-->
            <!--</div>-->
            <!--<chart3 style="height: calc(100% - 50px);width: 100%;margin-top: 20px"></chart3>-->
          <!--</section>-->
          <!--<section>-->
            <!--<div class="sub">-->
              <!--<div style="height: 100%;width: 10px;background-color: #0de6f9;margin:10px;float: left;">-->
              <!--</div>-->
              <!--<p class="subtitle" style="margin: 10px">测试</p>-->
              <!--<dot style="height: 100%;margin: 10px"></dot>-->
            <!--</div>-->
            <!--<chart4 style="height: calc(100% - 50px);width: 100%;margin-top: 20px"></chart4>-->
          <!--</section>-->
          <!--<section>-->
            <!--<div class="sub">-->
              <!--<div style="height: 100%;width: 10px;background-color: #0de6f9;margin:10px;float: left;">-->
              <!--</div>-->
              <!--<p class="subtitle" style="margin: 10px">测试</p>-->
              <!--<dot style="height: 100%;margin: 10px"></dot>-->
            <!--</div>-->
          <!--</section>-->
        <!--</section >-->
      <!--</section>-->
      <section class="parent">
        <section class="flex_block bac" @click="clickChart1('1')" style="transform:translate(1%,1%) scale(1)">
          <test1_2></test1_2>
        </section>
        <section class="flex_block bac" @click="clickChart1('2')"  style="transform:translate(1%,105%) scale(1)">
          <test1_3></test1_3>
        </section>
        <section class="flex_block bac" @click="clickChart1('3')"  style="transform:translate(1%,210%) scale(1)">
          <test1_4></test1_4>
        </section>
        <section class="flex_block bac active1" @click="clickChart1('4')"  style="transform:translate(128%,26%) scale(1.5)">
          <test1_0></test1_0>
        </section>
        <section class="flex_block bac active2" @click="clickChart2('5')"  style="transform:translate(128%,185%) scale(1.5)">
          <test1_1></test1_1>
        </section>
        <section class="flex_block bac" @click="clickChart2('6')"  style="transform:translate(256%,1%) scale(1)">
          <test1_5></test1_5>
        </section>
        <section class="flex_block bac" @click="clickChart2('7')"  style="transform:translate(256%,105%) scale(1)">
          <test1_6></test1_6>
        </section>
        <section class="flex_block bac" @click="clickChart2('8')"  style="transform:translate(256%,210%) scale(1)">
          <test1_7></test1_7>
        </section>



        <!--<section class="flex_block" style="width: 33%">-->
          <!--<div style="width: 50%;height: 50%">-->
            <!--<test1_2></test1_2>-->
          <!--</div>-->
          <!--<div style="width: 50%;height: 50%">-->
            <!--<test1_2></test1_2>-->
          <!--</div>-->
        <!--</section>-->

        <!--<section class="flex_block" style="width: 33%">-->
          <!--<div style="width: 25%;height: 33%">-->
            <!--<test1_2></test1_2>-->
          <!--</div>-->
          <!--<div style="width: 25%;height: 33%">-->
            <!--<test1_2></test1_2>-->
          <!--</div>-->
          <!--<div style="width: 25%;height: 33%">-->
            <!--<test1_2></test1_2>-->
          <!--</div>-->
        <!--</section>-->

      </section>
    </div>

</template>

<script>
  import dot from "@/components/dot"
  import chart1 from "@/components/test2/chart21"
  import chart2 from "@/components/test2/chart22"
  import chart3 from "@/components/test2/chart23"
  import chart4 from "@/components/test2/chart24"
  import test1_0 from "@/components/test1_0"
  import test1_1 from "@/components/test1_1"
  import test1_2 from "@/components/test1_2"
  import test1_3 from "@/components/test1_3"
  import test1_4 from "@/components/test1_4"
  import test1_5 from "@/components/test1_5"
  import test1_6 from "@/components/test1_6"
  import test1_7 from "@/components/test1_7"
    export default {
        name: "test2",
      components:{"dot":dot,"chart1":chart1,"chart2":chart2,"chart3":chart3,"chart4":chart4,"test1_0":test1_0,"test1_1":test1_1,"test1_2":test1_2,"test1_3":test1_3,"test1_4":test1_4,"test1_5":test1_5,"test1_6":test1_6,"test1_7":test1_7},
      data(){
          return{
            items: [],
            index:1,
            index2:6
          }
      },
      mounted(){
          this._initt()
        let myItv1 = setInterval(()=>
        {
          if(this.index === 1)
          {
            this.clickChart1(1)

            this.index++
          }
          else if(this.index === 2)
          {
            this.clickChart1(2)

            this.index++
          }
          else if(this.index === 3)
          {
            this.clickChart1(3)
            clearInterval(myItv1)
          }
        },13000)
        let myItv2 = setInterval(()=>
        {
          if(this.index2 === 6)
          {
            this.clickChart2(6)

            this.index2++
          }
          else if(this.index2 === 7)
          {
            this.clickChart2(7)

            this.index2++
          }
          else if(this.index2 === 8)
          {
            this.clickChart2(8)
            clearInterval(myItv2)
          }
        },13000)
      },
      methods: {
        _initt() {
          this.items = document.querySelectorAll('.parent .flex_block')
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].dataset.order = i + 1;
          }
        },
        clickChart1(clickIndex) {
          console.log(clickIndex)
          let activeItem = document.querySelector('.parent .active1')
          let activeIndex = activeItem.dataset.order
          let clickItem = this.items[clickIndex - 1]
          if (activeIndex === clickIndex) {
            return
          }
          activeItem.classList.remove('active1')
          clickItem.classList.add('active1')
          this._setStyle(clickItem, activeItem)
        },
        clickChart2(clickIndex) {
          console.log(clickIndex)
          let activeItem = document.querySelector('.parent .active2')
          let activeIndex = activeItem.dataset.order
          let clickItem = this.items[clickIndex - 1]
          if (activeIndex === clickIndex) {
            return
          }
          activeItem.classList.remove('active2')
          clickItem.classList.add('active2')
          this._setStyle(clickItem, activeItem)
        },
        _setStyle(el1, el2) {
          let transform1 = el1.style.transform
          let transform2 = el2.style.transform
          el1.style.transform = transform2
          el2.style.transform = transform1
        },


      }

    }
</script>

<style scoped>

  .container{


    width: 100%;
    height: 100vh;
    background-color: #040e2a;
  }
  .bacImg{
    width: 100%;
    height: 70%;
    position: absolute;
    bottom:0;
    left: 0;
    opacity: 0.6;
    z-index: 0;
  }
  .title{
    width: 100%;
    z-index: 2;
    height: 12%;
  }
  .subtitle{
    font-family: sy;
    font-size: 55px;
    color: #0de6f9;
  }
  .parent {

    width: 100%;
    height: 88%;
    position:relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: content-box;
  }

  section section{
    z-index: 1;
  }

  .bac{
    background-color: rgba(9,24,66,0.2);
    -moz-box-shadow: 12px 2px 10px #2d3c56;
    -webkit-box-shadow: 2px 2px 10px #2d3c56;
    box-shadow:2px 2px 10px #2d3c56;
    border-radius: 15px;
  }


  .flex_block{

    margin-bottom: 6px;
    width: 28%;
    height: 32%;
    position:absolute;
    transition:all 0.8s;
  }

</style>
