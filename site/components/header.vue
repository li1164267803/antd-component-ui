<script>
import { isZhCN } from '../util';
import sortBy from 'lodash/sortBy';
import packageInfo from '../../package.json';
import logo from '../logo.svg';
import antDesignVue from '../ant-design-vue.svg';

export default {
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    handleClick() {
      const name = this.name;
      const path = this.$route.path;
      const newName = isZhCN(name) ? name.replace(/-cn\/?$/, '') : `${name}-cn`;
      this.$router.push({
        path: path.replace(name, newName),
      });
      this.$i18n.locale = isZhCN(name) ? 'en-US' : 'zh-CN';
    },
    onSelect(val) {
      this.$router.push(val);
      this.value = val;
    },
  },
  render() {
    const name = this.name;
    const searchData = sortBy(this.searchData, ['title']);
    const isCN = isZhCN(name);
    return (
      <header id="header">
        <a-row>
          <a-col class="header-left" xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <router-link to={{ path: '/' }} id="logo">
              <img alt="logo" height="32" src={logo} />
              <span id="logo-word">Growth Antd Vue</span>
            </router-link>
            <a-button
              ghost
              size="small"
              onClick={this.handleClick}
              class="header-lang-button"
              key="lang-button"
            >
              {isCN ? 'English' : '中文'}
            </a-button>
          </a-col>
        </a-row>
      </header>
    );
  },
};
</script>
