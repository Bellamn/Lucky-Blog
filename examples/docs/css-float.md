
# 品字布局
----
### 目标



<div class="dome-alert demo-block">
<div id="ping-wrapper">
    <div class="div-1 ping">1</div>
    <div class="div-2 ping">2</div>
    <div class="div-3 ping">3</div>
</div>
</div>

<style>
    .ping {
    width: 50%;
    height: 50px;
    font-size: 40px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    }

    .div-1 {
    background: red;
    margin: 0 auto 0;
    }

    .div-2 {
    background: green;
    float: left;
    width: 50%;
    }

    .div-3 {
    background: blue;
    float: left;
    width: 50%;
    }
    #ping-wrapper::after{
    content: "";
    display: block; 
    clear: both; 
    }
</style>


::: demo
```html

<div class="dome-alert demo-block">
<div id="ping-wrapper">
    <div class="div-1 ping">1</div>
    <div class="div-2 ping">2</div>
    <div class="div-3 ping">3</div>
</div>
</div>

<style>
    .ping {
    width: 50%;
    height: 50px;
    font-size: 40px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    }

    .div-1 {
    background: red;
    margin: 0 auto 0;
    }

    .div-2 {
    background: green;
    float: left;
    width: 50%;
    }

    .div-3 {
    background: blue;
    float: left;
    width: 50%;
    }
    #ping-wrapper::after{
    content: "";
    display: block; 
    clear: both; 
    }
</style>


```
:::

## float
+ 浮动元素会生成一个块级框，而不论它本身是何种元素。
+ CSS 的 Float（浮动）使元素脱离文档流，按照指定的方向（左或右发生移动），直到它的外边缘碰到包含框或另一个浮动框的边框为止。
+ 浮动以后块级元素在同一行显示，行内元素可以设置宽高.
+ 浮动元素会造成父元素高度塌陷。

## 浮动对周围元素布局影响很大，周围元素需要清楚浮动
+ 明确设置父标签合适的宽度，高度，前提必须确定子布局的高度，来计算父布局的合适高度，包裹住子布局。
+ 受影响的元素加clear属性 clear:left | right | both;
+ 这种情况下，父布局不能设置高度。父级标签的样式里面加: overflow:hidden;
+ 在最后一个浮动的盒子的后面，新添加一个标签。然后设置clear清除浮动。这种情况下，父布局不能设置高度。
+ 为父标签添加伪类After,设置空的内容，并且使用clear:both;这种情况下，父布局不能设置高度。