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
