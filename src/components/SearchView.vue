<template>
  <div class="searchView">
    <Menu></Menu>
    <div class="topViewImg"></div>
    <Breadcrumbs :parent-msg='msg'></Breadcrumbs>
    <div class="hotView">
      <h5>熱門景點</h5>
      <!-- <div class="hotViewContainer">
        <div class="hotViewContainer_inner">
          <div class="hotViewImg" v-for="(hotViewImgUrlItem) in hotViewImgUrl[0]" :key="hotViewImgUrlItem.key">
            <img :src="hotViewImgUrlItem.url" alt="">
          </div>
          <button>
            左
          </button>
          <button>
            右邊
          </button>
        </div>
      </div> -->
    </div>
    <div class="searchContain">
      <div class="search_left">
        <div class="searchKey">
          <input type="text" placeholder="關鍵字查詢">
          <button><img src="../assets/search.svg" alt=""></button>
        </div>
        <div class="searchContent">
          <p>篩選內容</p>
          <h6>地區/縣市</h6>
          <div class="selectCity">
            <select name="" id="">
              <option value="">離島地區</option>
            </select>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </div>
          <h6>類別</h6>
          <div class="searchSort" v-for="(sortListItem) in sortList" :key="sortListItem.key">
            <input type="radio" name="searchSort" :id="sortListItem.id" :value="sortListItem.id">
            <label :for="sortListItem.id">
              <span></span><span></span><span>{{sortListItem.text}}</span>
            </label>
          </div>
          <div class="search">
            <button>搜尋</button>
          </div>
        </div>
      </div>
      <div class="search_right">
        <div class="popular">
          <button class="btn_popular">
            <img src="../assets/popular.svg" alt=""><span>排序：熱門度</span>
          </button>
        </div>
        <a href="#/ViewDetails" class="viewIntroduce" v-for="(hotViewImgUrlItem, index) in hotViewImgUrl[0]" :key="hotViewImgUrlItem.key" @click="viewName(index)">
          <div class="viewImg"><img :src="hotViewImgUrlItem.url" alt=""></div>
          <div class="viewDetail">
            <div class="viewName">
              <h6>{{hotViewImgUrlItem.name}}</h6><span>{{hotViewImgUrlItem.class}}</span>
            </div>
            <p>{{hotViewImgUrlItem.description}}</p>
            <div class="ps">
              <div class="site">
                <img src="../assets/site.svg" alt=""><span>{{hotViewImgUrlItem.address}}</span>
              </div>
              <div class="time">
                <img src="../assets/time.svg" alt=""><span>{{hotViewImgUrlItem.openTime}}</span>
              </div>
              <div class="click">
                <img src="../assets/click.svg" alt=""><span>1293</span>
              </div>
            </div>
          </div>
      </a>

      <div class="viewPages">
        <button></button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>7</li>
        </ul>
        <button></button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import Breadcrumbs from './Breadcrumbs'
import $ from 'jquery'
// import * as axios from 'axios'

export default {
  components: {
    Menu,
    Breadcrumbs
  },
  data () {
    return {
      viewNameMsg: '',
      msg: [
        {text: '首頁', class: '', key: 'Breadcrumbs1'},
        {text: '>', class: '', key: 'Breadcrumbs2'},
        {text: '景點查詢', class: 'active', key: 'Breadcrumbs3'}
      ],
      hotViewImgUrl: [],
      sortList: [
        {text: '全部', id: 'all', key: 'sortList1'},
        {text: '自然風景', id: 'nature', key: 'sortList2'},
        {text: '歷史文化', id: 'history', key: 'sortList3'},
        {text: '觀光遊憩', id: 'sightseeing', key: 'sortList4'},
        {text: '宗教巡禮', id: 'religion', key: 'sortList5'},
        {text: '夜市商圈', id: 'businessDistrict', key: 'sortList6'},
        {text: '文藝之旅', id: 'art', key: 'sortList7'}
      ]
    }
  },
  methods: {
    viewName (index) {
      console.log(JSON.stringify(this.hotViewImgUrl[0][index].name))
      this.viewNameMsg = JSON.stringify(this.hotViewImgUrl[0][index].name)
    }
  },
  beforeMount () {
    this.hotViewImgUrl.push([{url: 'https://www.eastcoast-nsa.gov.tw/image/419/640x480', name: '紫坪', class: '不分類', address: '臺東縣綠島鄉', openTime: '全天候開放', description: '紫坪位在綠島最南方，從附近的步道，可通往海岸邊的潟湖。此處是由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。', key: 'img1'}, {url: 'https://www.eastcoast-nsa.gov.tw/image/29072/640x480', name: '帆船鼻大草原', class: '不分類', address: '臺東縣綠島鄉', openTime: '全天候開放', description: '帆船鼻位於綠島東南角，有「綠島地毯」之稱，可由朝日溫泉售票口旁邊的小徑沿步道而上。由於地形突出，地勢又高出四周，屬東北季季風可長驅直入的衝風帶；再加上後天的放牧，遂形成低草原景觀。草原邊緣懸崖可以俯視朝日溫泉與海參坪，也是綠島居高臨下欣賞日出、月昇，沐浴海風的最佳景點之一，每年四、五月可觀賞到南十字星座丰采，每年春秋候更是賞鳥的極佳去處。', key: 'img2'}, {url: 'https://www.eastcoast-nsa.gov.tw/image/29064/640x480', name: '哈巴狗與睡美人岩', class: '不分類', address: '臺東縣綠島鄉', openTime: '全天候開放', description: '睡美人岩與哈巴狗岩靜臥在海參坪上，是綠島最著名的景點之一，從小長城步道遠眺，可以見到睡美人靜靜地躺臥在海面上，白色的沙灘是她秀麗的長髮，而垂著長耳朵的哈巴狗靜臥在不遠處。天氣晴朗時，從遠處眺望哈巴狗與睡美人，可以有許多有趣的「錯位」拍攝玩法！堪稱是綠島最著名的景點。', key: 'img3'}, {url: 'https://www.eastcoast-nsa.gov.tw/image/29042/640x480', name: '柴口浮潛區', class: '不分類', address: '臺東縣綠島鄉', openTime: '全天候開放', description: '早期稱為柵口，後來更名為「柴口」，為綠島主要浮潛區之一。海岸地形以珊瑚裙礁為主體，是綠島僅有的兩處沙灘之一。 此為初級潛水區，觀光局東管理處在此設置潛水步道，方便潛水客或浮潛人士下水，保護石珊瑚，以免被人為破壞。適合每年六月至八月前來從事浮潛活動，海域變化層次多、海底礁石林立，浮潛完也可觀察潮間帶生物。', key: 'img4'}])
    // console.log(this.hotViewImgUrl)
  //   axios
  //     .get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON')
  //     .then(function (response) {
  //       let hotViewImg = response.data[0].Picture.PictureUrl1
  //       console.log(hotViewImg)
  //       // this.hotViewImgUrl.push(hotViewImg)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  }
}
$(document).ready(function () {
  $('button').click(function () {
    $('hotViewContainer_inner').addClass()
  })
})

</script>
<style scoped>
  .searchView /deep/ header {
     background-color: #A6CDE0;
  }
.topViewImg {
  width: 100%;
  height: 140px;
  background-image: url('../assets/bgHeader.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 0 50%;
  margin-top: 74px;
}

.hotView {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}

.hotView h5 {
    padding-left: 10%;
    color: #7BAEBE;
    font-size: 22px;
    margin-bottom: 1%;
}
.hotViewContainer {
  border: 1px solid;
  /* margin: 4% 22% 0 22%; */
  width: 100%;
  overflow: hidden;
  position: relative;
}
.hotViewContainer button {
  border: 1px solid;
  position: absolute;
  top: 0;
}
.hotViewContainer button:nth-child(5){
  left: 30%;
}

.hotViewContainer button:nth-child(6){
  left: 82%;
}

.hotViewContainer_inner {
  border: 10px solid orange;
  width: 300%;
  margin: 0 auto;
}
.hotViewImg {
  display: inline-block;
  border: 1px solid;
  width: 300px;
  vertical-align: middle;
}
.hotViewImg:nth-child(1) {
  margin-right: 7%;
}

.hotViewImg:nth-child(3) {
  margin-left: 7%;
}

.hotViewImg:nth-child(2) {
  width: 444px;
}

.hotViewImg:nth-child(2) img{
  height: 212px;
}

.hotViewImg img{
  width: 100%;
  border-radius: 20px;
  height: 179px;
}

.search_left {
  width: 34%;
  display: inline-block;
  padding-left: 10%;
  vertical-align: top;
}

.search_right {
  width: 55%;
  display: inline-block;
  margin-right: 10%;
}

.search_right .popular {
  text-align: right;
  width: 100%;
}
.searchContent,.searchKey input,.btn_popular,.viewIntroduce{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #0000004b;
  border-radius: 15px;
  padding: 17px;
  border: 0;
  width: 88%;
}

.searchKey{
  margin-bottom: 30px;
  position: relative;
}

.searchContent{
  padding: 20px;
}

.searchKey input{
  font-size: 16px;
}

.searchKey button{
  border: 0px;
  background-color: #fff;
  position: absolute;
  top: 16px;
  right: 15%;
}

.searchKey button img{
  width: 20px;
  height: 20px;
}

.searchContent p{
  color: #666666;
  font-size: 18px;
  margin-bottom: 20px;
}
.searchContent h6{
  color: #7BAEBE;
  font-size: 22px;
  margin-bottom: 12px;
}

.searchContent button {
  margin: 0 auto;
  width: 62%;
  background-color: #E8CB89;
  border: 0px;
  border-radius: 15px;
  color: #fff;
  padding: 7%;
  margin-top: 4px;
}

.selectCity {
  width: 100%;
  border-bottom: 1px solid #CCD7DB;
  padding-bottom: 16px;
  margin-bottom: 20px;
}

.selectCity select{
  width: 100%;
  height: 40px;
  background-color: #EBEBEB;
  border-radius: 10px;
  border: 0px;
  color: #707070;
  padding: 8px 12px;
  font-size: 16px;
}

.selectCity select:first-child{
  margin-bottom: 3%;
}

.searchSort {
  width: 100%;
}

.searchSort input{
  display: none;
}

.searchSort input+label{
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}

.searchSort input[type="radio"]:checked + label span:first-child{
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 99px;
  background-color: #7BAEBE;
  vertical-align: top;
  z-index: 2;
  position: absolute;
  top: 3px;
  left: 3px;
}

.searchSort input[type="radio"] + label span:nth-last-child(2){
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 99px;
  background-color: #D1D1D1;
  vertical-align: top;
  margin-right: 10px;
  z-index: 1;

}

.searchSort span:last-child{
  font-size: 16px;
  margin-bottom: 16px;
  color: #666666;
}

.search {
  text-align: center;
}

.btn_popular{
  width: 20%;
  font-size: 16px;
  color: #666666;
  margin-bottom: 30px;
}

.btn_popular img {
  width: 24px;
  height: 24px;
  float: left;
}

.btn_popular span {
  vertical-align: middle;
}

.viewIntroduce {
  width: 100%;
  height: 240px;
  padding: 0;
  margin-bottom: 3%;
  display: block;
}

.viewImg, .viewDetail{
  display: inline-block;
}

.viewIntroduce .viewImg {
  width: 45%;
  height: 240px;
  overflow: hidden;
  position: relative;
  top: 1px;
  border-radius: 15px 0 0 15px;
}

.viewDetail {
  width: 54%;
  vertical-align: top;
  padding: 18px;
}

.viewDetail h6 {
  font-size: 22px;
  color: #7BAEBE;
  font-family: "PingFang TC";
  display: inline-block;
}

.viewName {
  margin-bottom: 12px;
}

.viewDetail p{
  font-size: 16px;
  color: #707070;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  margin-bottom: 10%;

}

.viewName span:nth-child(2) {
  background-color:#E8CB89;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  padding: 7px 10px;
  display: inline-block;
  width: 21%;
  float: right;
  text-align: center;
  position: relative;
  top: -1px;
}

.ps{
  margin-top: 18%;
}

.ps > div{
  display: inline-block;
}

.ps img{
  width: 19px;
  height: 19px;
  margin-right: 7px;
}
.ps span{
  color: #707070;
    font-size: 14px;
    position: relative;
    top: -3px;
}

.click{
  float: right;
}
.time {
  margin-left: 10px;
}

.viewPages {
  text-align: right;
}

.viewPages button:nth-child(1){
  background-color: #fff;
  background-image: url('../assets/arrow_viewPage_left.svg');
}
.viewPages button:nth-child(3){
  background-color: #fff;
  background-image: url('../assets/arrow_viewPage_right.svg');
}

.viewPages button,.viewPages ul li{
  background-size: 100% 100%;
  border: 0px;
  display: inline-block;
  padding: 3%;
}
.viewPages ul li, .viewPages ul{
  display: inline-block;
}

.viewPages ul {
  width: 38%;
  text-align: left;
  vertical-align: top;
}

.viewPages ul li {
  border-radius: 10px;
  padding: 5% 6.4%;
  margin-right: 3px;
  border: 1px solid #A5A5A5;
  color: #A5A5A5;
  display: inline-block;
}

.viewPages ul li:active{
  background-color: #7BAEBE;
  color: #fff;
}
</style>
