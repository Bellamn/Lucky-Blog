
# 拍摄上传视频
----



### 下拉菜单
<div class="dome-alert demo-block">
    <Dcalendar><Dcalendar>
</div>

::: demo
```html

<div>
  <Dmenu></Dmenu>
</div>

```
:::


### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|menu_title  |	标题，必选参数。                     |	string   |	—           |title      |
|menu_more |	下拉标题内容                    |	array [[string,string]]    	| —             |[["w-icon-smile", "item1"],["w-icon-smile", "item2"]]	 |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |
