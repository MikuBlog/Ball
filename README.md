# 自制小球(Canvas)插件

<br/>

## 效果图

<img src="https://mikuimg.oss-cn-shenzhen.aliyuncs.com/Plugin/Ball/pic.jpg"> 

<br/>

## 简介

<br/>

>随手自制的一个简易小球插件,碰撞浏览器四边框反弹，匀速运动~

>入口js为```LineBall.main.min.js```

<br/>

## 更新

<br/>

- 1.0.0 - 『简易小球插件』
- 1.0.1 - 『兼容了vue路由切换』
- 1.1.0 - 『增加了npm安装使用』

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

#### 使用方法1

<br/>

>直接安装使用 ```cnpm install ball-master```

>```import ballRun from 'ball-master'``` 

<br/>

#### 使用方法2

>头部引入文件

<br/>

```
<script src="js/LineBall.main.min.js"></script>
```

<br/>

#### 通用配置

```js

//不传参默则默认为如下设置
ballRun({

        // 获取元素(CSS选择器 该元素提供背景容器)
        Element: "body",
		
        // 小球数量
        Number: 50,
		
        // 小球半径
        Radius: 8,
		
        // 小球横向速度最大值,速度范围(0~0.3)
        spotSpeedX: 0.3,
		
        // 小球纵向速度最大值,速度范围(0~0.3)
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

>调用ballRun函数传入配置参数使用即可

<br/>

## 下载

<br/>

>git clone https://github.com/MikuBlog/Ball.git



