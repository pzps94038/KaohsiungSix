// 抓到預設本地資料跟時間
var data = JSON.parse(localStorage.getItem('bmiList')) || [];
var today = new Date();
// 抓到網頁元件
var result = document.querySelector('.result');
var record = document.querySelector('.record');
// 先刷新本地資料

function Bmi(){
    // 抓到裡面的值
    var height = document.getElementById('height').value;
    var kg = document.getElementById('kg').value;
    var bmi = kg/((height*0.01)*(height*0.01));
    var todo ={
        content:bmi,
        bodyWeight:kg,
        bodyHeight:height,
        year = today.getFullYear(),
        month = today.getMonth(),
        date = today.getDate(),
    };
    data.push(todo);
    localStorage.setItem('bmiList',JSON.stringify(data));
    updata(data)
}
function updata(item){
    var len = item.length;
    str-'';
    for(var i=0 ; i<length ; i++){
        if(data[i].content < 16){
            str+='<li class="Too_light">過輕<p>BMI</p><span>'+item[i].content+'</span><p>weight</p><span>'+item[i].bodyWeight+'</span><p>height</p><span>'+item[i].bodyHeight+'</span><span>'+item[i].date+'-'+item[i].month+'-'+item[i].year;
        }
    }record.innerHTML = str;
}
result.addEventListener('click',Bmi,false);