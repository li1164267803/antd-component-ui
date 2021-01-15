<cn>
#### 说明
<table>
  <tr>
    <th>属性</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  <tr>
  <tr>
    <td>@handle</td>
    <td>横幅右边文字点击回调事件</td>
    <td>function</td>
    <td>-</td>
  <tr>
  <tr>
    <td>place</td>
    <td>横幅位置，可选值['bottom','top']</td>
    <td>string</td>
    <td>bottom</td>
  <tr>
  <tr>
    <td>title</td>
    <td>横幅标题(横幅左边文字)</td>
    <td>string</td>
    <td>-</td>
  <tr>
  <tr>
    <td>handleName</td>
    <td>横幅事件名称(横幅右边文字)</td>
    <td>string</td>
    <td>-</td>
  <tr>
  <tr>
    <td>content(slot)</td>
    <td>横幅中心内容(使用slot语法)</td>
    <td>slot</td>
    <td>-</td>
  <tr>
  <tr>
    <td>bgColor</td>
    <td>横幅背景颜色</td>
    <td>string</td>
    <td><span class="bg">#00be7b</span></td>
  <tr>
</table>
<style>
td:nth-child(3){
  color: #c41d7f;
}
.bg{
  background-color:#00be7b;
  color:white;
  padding:4px 8px;
  border-radius: 2px;
}
</style>
</cn>

<us>
#### intro
todo
</us>

```tpl
<template>
  <div>
    <h3>文字多时，滑上显示</h3>
    <div class="axx-tooltip-box">
      <axx-tooltip
        title="鼠标滑上使用 tooltip 显示全部内容 文字少时，没有裁切，鼠标滑上不显示 tooltip 希文出品 必属精品234"
      />
    </div>

    <h3>文字少时 滑上不展示</h3>
    <div class="axx-tooltip-box">
      <axx-tooltip title="鼠标滑上使用 tooltip 显示全部内容 文字少时" />
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show:false,
        place:'top'
      }
    },
    mounted(){
    }
  }
</script>
<style>
  .axx-tooltip-box {
    width: 200px;
    border: 1px solid #000;
    height: 50px;
  }
</style>
```
