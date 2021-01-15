<hr class="green" />

<!-- 官方文档： <a target="_blank" href=""></a> -->

以下为 API

## API

**下面只列出了在本插件中二次封装添加的新字段，和部分原有 antd-vue 中 tooltip 部分默认的配置**  
**具体的 antd-vue 中 tooltip api 配置请点击下面链接，查看官方文档**

[https://www.antdv.com/components/tooltip-cn/#API](https://www.antdv.com/components/tooltip-cn/#API)

| 参数             | 说明                    | 类型     | 默认值           |
| ---------------- | ----------------------- | -------- | ---------------- |
| title            | 需要 Tooltip 显示的文本 | _string_ | -                |
| detail           | 初始值                  | _object_ | -                |
| btnText          | 按钮文本                | _string_ | -                |
| cuttingNum       | 显示几行后开始裁切      | _Number_ | 2                |
| placement        | 气泡框位置              | _string_ | rightTop         |
| overlayClassName | 卡片类名                | _string_ | xiwen-preinstall |

#### 注：

- 本插件相当于是对 antd-vue 组件 tooltip 的二次封装，支持 tooltip 原生组件的 **所有 api 功能**
- 适用于在表格中展示，或者是正常的页面循环
- 但是如果想要调用原生 ui 组件的实例方法，通知 ref 绑定获取到的并不是 antd 的 tooltip 组件，如果想要调用 tooltip 的原生方法，**需要传递 forward-ref 参数绑定**

```html
<template>
  <axx-tooltip @forward-ref="tooltip" title="希文出品"></axx-tooltip>
</template>

<script>
  // 即可调用原生方法
  this.$refs.tooltip.visibleChange(callback);
</script>
```