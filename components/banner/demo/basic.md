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
    <a-wolf-banner v-show="show" @handle="handle" :bgColor="place==='top'?'orange':undefined" :place="place" title="上次备课到" handleName="继续备课">
      <template slot="content">
        <a-wolf-icon type="iconearPhone" />2019高斯数学一阶A能力提高(青岛54版) 第1讲
      </template>
    </a-wolf-banner>
    <a-wolf-button type="primary" @click="showBanner('bottom')">底部横幅</a-wolf-button>
    <a-wolf-button type="primary" @click="showBanner('top')">顶部横幅</a-wolf-button>
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
    methods:{
      handle(){
        alert('跳转至继续备课')
      },
      showBanner(place){
        if(this.place === place){
          this.show = !this.show;
        }else{
          this.place = place;
          this.show = true;
        }
      }
    },
    mounted(){
    }
  }
</script>
<style>

</style>
```
