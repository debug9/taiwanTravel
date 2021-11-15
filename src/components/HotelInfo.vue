<template>
  <div>
    <div>
      <img src="../assets/taiwanLogoBlack.svg" alt="">
      <img src="" alt="">
    </div>
    <div>
      <img src="" alt="">
      <div>
        <div>
          <img src="" alt=""><p></p>
        </div>
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input type="date" name="" id="">
          <input type="date" name="" id="">
        </div>
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input type="text">
          <button><img src="" alt=""></button>
        </div>
        <button>搜尋住宿</button>
      </div>
    </div>
    <div>
      <div>
        <p>熱門住宿</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">
              <div><img src="" alt=""><span>5320</span></div>
              <img src="" alt="">
              <p>民宿名稱</p>
              <p><img src="" alt="">高雄市左營區</p>
            </a>
          </li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
        <div>
      <div>
        <p>熱門旅館</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">
              <div><img src="" alt=""><span>5320</span></div>
              <img src="" alt="">
              <p>民宿名稱</p>
              <p><img src="" alt="">高雄市左營區</p>
            </a>
          </li>
        </ul>
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
