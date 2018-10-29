# 自制小球(Canvas)插件

<br/>

## 效果图

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/Ball/pic.jpg"> 

<br/>

## 简介

<br/>

>随手自制自制的一个简易小球插件,碰撞浏览器四边框反弹，匀速运动~

>入口js为```LineBall.main.min.js```

<br/>

## 更新

<br/>

- 1.0.0 - 『简易小球插件』

<br/>

<br/>

## 使用

<br/>

>为了适配移动端，请在头部加上如下语句

<br/>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

<br/>

>头部引入文件

<br/>

```
<script src="js/LineBall.main.min.js"></script>
```

<br/>

>body后引入script加入如下代码

<br/>

```js

//不传参默则认为如下设置
ballRun({

        // 获取元素(该元素作为canvas的父元素，canvas作为该元素的背景层)
        Element: "body",
		
        // 小球数量
        Number: 50,
		
        // 小球半径
        Radius: 8,
		
        // 小球横向速度范围
        spotSpeedX: 0.3,
		
        // 小球纵向速度范围
        spotSpeedY: 0.3,
		
        // 小球覆盖样式:"lighter"颜色叠加,"xor"覆盖区域显示白色
        globalCompositeOperation: "xor",
		
        // 小球透明度
        globalAlpha: 0.3,
		
        // 配置小球颜色数组(随机呈现小球颜色)
        spotColor: ["rgb(20, 243, 243)","rgb(56, 255, 255)","rgb(199, 255, 255)"]

})

```

<br/>

## vue使用

<br/>

>在```ballRun.main.min.js```末尾添加```export default ballRun;```

>在所需组件内引入```import ballRun from "./xxx/ballRun.main.min.js```

>调用ballRun函数使用即可

<br/>

## 下载

<br/>

>git clone https://github.com/MikuBlog/Ball.git



