<template>
  <div class="travelInfo_body">
    <Menu></Menu>
    <img src="../assets/bgTravelInfo.jpg" alt="" class="bg">
    <img src="../assets/taiwanLogoWhite.svg" alt="" class="taiwanLogo">
    <div class="search">
      <select name="" id="">
        <option value="">請選擇地區</option>
      </select>
      <select name="" id="">
        <option value="">請選擇縣市</option>
      </select>
      <button>SEARCH</button>
    </div>
  </div>
</template>
<script>
import Menu from '../components/Menu'
export default {
  components: {
    Menu
  },
  name: 'Index',
  data () {
    return {
      liList: [
        {text: 'TAIWAN TRAVEL', key: 'liList1'},
        {text: '旅遊情報', key: 'liList2'},
        {text: '景點查詢', key: 'liList3'},
        {text: '美食推薦', key: 'liList4'},
        {text: '旅宿資訊', key: 'liList5'},
        {text: '節慶活動', key: 'liList6'}
      ]
    }
  }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.travelInfo_body {
  text-align: center;
}
.bg{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.taiwanLogo {
  margin: 13% auto 0% auto;
}
.search {
  background-color: #fff;
  width: 53%;
  margin: 0 auto;
  border-radius: 15px;
  padding: 2% 1%;
}
.search select {
  border-radius: 10px;
  background-color: #EBEBEB;
  border: 0px;
  font-size: 16px;
  color: #707070;
  padding: 14px 12px;
  width: 36%;
}

.search select:nth-child(2) {
  margin-left: 1%;
}

.search button {
  padding: 2% 5.5%;
  border: 0;
  border-radius: 15px;
  margin-left: 4%;
  color: #fff;
  background-color: #E8CB89;
}
</style>
