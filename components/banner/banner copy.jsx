// import { getOptionProps, getListeners } from 'ant-design-vue/es/_util/props-util';

export default {
  name: 'AWolfBanner',
  render(h) {
    const self = this;
    function handle() {
      self.$emit('handle');
    }
    const { title, handleName, place = 'bottom', bgColor = '#00be7b' } = this.$attrs;
    const { content } = this.$scopedSlots;
    const places = ['bottom', 'top'];
    if (content) {
      console.error('wolf-banner组件必须包含content节点22222222222');
    }

    const style = {};
    if (places.includes(place)) {
      style[place] = '0';
    } else {
      style['bottom'] = '0';
      console.error("place可选值['bottom','top']");
    }
    style['background-color'] = bgColor;

    return (
      <div class="wolf-banner" style={style}>
        <div class="title flex-center">{title}</div>
        <div class="content flex-center">{content()}</div>
        <div class="handle flex-center" onClick={handle}>
          {handleName}
        </div>
      </div>
    );
  },
};
