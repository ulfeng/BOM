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
