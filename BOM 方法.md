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

