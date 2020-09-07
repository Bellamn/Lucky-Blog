
# 圣杯布局
----
要做到左右宽度固定，中间宽度自适应。
## flex实现


<div class="dome-alert demo-block">
    <div class="demo-header">这里是头部</div>
    <div class="demo-container">
        <div class="demo-left">左边</div>
        <div class="demo-middle">中间部分</div>
        <div class="demo-right">右边</div>
    </div>
    <div class="demo-footer">这里是底部</div>
</div>

<style scoped>
    .demo-header,.demo-footer{
        height:40px;
        width:100%;
        background:red;
    }
    .demo-container{
        display: flex;
        height:40px;
        width:100%
    }
    .demo-middle{
        flex: 1;
        background:yellow;
    }
    .demo-left{
        width:200px;
        background:pink;
    }
    .demo-right{
        background: aqua;
        width:300px;
    }
</style>


::: demo
```html

<div class="dome-alert demo-block">
    <div class="demo-header">这里是头部</div>
    <div class="demo-container">
        <div class="demo-left">左边</div>
        <div class="demo-middle">中间部分</div>
        <div class="demo-right">右边</div>
    </div>
    <div class="demo-footer">这里是底部</div>
</div>

<style scoped>
    .demo-header,.demo-footer{
        height:40px;
        width:100%;
        background:red;
    }
    .demo-container{
        display: flex;
        height:40px;
        width:100%
    }
    .demo-middle{
        flex: 1;
        background:yellow;
    }
    .demo-left{
        width:200px;
        background:pink;
    }
    .demo-right{
        background: aqua;
        width:300px;
    }
</style>

```
:::

## grid 实现
<div class="dome-alert demo-block" style="display:grid;">
    <div id="header">header</div>
    <div id="left">left</div>
    <div id="middle">middle</div>
    <div id="right">right</div>     
    <div id="footer">footer</footer></div>
</div>

<style scoped>
    #header{
        background: red;
        grid-row:1;
        grid-column:1/5;
    }
        
    #left{
        grid-row:2;
        grid-column:1/2;
        background: orange;
    }
    #right{
        grid-row:2;
        grid-column:4/5;
        background: cadetblue;
    }
    #middle{
        grid-row:2;
        grid-column:2/4;
        background: rebeccapurple
    }
    #footer{
        background: gold;
        grid-row:3;
        grid-column:1/5;
    }
</style>


::: demo
```html

<div class="dome-alert demo-block" style="display:grid;">
    <div id="header">header</div>
    <div id="left">left</div>
    <div id="middle">middle</div>
    <div id="right">right</div>     
    <div id="footer">footer</footer></div>
</div>

<style scoped>
    #header{
        background: red;
        grid-row:1;
        grid-column:1/5;
    }
        
    #left{
        grid-row:2;
        grid-column:1/2;
        background: orange;
    }
    #right{
        grid-row:2;
        grid-column:4/5;
        background: cadetblue;
    }
    #middle{
        grid-row:2;
        grid-column:2/4;
        background: rebeccapurple
    }
    #footer{
        background: gold;
        grid-row:3;
        grid-column:1/5;
    }
</style>

```
:::