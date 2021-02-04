<cn>
#### 基本用法
说明-订单组件提供了订单类组件的结构框架
</cn>

```tpl
<template>
  <div>
    <a-growth-order :orderConfig="orderConfig" :orderData="orderData">
      <template v-slot:header="scoped">
        <div class="order-title" style="font-size:12px;">
          <div>订单编号：{{orderData.orderId}}</div>
          <div style="color: #A3B2C2;font-weight: 400;">下单日期：{{orderData.payTime}}</div>
        </div>
      </template>
      <a-growth-order-item class="body-info-item" v-for="item in orderData.mallOrderDetailVos" :key="item.id" :info="item">
        <img :src="item.picUrl" />
        <div class="info-title">
          <div class="name">{{item.name}}</div>
          <div class="mallSkuName">规格：{{item.mallSkuName}}</div>
        </div>
      </a-growth-order-item>
    </a-growth-order>
  </div>
</template>
<script>
const orderConfig = {
  header: {
    type: "header",
    title: "订单头部条",
    key: "header",
    slotName: "header"
  },
  body: [
    // {
    //   title: "商品名称",
    //   key: "mallOrderDetailVos",
    //   className: "my-order-info",
    //   slotName: "book",
    //   flag:
    // },
    {
      width: 150,
      title: "订单金额",
      key: "costAidou"
    },
    {
      width: 200,
      title: "区域ID",
      key: "areaId"
    }
  ]
}
const orderData = {
          id: 588089,
          orderId: '20072310153698968836',
          parentOrderId: '',
          orderType: 1,
          status: 3,
          consigneeName: '讲话稿',
          consigneePhone: '13244444444',
          consigneeAddress: '四川省成都市金牛区 星科北街60号走遍天下4楼',
          areaId: 10545763,
          consumeAmount: 69.5,
          freight: 11.0,
          costAidou: 80.5,
          costRmb: 0.0,
          payStatus: 1,
          payTime: '2020-07-23 10:16:03',
          syncStatus: 3,
          wmsType: 1,
          mailTotalCount: 0,
          originLogistics:
            '{"data":[{"context":"已取消","time":"2020-07-23 11:55:44"},{"context":"订单支付成功","time":"2020-07-23 10:16:03"},{"context":"下单成功","time":"2020-07-23 10:15:36"}]}',
          expressType: 2,
          expressCode: 'shentong',
          institutionId: 28,
          creatorId: 2495037,
          createTime: '2020-07-23 10:15:37',
          updateTime: '2020-07-23 11:55:44',
          remark: '',
          salesId: '',
          salesAgreementId: '',
          channelId: 1,
          testIns: true,
          originOrderId: '',
          abandon: 0,
          type: 2,
          hangOrderType: 0,
          upOrderId: '',
          swOrderId: '',
          discountAmount: 0.0,
          xwRefundAmount: 69.5,
          couponTotalAmount: 0.0,
          payRemainTime: '',
          payAmount: 80.5,
          actualAmount: 80.5,
          institutionName: '',
          cancelShow: false,
          statusShow: '已取消',
          wmsName: '速达',
          waybillNum: '',
          expressTypeDis: '普通快递',
          virtual: false,
          goodsPieces: 2,
          goodsWeight: 1.7,
          mallOrderDetailVos: [
            {
              id: 2943818,
              orderId: '20072310153698968836',
              mallItemId: 4293,
              name: '【高斯数学●小学】能力提高体系-秋季（北师版）（学习包）',
              mallSkuId: 8327,
              mallSkuName: '一阶B',
              publishType: 1,
              categoryCode: '1027',
              num: 1,
              price: 69.5,
              barCode: 'XSBSTG119QSJ',
              weight: 1.56,
              incomeRuleId: 14,
              optionItem: 78,
              optionTime: '2020-07-23 10:15:37',
              optioned: false,
              optionDays: 10,
              periodStatistics: '0110',
              payType: 1,
              partSign: 2,
              present: false,
              gift: 1,
              saleOrg: '10201',
              xRefundAmount: 69.5,
              sellingPrice: 69.5,
              marketingSnapshotId: 0,
              discountPrice: 69.5,
              aDetailId: 0,
              originDetailId: 0,
              couponId: 0,
              skuLineNo: 1,
              applyShow: false,
              total: 69.5,
              mallOrderCombinationDetailVos: '',
              picUrl:
                'https://q-independent.aixuexi.com/B:1007:K/1594224000/ab6a362c71ec40718dd432c4701ca4ea.png',
              form: '',
              threePack: false,
              intendAidou: 695000,
              intendRmb: 0,
              preSellSku: false,
              freeFreight: false,
              sendNum: '',
              stockNum: '',
              presentDetailVos: '',
              shadowDetailVo: '',
              marketingId: '',
              refundIncome: false,
            },
            {
              id: 2943821,
              orderId: '20072310153698968836',
              mallItemId: 31248,
              name: '2020暑假小学三阶课盒子',
              mallSkuId: 48471,
              mallSkuName: '统一版',
              publishType: 1,
              categoryCode: '1026',
              num: 1,
              price: 0.0,
              barCode: '3JKHZ',
              weight: 0.14,
              incomeRuleId: 1,
              optionItem: 16,
              optionTime: '2020-07-23 10:15:37',
              optioned: true,
              optionDays: 0,
              periodStatistics: '',
              payType: 1,
              partSign: 0,
              present: true,
              gift: 0,
              saleOrg: '10201',
              xRefundAmount: 0.0,
              sellingPrice: 0.0,
              marketingSnapshotId: 0,
              discountPrice: 0.0,
              aDetailId: 0,
              originDetailId: 0,
              couponId: 0,
              skuLineNo: 1,
              applyShow: false,
              total: 0.0,
              mallOrderCombinationDetailVos: '',
              picUrl:
                'https://q-independent.aixuexi.com/B:1007:K/1588176000/3d91b94ccc584df0a4d6627908b6d43a.jpg',
              form: '',
              threePack: false,
              intendAidou: 0,
              intendRmb: 0,
              preSellSku: false,
              freeFreight: false,
              sendNum: '',
              stockNum: '',
              presentDetailVos: '',
              shadowDetailVo: '',
              marketingId: '',
              refundIncome: false,
            },
          ],
          singleLineOrderDetailVos: '',
          easMallOrderDetailVos: '',
          address: '',
          warehouseName: '',
          warehouseTips: '',
          expressPhone: '',
          expressName: '',
          subOrderList: '',
          intendAidou: 695011,
          intendRmb: 0,
          showExpresss: false,
          canBuyAgain: true,
          autoDelivery: false,
          singleDetailMap: '',
          singleSkuIdDetailMap: '',
          replaceDetailVos: '',
          wmsDeliveryOrderDetailVos: '',
          combinationPriceMap: '',
          hourPackOrder: false,
          refundAmount: 80.5,
          preDiscountTotalAmount: 80.5,
          applyRefundIncome: false,
          bOrderId: '20072310153699311295',
          learningPackOrder: true,
          learningPackTip: '',
          subOrders: '',
          mallOrderCouponRecords: '',
        };
  import Vue from "vue";
  export default {
    name: "demo",
    data() {
      return {
        orderConfig,
        orderData
      };
    },
    methods:{

    }
  }
</script>
<style scoped>
.order-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body-info-item {
  display: flex;
}

.body-info-item img {
  width: 100px;
  height: 100px;
  margin-right: 16px;
}
.name {
  color: #474D6B;
  font-size: 14px;
}
.mallSkuName {
  color: #A3B2C2;
  font-size: 12px;
  margin-top: 13px;
}
</style>
```
