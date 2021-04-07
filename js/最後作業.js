// 網址
var dataUrl= "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json"
// // new一個XMLHttpRequest物件(以此物件的方法進行資料請求) 
var xhr = new XMLHttpRequest()
xhr.open('GET',dataUrl, true)
xhr.send(null);
xhr.onload = function(){
    // 轉換json格式並用全域變數
    data = JSON.parse(this.responseText).result.records;    
    // 呼叫資料函式
    upData(data)
}
// 抓到網頁元件
var select = document.getElementById('nav');
var areaName = document.getElementById('areaName');
var card = document.getElementById('card');
var btn = document.querySelector('.admin_btn');
// 預設最多6筆
var  page = 6;
// 重複區域陣列
var areaList = [];
// 不重複區域陣列
var area = [];
// 處理資料
function upData(item){
    var len = item.length;    
    for(var i=0; i<len; i++){
        areaList.push(item[i].Zone)        
    }
    // 過濾重複 value = 變數
    areaList.forEach(function(value){
    if(area.indexOf(value) == -1){
        area.push(value);
    }    
    });
    upSelectView(area)
}
    // 資料更新select介面
function upSelectView(item){
    var len = item.length;
    var str ='';
    // 預設值但不能點選
    str+='<option disabled selected>'+'- - 請選擇行政區- -'+'</option>';
    str+='<option value="全部地區">'+'全部地區'+'</option>';
    for (var i=0 ; i<len ; i++){
        str+='<option value="'+item[i]+'">'+item[i]+'</option>';
    }
    select.innerHTML = str;
    str='';
    
}

// select選擇更新介面
function allView(e){    
    var option = e.target.value;
    areaName.textContent = option ;
    var len = data.length;
    // 選擇行政區
    str='';    
    for(var i=0 ; i<len ; i++){
        if(data[i].Zone == option){
            str+='<li class="card_item"><div class="item_img"><img src="'+data[i].Picture1+'"><div class="item_img_text"><div class="itemName">'+data[i].Name+'</div><div class="itemZone">'+data[i].Zone+'</div></div></div><div class="item_cotent"><p class="opentime"><img src="image_1/icons_clock.png">'+data[i].Opentime+'</p><p class="adress"><img src="image_1/icons_pin.png">'+data[i].Add+'</p><div class="tel"><div><img src="image_1/icons_phone.png"><span class="phone">'+data[i].Tel+'</span></div><div><img src="image_1/icons_tag.png"><span class="free">'+data[i].Ticketinfo+'</span></div></div></div></li>';                
        }else if( option=='全部地區' ){
            str+='<li class="card_item"><div class="item_img"><img src="'+data[i].Picture1+'"><div class="item_img_text"><div class="itemName">'+data[i].Name+'</div><div class="itemZone">'+data[i].Zone+'</div></div></div><div class="item_cotent"><p class="opentime"><img src="image_1/icons_clock.png">'+data[i].Opentime+'</p><p class="adress"><img src="image_1/icons_pin.png">'+data[i].Add+'</p><div class="tel"><div><img src="image_1/icons_phone.png"><span class="phone">'+data[i].Tel+'</span></div><div><img src="image_1/icons_tag.png"><span class="free">'+data[i].Ticketinfo+'</span></div></div></div></li>'; 
        }
    }
        card.innerHTML = str;
}
// btn選擇更新介面
function btnView(e){
    if( e.target.nodeName != 'INPUT'){return}
    var option = e.target.value;
    areaName.textContent = option ;
    var len = data.length;
    str='';    
    for(var i=0 ; i<len ; i++){
        if(data[i].Zone == option){
            str+='<li class="card_item"><div class="item_img"><img src="'+data[i].Picture1+'"><div class="item_img_text"><div class="itemName">'+data[i].Name+'</div><div class="itemZone">'+data[i].Zone+'</div></div></div><div class="item_cotent"><p class="opentime"><img src="image_1/icons_clock.png">'+data[i].Opentime+'</p><p class="adress"><img src="image_1/icons_pin.png">'+data[i].Add+'</p><div class="tel"><div><img src="image_1/icons_phone.png"><span class="phone">'+data[i].Tel+'</span></div><div><img src="image_1/icons_tag.png"><span class="free">'+data[i].Ticketinfo+'</span></div></div></div></li>';                
        }    
    }
    card.innerHTML = str;
}
// 監聽
select.addEventListener('change',allView,false);
btn.addEventListener('click',btnView,false);
