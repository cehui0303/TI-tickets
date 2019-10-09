var grab = function() {
    
	
	var href = window.location.href;
	
	//如果是提交订单页面
	if(href.indexOf('buy.damai.cn/orderConfirm') > -1 ){
		
		//选择人员
		var user2 = document.querySelectorAll('.ticket-buyer-select input')[1];
		user2.click();
		
		var btn_submit = document.querySelectorAll('.submit-wrapper button')[0];

		btn_submit.click();
		
		console.log('提交成功！');
		
		return;
	}
	
	
	console.log('开始抢票！');
	
	//chrome extension 不支持 $
	//$('.sku_item:nth-child(4)').click();
	
	//选中档次
	var sku = document.getElementsByClassName('sku_item')[3];
	sku.click();
	
	//票的数量 
	var amount = document.getElementsByClassName('cafe-c-input-number-handler-up')[0];
	amount.click();
	
	//提交购买
	var buybtn = document.getElementsByClassName('buybtn')[0];
	buybtn.click();
	
	
	
	console.log('OK!');
	
	return;
	
	/*
	var date = new Date();
    var pri = 'xxxxxxx';
	document.querySelector('#privilege_val').placeholder = pri
    if (date.getHours() >= 12) {
        var button = document.querySelector('body > div.perform > div > div.flex1 > div.hd > div > div.order > div.perform__order__box > div:nth-child(11) > div');
        if (button._prevClass == "buybtn") {
			document.querySelector('body > div.perform > div > div.flex1 > div.hd > div > div.order > div.perform__order__box > div.privilege > div.privilege__int > button')
			var btn_priv = document.querySelector('body > div.perform > div > div.flex1 > div.hd > div > div.order > div.perform__order__box > div.privilege > div.privilege__int > button')
			if (btn_priv._prevClass == "privilege_sub") {
				btn_priv.click();
			} else {
				setTimeout(function() {
					window.location.reload();
				}, 500);
			}
			var cc3 = document.querySelector('body > div.perform > div > div.flex1 > div.hd > div > div.order > div.perform__order__box > div.perform__order__select.perform__order__select__performs > div.select_right > div > div:nth-child(3)')
			cc3.click()
            button.click();
        } else {
            setTimeout(function() {
                window.location.reload();
            }, 500);
        }
    } else {
        setTimeout('grab()', 1000);
    }
	*/
}
grab();