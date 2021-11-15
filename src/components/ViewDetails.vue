<template>
  <div class="searchView">
    <Menu></Menu>
    <div class="topViewImg"></div>
    <Breadcrumbs :parent-msg='msg'></Breadcrumbs>
    <div class="viewDetails">
      <div class="detailsText">
        <div class="detailsTitle">
          <span class="viewName">菜園休閒漁業區</span>
          <span class="viewSort">觀光遊憩</span>
          <span class="popular">
            <img src="../assets/click.svg" alt=""><span>1293</span>
          </span>
        </div>
        <div class="detailsInfo">
          <span class="infoTitle">景點資訊</span>
          <div v-for="(viewInfoItem) in viewInfo" :key="viewInfoItem.key">
            <img :src="viewInfoItem.url" :alt="viewInfoItem.url"><span>{{viewInfoItem.text}}</span>
            <button :class="{'btn_turnOff': viewInfoItem.btnTurnOff}"><img src="../assets/linkArrowDefault.svg" alt=""></button>
          </div>
        </div>
      </div>
      <div class="details_photo">
        <img src="" alt="">
        <ul><li></li></ul>
      </div>
    </div>
    <div class="details_description">
      <div></div><span>景點介紹</span>
      <div>
        <p>清代開墾初期，因地勢較低，水源豐沛且土壤肥沃，得以栽種一畝畝的綠色田園，因此以「菜園」命名。菜園位於馬公的東南方，緊臨青灣與測天島間的內灣，擁有豐富的海洋資源，經過人為開發後已成為多元化的生態園區，包含養殖漁業、溼地生態、珊瑚淺坪等。 菜園漁港最大的產業特色是達60公頃面積的養殖漁業-牡蠣和近海箱網養殖，並已結合休閒觀光，發展出烤生蚵、餵海鱺等活動，讓遊客在海上體驗餵魚的樂趣，品嚐美味海鮮。玩家秘笈菜園休閒漁業區內有海上箱網養殖平台，開放給遊客前往垂釣跟餵魚，體驗澎湖漁民獨特的養殖方式，也享受跟魚群近距離接觸的樂趣。 活動內容有牡蠣、箱網養殖生態解說，餵魚秀、海鱺/石斑/鯛魚拉力賽、趣鬥花枝或小管、餵食魟魚，無限量品嚐碳烤鮮蚵、海鮮粥或蚵仔麵線，菜園內灣活動安全性高(以業者現場公告為基準)。</p>
        <img src="" alt="">
      </div>
    </div>
    <div class="moreView">
      <p>看更多馬祖相關行程</p>
      <ul>
        <li>
          <span>自然風景</span>
          <img src="" alt="">
          <p>景點名稱1</p>
          <p><img src="" alt=""><span>1293</span></p>
        </li>
      </ul>
    </div>
    <div class="moreFood">
      <p>看更多馬祖相關行程</p>
      <ul>
        <li>
          <span>自然風景</span>
          <img src="" alt="">
          <p>景點名稱1</p>
          <p><img src="" alt=""><span>1293</span></p>
        </li>
      </ul>
    </div>
    <div class="moreHotel">
      <p>看更多馬祖相關行程</p>
      <ul>
        <li>
          <span>自然風景</span>
          <img src="" alt="">
          <p>景點名稱1</p>
          <p><img src="" alt=""><span>1293</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import Breadcrumbs from './Breadcrumbs'
export default {
  components: {
    Menu,
    Breadcrumbs
  },
  data () {
    return {
      btnTurnOff: true,
      viewInfo: [
        {url: '../assets/map.svg', text: '880 澎湖縣馬公市菜園里', key: 'viewInfo1', btnTurnOff: 'true'},
        {url: '../assets/phone.svg', text: '+886 6 921 6521', key: 'viewInfo2', btnTurnOff: 'true'},
        {url: '../assets/time.svg', text: '全天24小時開放', key: 'viewInfo3', btnTurnOff: 'false'},
        {url: '../assets/transportation.svg', text: '機車／汽車：自馬公市區經中華路，接縣道204至石泉國小右轉，205號縣道後左轉，看到「菜園生命公園」指標右轉，一小段路後即可到達。', key: 'viewInfo4', btnTurnOff: 'false'},
        {url: '../assets/information.svg', text: '官方網站', key: 'viewInfo5', btnTurnOff: 'true'},
        {url: '', text: 'Instagram Tag', key: 'viewInfo5', btnTurnOff: 'true'}
      ],
      msg: [
        {text: '首頁', class: '', key: 'Breadcrumbs1'},
        {text: '>', class: '', key: 'Breadcrumbs2'},
        {text: '景點查詢', class: '', key: 'Breadcrumbs3'},
        {text: '>', class: '', key: 'Breadcrumbs4'},
        {text: '紫坪', class: 'active', key: 'Breadcrumbs3'}
      ]
    }
  }
}
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

.viewDetails {
  padding-left: 10%;
  margin-top: 5%;
}
.viewDetails >div {
  display: inline-block;
}
.detailsText {
  width: 40%;
}

.detailsTitle span{
  display: inline-block;
  margin-right: 24px;
}
.viewName {
  font-size: 24px;
  color:#7BAEBE;
}

.viewSort {
  background-color: #E8CB89;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  padding: 7px 10px;
  position: relative;
  top: -3px;
}

.popular {
  color: #707070;
  font-size: 16px;
}
.detailsInfo {
  border-left: 1px solid #7BAEBE;
  margin-top: 45px;
}
.infoTitle {
  font-size: 18px;
  color: #666666;
  position: relative;
  left: 12px;
  top: -7px;
}

.infoTitle::before {
  width: 16px;
  height: 16px;
  background-color: #7BAEBE;
  border-radius: 99px;
  display: inline-block;
  content: '';
  position: relative;
  left: -20px;
}

</style>
