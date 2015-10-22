window.onload = function () {
    checkCookie();
}


// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    // setTime() 方法以毫秒设置 Date 对象。
    // getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));  //设置cookie 到期时间
    // toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();  // trim() 去除空格
        // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";  // 如果没有，则返回为空
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again, " + user);
    }
    else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}


