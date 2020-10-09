<template>
    <div class="d-calendar">
        <div class="d-calendar__header">
            <span class="d-calendar__pre" @click="clickPre">pre</span>
            <span class="d-calendar__title">{{ time.year }}年{{ time.month }}月</span>
            <span class="d-calendar__next" @click="clickNext">next</span>
        </div>
        <div class="d-calendar__weekdays">
            <span v-for="(item, indx) in week" :key=indx> {{item}} </span>
        </div>
        <div class="d-calendar__days">
            <li v-for="(day, i) in days" :key="i"
            v-bind:class="{'d-calendar__day':true, 'd-calendar__currentDay': day == currentTime.day && time.year == currentTime.year && time.month == currentTime.month}">
              <span>
            {{ day }}
            </span></li>
        </div>
    </div>
</template>

<script>
let currentTime = {
    "year":"",
    "month":"",
    "day":""
}
let time = {
    "year":"",
    "month":"",
    "day":""
}
let days = []
function getCurrentTime(){
    let timeObj = new Date()
    this.currentTime.year = timeObj.getFullYear()
    this.currentTime.month = timeObj.getMonth() + 1
    this.currentTime.day = timeObj.getDate()
    this.time.year = timeObj.getFullYear()
    this.time.month = timeObj.getMonth() + 1
    this.time.day = timeObj.getDate()
    console.log(this.time)
}
function getDays(year, month){
    let str = year + "-" + month;
    let preYear  = year;
    let preMonth = month-1;
    if(preMonth < 1){
        preYear--;
        preMonth = 12
    }
    let preDayNum = this.getDayNum(preYear, preMonth)
    let curDayNum = this.getDayNum(year,month)
    let currentTime = new Date(str)
    let firstDay = currentTime.getDay()
    this.days.length = 0
    for(let i=0; i< firstDay; i++){
        this.days.unshift(preDayNum--)
    }
    for(let i=1; i<=curDayNum;i++){
        this.days.push(i)
    }
    for(let i=1; this.days.length<42;i++){
        this.days.push(i)
    }
}
// 某年某月有多少天
function getDayNum(year, month){
    let nextYear = year;
    let nexMonth = month+1;
    if(nexMonth > 12){
        nextYear++;
        nexMonth = 1;
    }
    let str = year + "-" + month;
    let nextStr = nextYear + "-" + nexMonth
    let currentTime = new Date(str)
    let nextTime = new Date(nextStr)
    let dayNumer = (nextTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24)
    return parseInt(dayNumer)
}
function clickPre(){
    this.time.month--;
    if(this.time.month < 1){
        this.time.year--;
        this.time.month = 12
    }
    this.getDays(this.time.year, this.time.month)
}
function clickNext(){
    this.time.month++;
    if(this.time.month > 12){
        this.time.year++;
        this.time.month = 1
    }
    this.getDays(this.time.year, this.time.month)
}
export default {
    name:"Dcalendar",
    data(){
        return{
            time, currentTime, days, week:['日','一', '二','三','四','五','六']
        }
    },
    methods:{
        clickPre,clickNext, getDays, getCurrentTime, getDayNum
    },
    created(){
        this.getCurrentTime()
        this.getDays(this.currentTime.year, this.currentTime.month)
    }
    
}
</script>>
