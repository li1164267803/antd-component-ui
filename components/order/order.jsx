import OrderItem from './orderItem';
export default {
  OrderItem,
  name: 'AWolfOrder',
  props: {
    orderConfig: {
      type: Object,
      required: true,
      default: () => {},
    },
    orderData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
  render() {
    const { orderConfig, orderData, $scopedSlots } = this;
    return (
      <table class={['growth-order']}>
        <tr>
          <th colSpan={orderConfig.body.length + 1}>
            <div class={['growth-order-header']}>
              {orderConfig.header &&
                orderConfig.header.slotName &&
                $scopedSlots[orderConfig.header.slotName]({
                  scoped: orderConfig.header,
                })}
            </div>
          </th>
        </tr>
        <tr>
          <td>
            <div class="growth-order-infos">
              {$scopedSlots.default({
                scoped: {},
              })}
            </div>
          </td>
          {this.orderConfig.body.map(item => {
            const __width = item.width;
            if (item.slotName) {
              return (
                <td style={{ width: __width + 'px' }}>
                  <div class="cell">
                    {$scopedSlots[item.slotName] &&
                      typeof $scopedSlots[item.slotName] === 'function' &&
                      $scopedSlots[item.slotName]({
                        scoped: item,
                      })}
                  </div>
                </td>
              );
            } else {
              return (
                <td style={{ width: __width + 'px' }}>
                  <div class="cell">{orderData[item.key]}</div>
                </td>
              );
            }
          })}
        </tr>
      </table>
    );
  },
};
