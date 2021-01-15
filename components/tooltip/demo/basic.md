<cn>
#### 说明
鼠标滑上使用 tooltip 显示全部内容 文字少时，没有裁切，鼠标滑上不显示 tooltip 
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
