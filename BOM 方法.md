#### Window - 浏览器对象模型
浏览器对象模型(BOM)使JavaScript有能力与浏览器对话<br>
有三种方法能够确定浏览器窗口的尺寸(浏览器的视口，不包括工具栏和滚动条)<br>
对于Internet Explorer/Chrome/Firefox/Opera/以及Safari:window.innerHeight-浏览器窗口的内部高度；window.innerWidth-浏览器窗口的内部宽度。<br>
对于Internet Explorer 8/7/6/5:document.documentElement.clientHeight;document.documentElement.clientWidth;<br>
or document.body.clientHeight ;document.body.clientWidth;<br>
    实用的JavaScript方案(涵盖所有浏览器)：
```javascript
var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
var h=window.innerHeight||document.documentElement.clientHeight||docment.body.clientHeight;
```
其它 Window 方法：
* window.open() - 打开新窗口
* window.close() - 关闭当前窗口
* window.moveTo() - 移动当前窗口
* window.resizeTo() - 调整当前窗口的尺寸

#### Window Screen
Window.screen 对象在编写时可以不使用window这个前缀<br>
* screen.availWidth - 可用的屏幕宽度
* screen.availHeight - 可用的屏幕高度
```javascript
document.write("屏幕可用宽度为： " + screen.availWidth);
```

#### Window Location
window.loaction 对象用于获得当前页面的地址(URL),并把浏览器重定向到新的页面
* location.hostname 返回 web　主机的域名
* location.pathname 返回当前页面的路径和文件名
* location.port 返回 web 主机的端口(80 或 443)
* location.protocol 返回所使用的 web 协议(http:// or https://)
* location.href 当前页面的 url
* location.assign 加载新的文档

#### Window History
该对象包含浏览器的历史
* history.back() - 与在浏览器点击后退按钮相同
* history.forword() - 与在浏览器点击前进按钮相同

#### Window Navigator
window.navaigator 对象包含有关访问者浏览器的信息
```javascript
txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt+= "<p>Platform: " + navigator.platform + "</p>";
txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";
```
###### !!!!!警告
来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
* navigator 数据可被浏览器使用者更改
* 一些浏览器对测试站点会识别错误
* 浏览器无法报告晚于浏览器发布的新操作系统

#### JavaScript 弹窗
* alert(); 警告框
* confirm(); 确认框
* prompt(); 提示框
* \n 换行

确认框
```javascript
var r = confirm("Press a Button");
if(r == true){
    x="You pressed OK!";
}
else{
    x="You pressed cancel!";
}
```

提示框
```javascript
var person = prompt("Please enter your name","Harry Potter");
if(person != null && person != ""){
    x = "你好，" + person + "! How are you today?";
}
```

#### JavaScript Cookies
Cookies 用于存储 web 页面的用户信息
###### 创建Cookie
```javascript
document.cookie="username=John Doe";
```
添加过期时间，默认情况下，cookie在浏览器关闭时删除
```javascript
document.cookie="username=John Doe; expires =Thu,18 Dec 2013 12:00:00 GMT";
```
path 参数告诉浏览器cookie 的路径，默认情况下，cookie 属于当前页面
```javascript
document.cookie="username=John Doe; expires = Thu, 18 Dec 2013 12:00:00 GMT; path=/";
```

###### 读取Cookie
```javascript
var x=document.cookie;
```

###### 修改 Cookie
```javascript
document.cookie="username=John Doe; expires = Thu, 18 Dec 2013 12:00:00 GMT; path=/";
// 旧的 cookie 将被覆盖
```

###### 删除 Cookie
```javascript
document.cookie = "username=; expires= Thu, 01 Jan 1970 00:00:00 GMT";
// 设置 expires 参数为以前的时间即可
```

实例：
```javascript
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
```























