<template>
  <div>
    <div>
      <img src="../assets/taiwanLogoBlack.svg" alt="">
      <img src="" alt="">
    </div>
    <div>
      <p>民以食為天的臺灣，幾乎是三步一小吃店，五步一大餐廳，可說是應有盡有。近年來由於工商業的發展快速，臺灣吃的文化除了傳統的中式飲食方式外，也發展到中式速食連鎖店的經營方式，使得臺灣吃的藝術變得更加繁複。 因臺灣地處世界文化交流的總匯，世界各國的飲食也紛紛在臺灣出現，美國的漢堡、義大利的披薩、日本的生魚片、德國的豬腳、瑞士的乳酪等等，包羅萬象，讓臺灣著實成為饕家的天堂。而臺灣獨有的本土料理，風靡全球，嚐味一次，必將永生難忘。</p>
      <img src="" alt="">
      <div>
        <p>您想找哪個地方的美食呢？</p>
        <select name="" id="">
          <option value="">台北市</option>
        </select>
      </div>
      <div>
        <img src="" alt="">
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  </template>
<script>
export default {
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
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #fff;
  }
  </style>
