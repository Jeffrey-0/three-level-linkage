# 原生js实现三级联动

项目演示地址：原生js实现三级联动演示

项目github地址：原生js实现三级联动项目

![image](原生js实现三级联动.gif)

## HTML结构(index.html)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
  <ul class="container">
    <h1>原生js实现三级联动</h1>
    <li class="row">
      <p>省 会</p>
      <div><select name="province" id="province">
      </select></div>
    </li>
    <li class="row">
      <p>城 市</p>
      <div><select name="city" id="city"></select></div>
    </li>
    <li class="row">
      <p>院 校</p>
      <div><select name="school" id="school"></select></div>
    </li>
  </ul>
  <script type="text/javascript" src="js/school.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
</body>   
</html>
```

## CSS样式(css/index.css)

```css
*{
  padding: 0;
  margin: 0;
}
body{
  background: aliceblue;
}
ul{
  list-style: none;
}
h1{
  text-align: center;
  margin-bottom: 50px;
}
.container{
  width: 300px;
  margin: 50px auto;
}
.container li.row{
  width: 100%;
  height: 42px;
  background: white;
  border-radius: 15px;
  margin-top: 10px;
}
.container li.row p{
  display: inline-block;
  color: #16b7f7;
  line-height: 42px;
  padding: 0 10px;
}
.container li.row p::after{
  content: "|";
  color: #cccccc;
  padding: 0 0 0 15px;
}
.container li.row div{
  display: inline-block;
  width: 70%;
  height: 100%;
}
.container li.row div select{
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border-color: aliceblue;
}
```

## JS脚本

**数据存储(js/school.js)**

```js
var province = [['00', '北京'], ['01', '重庆'], ['02', '广东']]
var city = {
  '00': [['000', '朝阳区'], ['001', '顺义区']],
  '01': [['002', '城口县'], ['003', '丰都县']],
  '02': [['004', '汕头市'], ['005', '江门市']]
}
var allschool = {
  '000': [[1, '北京大学'], [2, '清华大学']],
  '001': [[3, '顺义大学'], [4, '无名大学']],
  '002': [[5, '重庆大学']],
  '003': [[6, '丰都大学']],
  '004': [[7, '汕头大学']],
  '005': [[8, '五邑大学'], [9, '江职']]
}
```

**(js/index.js)**

```js
(function () {
  var provinceNode = document.getElementById('province')
  var cityNode = document.getElementById('city')
  var schoolNode = document.getElementById('school')

  function provinceInit () {
    // 省会的获取
    var provinceStr = ''
    for (var i = 0; i < province.length; i++) {
      provinceStr += '<option value=' + province[i][0] + '>' + province[i][1] + '</option>'
    }
    provinceNode.innerHTML = provinceStr
  }

  function cityInit () {
    // 城市的获取
    var cityStr = ''
    for (var i = 0; i < city[provinceNode.value].length; i++) {
      cityStr += '<option value=' + city[provinceNode.value][i][0] + '>' + city[provinceNode.value][i][1] + '</option>'
    }
    cityNode.innerHTML = cityStr
  }

  function schoolInit () {
    // 学校的获取
    var schoolStr = ''
    for (var i = 0; i < allschool[cityNode.value].length; i++) {
      schoolStr += '<option value=' + allschool[cityNode.value][i][0] + '>' + allschool[cityNode.value][i][1] + '</option>'
    }
    schoolNode.innerHTML = schoolStr
  }

  // 联动事件
  provinceNode.onchange = function () {
    cityInit()
    schoolInit()
  }

  cityNode.onchange = function () {
    schoolInit()
  }

  provinceInit()
  cityInit()
  schoolInit()
})()
```

