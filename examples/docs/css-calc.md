
# 宽高比
----
### 目标
实现一个div垂直居中, 其距离屏幕左右两边各10px, 其高度始终是宽度的50%。同时div中有一个文字A，文字需要水平垂直居中。




<div class="dome-alert demo-block">
    <div class="box">A</div>
</div>

<style>
    .box {
    margin-left: 10px;
    /* vw是视口的宽度， 1vw代表1%的视口宽度 */
    width: calc(50vw - 20px);
    /* 宽度的一半 */
    height: calc(25vw - 10px);
    background: red;
    /* 下面两行让块垂直居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    }
</style>


::: demo
```html

<div class="dome-alert demo-block">
    <div class="box">A</div>
</div>

<style>
    .box {
    margin-left: 10px;
    /* vw是视口的宽度， 1vw代表1%的视口宽度 */
    width: calc(50vw - 20px);
    /* 宽度的一半 */
    height: calc(25vw - 10px);
    background: red;
    /* 下面两行让块垂直居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    }
</style>

```
:::

