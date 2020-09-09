<template>
    <div class="d-swipper">
        <div ref="container" v-on="{mouseup:mouseUp, mousedown:mouseDown, mousemove: mouseMove, mouseleave: mouseUp, transitionend:resetMove}"
          v-bind:class="{'d-swipper__container--move':isMove, 'd-swipper__container':true}">
            <div ref="pic" v-for= "(item, idx) in pics" :key="idx" class="d-swipper__pic" >
                <img :src="item" width="300" style=" -webkit-user-drag: none;">
            </div>
        </div>
    </div>
</template>
<script>
let status = {
    "index":0,
    "state":0,
    "startEvent": null,
    "oldEvent":null,
}

let left
let isMove = false
let itemWidth = 300
let timer 
function autoPlay(){
    let context = this
    this.timer = setInterval(()=>{
        context.status.index++;
        if (context.status.index > context.pics.length - 1) {
            context.status.index = 0;
        }
        context.isMove = true;
        context.left = 0 - context.itemWidth * context.status.index;
        context.setContainerPos();
    }, 3000)
}
function setContainerPos(){
    console.log(this.$refs.container)
    this.$refs.container.style.left = this.left + "px";
}
function mouseDown(event){
    clearInterval(this.timer)
    console.log('mousedown');
    this.status.state = 1;
    this.status.startEvent = this.status.oldEvent = event;
}
function mouseMove(event){
    if (this.status.state != 1) return; // 只有当state == 1时候才允许执行该事件

    // 用当前鼠标的位置来和上次鼠标的位置作比较
    // 如果当前鼠标的pageX小于上次鼠标的pageX，那就表示鼠标在向左拖动，就需要把容器left值减去鼠标移动的距离
    if (event.pageX < this.status.oldEvent.pageX) {
        this.left -= this.status.oldEvent.pageX - event.pageX;
    }
    else {
        this.left += event.pageX - this.status.oldEvent.pageX;
    }
    // 完事之后记得把当前鼠标的位置赋值给oldEvent
    console.log(event.offsetX)
    if(event.offsetX<0){
        this.mouseUp(event) 
    }
    this.status.oldEvent = event;
    // 最后再把left赋值给容器
    this.setContainerPos()
    console.log('鼠标移动了');
}
function mouseUp(event){
    if(this.status.state != 1) return;
    this.status.state = 0;  // 恢复默认状态
    // 鼠标抬起时候，和按下的坐标作比对，用来判断是向左滑动还是向右滑动
    // 向左滑动那么就是要显示下一个滑块，所以index要加1
    if (event.pageX < this.status.startEvent.pageX) {
        this.status.index ++;
    }
    else {
        this.status.index --;
    }
    if (this.status.index < 0) {
        this.status.index = 0;
    }
    else if (this.status.index > this.pics.length - 1) {
        this.status.index = this.pics.length - 1;
    }

    // 追加一个move样式
    this.isMove = true
    this.left = 0 - this.itemWidth * this.status.index;
    this.setContainerPos()
    console.log('鼠标抬起了');
    this.autoPlay()
}

function resetMove(){
    this.isMove =false
}

export default {
    name:"Dswipper",
    props:{ 
        pics:{
            type:  Array,
            default: ()=>[require("../../assets/img/avater.png"),require("../../assets/img/avater.png"), require("../../assets/img/avater.png"),]
        },
    },
    data(){
        return {
            status, itemWidth, left, isMove,timer
        }
    },
    methods:{
        mouseDown,mouseUp,mouseMove, setContainerPos, resetMove, autoPlay
    },
    mounted(){
        this.autoPlay();
    }
}
</script>