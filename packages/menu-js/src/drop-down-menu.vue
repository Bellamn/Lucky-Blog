<template>
    <div class="d-menu">
      <div class="d-menu__title"> 
        <span class="d-menu__title-words" > {{menu_title}} </span>
        <span class="d-menu__title-icon"></span>
      </div>
      <div class="d-menu__more">
        <nav v-for= "(item, idx) in menu_more" :key="idx" class="d-menu__wrap">
            <span class = "d-menu__more-icon" :class="[item[0]]"></span>
            <a class = "d-menu__more-link" href="#"> {{item[1]}} </a>   
        </nav> 
      </div>
    </div>
</template>  

<script>
export default {
  name:"Dmenu",
  props:{
    menu_more:{
      type: Array,
      default: ()=>[["w-icon-smile", "item1"],["w-icon-smile", "item2"]]
    },
    menu_title:{
      type: String,
      default: "title"
    }
  }
}
</script>