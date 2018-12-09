var ballRun = (function(){

    return function(obj) {

	    	// 获取画布
        	var Canvas
	
		var canvas
		// 获取画布上下文
		var ctx

        var spotArray = []
        
        // 存放计时器引用
        var time

		// 判断是否传入对象
		if(obj) {

			var config =  {

				// 获取元素
				Element: obj.Element || "body",
				// 小球数量
				Number:obj.Number || 30,
				//小球半径
				Radius:obj.Radius || 8,
				// 小球横向速度范围
				spotSpeedX:obj.spotSpeedX || 0.3,
				// 小球纵向速度范围
				spotSpeedY:obj.spotSpeedY || 0.3,
				// 小球覆盖样式:"lighter"颜色叠加,"xor"覆盖区域显示白色
				globalCompositeOperation:obj.globalCompositeOperation || "xor",
				// 小球透明度
				globalAlpha:obj.globalAlpha || 0.3,
				// 配置小球颜色
				spotColor:obj.spotColor || ["rgb(20, 243, 243)","rgb(56, 255, 255)","rgb(199, 255, 255)"]
	
			}

		}else {

			var config =  {

				// 获取元素
				Element: "body",
				// 小球数量
				Number:30,
				// 小球半径
				Radius:8,
				// 小球横向速度范围
				spotSpeedX:0.3,
				// 小球纵向速度范围
				spotSpeedY:0.3,
				// 小球覆盖样式:"lighter"颜色叠加,"xor"覆盖区域显示白色
				globalCompositeOperation:"xor",
				// 小球透明度
				globalAlpha:0.3,
				// 配置小球颜色数组(随机呈现小球颜色)
				spotColor:["rgb(20, 243, 243)","rgb(56, 255, 255)","rgb(199, 255, 255)"]
	
			}

		}
		
		// 获取元素
		var cxo = document.querySelector(config.Element)
		
		// 判断元素是否存在
		if(cxo) {
		
			// 获取该元素的宽高
			var width = parseInt(window.getComputedStyle(cxo).width)
			
			var height = parseInt(window.getComputedStyle(cxo).height)
			
			// 将画布置为透明，显示画布内容
			cxo.style.opacity = 0.95
			
		}else {
			
			throw Error("你还未指定元素，请手动配置~")
			
		}
	
		// 制作画布
        function createCas() {

            Canvas = document.createElement('canvas')
			
            Canvas.id = "canvas"
                
            Canvas.width = width
                
            Canvas.height = height

            Canvas.style.position = "absolute"

            Canvas.style.top = 0

            Canvas.style.left = 0

            Canvas.style.zIndex = -1

            cxo.appendChild(Canvas)
                
            canvas = document.querySelector('#canvas')
                
            ctx = canvas.getContext('2d')

        }
		
		// 制作小球，添加到小球数组中
		function getSpot() {
			
			// 通过config的Number接口，创建相应数量的小球
			for(var i = 0 ; i < config.Number ; i ++) {

				var spot = {

					// 确定小球初始的x位置
					x:Math.random()*(canvas.width-2*config.Radius)+config.Radius,

					// 确定小球初始的y位置
					y:Math.random()*(canvas.height-2*config.Radius)+config.Radius,

					// 确定小球的大小
					size:config.Radius,

					// 确定小球的颜色
					color:config.spotColor[~~(Math.random()*config.spotColor.length)],

					// 确定小球的横向速度
					speedX:Math.random()*config.spotSpeedX*Math.pow(-1,~~(Math.random()*10000)),

					// 确定小球的纵向速度
					speedY:Math.random()*config.spotSpeedY*Math.pow(-1,~~(Math.random()*10000))

				}

				// 将每个小球的信息存进数组当中
				spotArray.push(spot)	

			}
			
		}

		// 渲染小球
		function renderSpot() {
			
			// 遍历数组，将每个小球绘制出来
			spotArray.forEach(function(value,index) {

				ctx.globalCompositeOperation = config.globalCompositeOperation

				ctx.globalAlpha = config.globalAlpha

				ctx.beginPath()

				ctx.arc(value.x,value.y,value.size,0,2*Math.PI,false)

				ctx.fillStyle = value.color

				ctx.fill()

			})
			
		}

		// 小球运动及碰撞检测
		function run() {

			// 快速循环，实现小球的运动
			time = setInterval(function() {
				
				// 遍历数组，判断小球是否碰撞到浏览器边缘
				spotArray.forEach(function(value,index) {

					// 如果没有碰撞到，则继续按照速度前进
					if(value.x+value.size+value.speedX<canvas.width&&value.y+value.size+value.speedY<canvas.height){

					 	if(value.x-value.size+value.speedX>0&&value.y-value.size+value.speedY>0){

							 value.x += value.speedX
							 
							 value.y += value.speedY
							 
					 	}
					}

					// 如果碰撞到右边缘，则横向速度相反
					if(value.x+value.size+value.speedX >= canvas.width){

						value.speedX = -value.speedX

					}

					// 如果碰撞到下边缘，则横向速度相反
					if(value.y+value.size+value.speedY >= canvas.height){

						value.speedY = -value.speedY

					}

					// 如果碰撞到左边缘，则横向速度相反
					if(value.x-value.size+value.speedX <= 0 ) {

						value.speedX = -value.speedX

					}

					// 如果碰撞到上边缘，则横向速度相反
					if( value.y-value.size+value.speedY <= 0 ) {

						 value.speedY = -value.speedY

					}
				})

				// 清除画布内容
					reDraw()

				// 重新渲染小球
					renderSpot()

				},0)	
		}
		
		// 清除画布内容
		function reDraw() {

			// 清除第一张画布的内容
			ctx.clearRect(0,0,canvas.width,canvas.height)
			
		}
		
		// 动画入口
		function letGo() {

			createCas()

			getSpot(Number)

			renderSpot()
			
			run()
			
		}
			
		// 当浏览器窗口改变的时候，画布大小自适应
		function nature() {

            		// 浏览器视窗大小改变后重置画布宽高问题
            		var width = parseInt(window.getComputedStyle(cxo).width)

            		var height = parseInt(window.getComputedStyle(cxo).height)

            		// 兼容vue路由切换后获取不到背景容器宽高
            		if(!width || !height) {

                		window.removeEventListener('resize',nature)

                		clearInterval(time)

               		 	return

            		}
                
            		// 删除画布
            		cxo.removeChild(canvas)

            		// 重新创建画布
            		createCas()
                
            		// 画布大小为当前的浏览器视窗大小
            		canvas.width = width

            		canvas.height = height

		}

		window.addEventListener('resize',nature)
			
		// 执行接口
		letGo()
		
    }
	
})()
