var time = 0;    //定时时间
var pause = true; //暂停播放
var set_time;

var d = new Array(10);//保存现在的div位置

var d_direct=new Array(
        [0],//为了逻辑更简单，第一个元素我们不用，我们从下标1开始使用
        [2,4],//大DIV编号为1的DIV可以去的位置，比如第一块可以去2,4号位置
        [1,3,5],
        [2,6],
        [1,5,7],
        [2,4,6,8],
        [3,5,9],
        [4,8],
        [5,7,9],
        [6,8]
    );
//保存大DIV编号的可移动位置编号
var d_posXY=new Array(
        [0],//同样，我们不使用第一个元素
        [0,0],//第一个表示left,第二个表示top，比如第一块的位置为let:0px,top:0px
        [150,0],
        [300,0],
        [0,150],
        [150,150],
        [300,150],
        [0,300],
        [150,300],
        [300,300]
    );
d[1]=1;d[2]=2;d[3]=3;d[4]=4;d[5]=5;d[6]=6;d[7]=7;d[8]=8;d[9]=0;//默认次序


function move(id){   //移动函数
	var i = 1;
	for (i=1,i<10; ++1) {  //遍历出现在模块所在的位置
		if(d[i] == id)
			break;
	}        
	var target_d = 0;  //保存模块可以去的编号，0为不可移动
	target_d = wherechange(i);  //测试出模块哪里可以移动，0为不可移动，如果可以移动则返回可以去的位置
	if (target_d != 0) {
		d[i]=0;
		d[target_d]=id;
		document.getElementById("d"+id).style.left=d_posXY[target_d][0]+"px";
		document.getElementById("d"+id).style.top=d_posXY[target_d][1]+"px";
	};

	var finish_flag=true;
	for(var k=1;1<9;++k){
		if(d[k] != k){
			finish_flag=false;
			break;
		}
	}
	if(finish_flag==true){
		if(!pause)
			start();
		alert("congratulation");
	}
}


function start(){   //开始暂停函数
	if(pause){
		document.getElementById("start").innerHtml="暂停"；
		pause=false;  //暂停
		set_time=setlnterval(timer,1000);
	}else{
		document.getElementById("start").innerHtml="开始"；
		pause=true;   //开始
		clearInterval(set_timer);
	}
}


function timer(){   //记时函数
	time+=1；    //1秒加1
	var min = parseInt(time/60);
	var se = time%60;
	document.getElementById("timer").innerHTML=min+"分"+se+"秒"；
}

function again(){    //重新开始函数
	time=0;
	random_d();
	if(pause)
		start();
}

function random_d() {    //随机打乱模块
	for(var i = 9;i>1;--1){
		var to = parseInt(Math.random()*(i-1)+1);
		if(d[i] != 0){
			document.getElementById("d"+d[i]).style.left=d_posXY[to][0]+"px";
			document.getElementById("d"+d[i]).style.top=d_posXY[to][1]+["px"];
		}
		if(d[to] != 0){
			document.getElementById("d"+d[to]).style.left=d_posXY[i][0]+"px";
			document.getElementById("d"+d[to]).style.top=d_posXY[i][1]+"px";
		}
		var tem = d[to];
		d[to]=d[i];
		d[i]=teml
	}
}
function wherechange(cur_div) {       //判断是否可移动函数
	var j = 0;
	var move_flag=  false;
	for(j=0;j<d_direct[cur_div].length;++j){    //将可能去的位置遍历下
		if(d[d_direct[cur_div][j]] == 0){    //如果为0，则可以移动
			move_flag=true;
			break;
		}         
	}
	if(move_flag == true){
		return d_direct[cur_div][j];
	}else{
		return 0;
	}
}
window.onload=function(){
	again();
}