<template>
  <div>
    <!-- 控件介绍 -->
    <div class="card_item name_title">
      <h3>开关控件</h3>
      <p>
      </p>
    </div>
    <!-- 控件代码 -->
    <div class="card_item">
      <h3>Usage</h3>
       <n22-highlight lang="html">
        &lt;n22-switch :disabled = 'disabled'
                       :value.sync="value"&gt;
  &lt;/n22-switch&gt;
        </n22-highlight>
        <br>
        <n22-highlight lang="javascript">
             // 塞入默认值
  setValue () {
    this.value = this.value == 'f' ? 'm' : 'f'
  },
        </n22-highlight>
    </div>
    <!-- 参数介绍 -->
    <div class="card_item" v-show="propList.length > 0">
      <h3>Input Properties</h3>
      <div class="table_box">
        <div class="header box_row">
          <div class="box_col">Attr</div>
          <div class="box_col">Type</div>
          <div class="box_col">Details</div>
          <div class="box_col">Default</div>
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in propList" :key="index" class="box_row">
          <div class="box_col">{{item.attr}}</div>
          <div class="box_col">{{item.type}}</div>
          <div class="box_col">{{item.details}}</div>
          <div class="box_col">{{item.default}}</div>
        </div>
      </div>
    </div>

    <!--事件 -->
     <div class="card_item" v-show="eventList.length > 0">
      <h3>Event</h3>
      <div class="table_box">
        <div class="header box_row">
          <div class="box_col">Name</div>
          <div class="box_col">Detail</div>
          <div class="box_col">Args</div>
        </div>
        <!-- 内容列表 -->
        <div v-for="(item, index) in eventList" :key="index" class="box_row">
          <div class="box_col">{{item.name}}</div>
          <div class="box_col">{{item.detail}}</div>
          <div class="box_col">{{item.args}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      // prop参数
      propList: [
        {attr: 'value', type: 'String', details: '默认值', default: 'm'},
        {attr: 'unSelectValue', type: 'String', details: '开关在左侧默认值', default: 'f'},
        {attr: 'selectValue', type: 'String', details: '开关在右侧默认值', default: 'm'},
        {attr: 'disabled', type: 'Boolean', details: '是否禁用状态', default: 'false'}
      ],
      eventList: [
        {name: 'change', detail: '点击切换时候触发', args: '切换值'}
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang='scss'>
</style>

