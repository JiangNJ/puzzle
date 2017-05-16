
//1.生成随机数字
// function getRandomID(min,max) {
// 	var num = parseInt(min+Math.random() * (max - min));
// };
// 2.生成随机字符并添加到randoms数组内，半完成品，缺少去除随机数字的函数
// var randoms = [];
// while(true){
// 	var isExists = false;
// 	var random = parseInt(1+(8-1)*Math.random());
// 	for (var i = 1; i<random.length; i++) {
// 		if (random === randoms[i]) {
// 			isExists = true;
// 			break;
// 		}
// 	}
// 	if(!isExists)
// 		randoms.push(random);
// 	if(randoms.length === 8)
// 		break
// }
// 3.运用sort进行排序,缺点只有固定的随机顺序
var arr = (function(){
    var _arr = [];
    for(var i=1;i<=8;i++){
        _arr.push(i);
    }
    return _arr;
})().sort(function(a,b){
    return Math.random()-0.5;
}).slice(0,8);
$("#game>div").innerText = arr
















var randomDiv = $("#game>div");


