
//定时器
var timer = null;

var _isSetSku = false;

//选中档次
function chooseSku(){
	var sku = document.getElementsByClassName('sku_item')[2];
	
	if(sku){
		sku.click();
		
		if(timer){
			clearTimeout(timer);
		}
		
		var buybtn = document.getElementsByClassName('buybtn')[0];
	
		if( buybtn.className.indexOf("disabled")> -1 ){
			//表示还没到抢票时
			console.log('刷票中...');
			setTimeout(function() {
					window.location.reload();
				}, 500);
		}else{
			
			//票的数量  如果还不可以购买，这个地方获取会失败 
			var amount = document.getElementsByClassName('cafe-c-input-number-handler-up')[0];
			amount && amount.click();  //+1
		}

		//提交购买
		buybtn.click();
		
	}else{
		console.log('等待异步数据加载中....');
		//自我调用
		timer = setTimeout(chooseSku,500);
		
	}
}

//选择观影人
function chooseUser(){
	var user_info = document.querySelectorAll('.ticket-buyer-title span')[0];
		
	if(user_info.className.indexOf('buyer-enough')>-1){
		
		if(timer){
			clearTimeout(timer);
		}
		
		var btn_submit = document.querySelectorAll('.submit-wrapper button')[0];

		//提交
		btn_submit && btn_submit.click();
		return;
		//debugger;
		if(btn_submit){
			//alert('提交订单成功！');
			console.log('提交订单成功！');
		}
	}else{
		
		console.log('观影人:等待异步数据加载中....');
		
		//自我调用
		timer = setTimeout(chooseUser,500);
	}
}

//提交订单
function submitOrder(){
	
	console.log('############################submitOrder############################');
	
	
	//选择人员
	var user2 = document.querySelectorAll('.ticket-buyer-select input')[0];
	user2 && user2.click(); 
	chooseUser();
	return;

}

var grab = function() {
	
	console.log('############################grab############################');
    
	var date = new Date();
	
	//12:16开始刷
	//if(date.getHours() < 12 ) return;
	//if(date.getMinutes() < 16 ) return;
	
	var href = window.location.href;
	
	//如果是提交订单页面
	if(href.indexOf('buy.damai.cn/orderConfirm') > -1 ){
		
		console.log('提交订单');
		
		submitOrder();
		
		
		
		//console.log('提交成功！');
		
		return;
	}
	
	
	console.log('开始抢票！');
	
	//chrome extension 不支持 $
	//$('.sku_item:nth-child(4)').click();
	
	//选中档次
	chooseSku();

	console.log('OK!');
	
	return;
	
	
	
}


grab();