<template>
  <div id="test" >
    <div>
      <header>
        <ul>
          <li v-for="(liListItem) in liList" :key="liListItem.key">
            <router-link :to="liListItem.router">{{liListItem.text}}</router-link>
          </li>
        </ul>
      </header>
    </div>
    <!-- <div>
      <div>
        <button>
          <img src="" alt="">
        </button>
        <p>TAIWAN TRAVEL</p>
      </div>
      <div>
        <button>
          <img src="" alt="">
        </button>
        <div>
          <img src="" alt="">
          <ul>
            <li v-for="(liListItem) in liList" :key="liListItem.key">
              <router-link :to="liListItem.router">{{liListItem.text}}</router-link>
            </li>
          </ul>
          <div>
            <button><img src="" alt=""></button>
            <button><img src="" alt=""></button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      liList: [
        {text: 'TAIWAN TRAVEL', key: 'liList1', router: '/'},
        {text: '旅遊情報', key: 'liList2', router: '/'},
        {text: '景點查詢', key: 'liList3', router: '/SearchView'},
        {text: '美食推薦', key: 'liList4', router: '/FoodRecommendation'},
        {text: '旅宿資訊', key: 'liList5', router: '/HotelInfo'},
        {text: '節慶活動', key: 'liList6', router: '/d'}
      ]
    }
  }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
ul {
    list-style-type: none;
    padding: 2.5% 0;
  }
  li {
    display: inline-block;
    margin: 0 3.4% 0 0;
  }
  li:nth-child(1){
    margin-left: 10%;
    margin-right: 28%;
    font-size: 18px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
</style>
