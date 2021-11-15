<template>
  <div>
    <nav>
      <ul>
        <li v-for="(parentMsgItem) in parentMsg" :key="parentMsgItem.key">
          <a :class="parentMsgItem.class">{{parentMsgItem.text}}</a>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'breadcrumbs',
  props: ['parentMsg'],
  data () {
    return {
      Breadcrumbs: [
        {text: 'TAIWAN TRAVEL', key: 'Breadcrumbs1', router: ''},
        {text: '旅遊情報', key: 'Breadcrumbs2', router: '/a'},
        {text: '景點查詢', key: 'Breadcrumbs3', router: '/SearchView'},
        {text: '美食推薦', key: 'Breadcrumbs4', router: '/b'},
        {text: '旅宿資訊', key: 'Breadcrumbs5', router: '/c'},
        {text: '節慶活動', key: 'Breadcrumbs6', router: '/d'}
      ]
    }
  }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    padding: 2% 0% 2% 10%;
  }
  li {
    display: inline-block;
    margin-right: 10px;
  }
  a {
    color: #646464;
    text-decoration: none;
  }
  a.active{
    color: #7BAEBE;
  }
</style>
