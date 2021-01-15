export default {
  name: 'AWolfOrderItem',
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {},
    },
    // width: {
    //   type: Number,
    //   required: true,
    //   default: 300,
    // },
  },
  data() {
    return {};
  },
  methods: {},
  render() {
    const { info, $scopedSlots } = this;
    return <div class={['wolf-order-item']}>{info && $scopedSlots.default({ scoped: info })}</div>;
  },
};
