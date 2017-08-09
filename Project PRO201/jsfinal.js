function flag(){
	if(localStorage.getItem("tag")==1)
		hello();	
}
function hello(){
	alert("Welcome "+localStorage.getItem("name")+"!!! Have a nice day...");
	localStorage.setItem("tag",0);
}
//----------------------------------------------------------------------------------------------
function logout(){
	window.open("As1.html");
}
//----------------------------------------------------------------------------------------------


function khoitao(){
	var t=document.getElementById("atbegin");
	t.innerHTML="Hi, <b>"+localStorage.getItem("name")+" </b>. <input type='text' id='tim' class='search' placeholder='&nbsp;&nbsp;Search'> <img src='images/Search icon.png' heigh='12' width='12' class='searchicon' onClick='dotim()'> ( <span class='underground' onClick='count()'>Total hero(s)</span>: "+hero.length+" ) - ( <span class='underground' onClick='logout()'>Log out</span> ) - ( <span id='date'></span> - <span id='time'></span> )";
}
//----------------------------------------------------------------------------------------------
var hero=new Array("Aatrox","Ahri","Alistar","Amumu","Ashe"); 
function dotim(){
	var t=document.getElementById("tim");
	var flagfind=0;
	if(t.value=="") alert("Please input hero name!!!");
	for(var i=0; i<hero.length; i++){
		if(t.value.toLowerCase()==hero[i].toLowerCase()){
			t.value="";
			window.open(hero[i].toLowerCase()+".html");
			flagfind=1;
		}
	}
	if(flagfind==0) {
		t.value="";
		alert("Cannot find!!!");
	}
}
//----------------------------------------------------------------------------------------------
function count(){
	var heros="";
	for(var i=0; i<hero.length-1; i++)
		heros+=hero[i]+"; ";
	heros+=hero[hero.length-1]+"!";
	alert(heros);
}

function thongbao(){
	alert("Coming soon!!!...");
}
//----------------------------------------------------------------------------------------------


function demoDate(){
	var arr=new Array("Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat");
	var t=new Date();
	var thu=t.getDay();
	var ngay=t.getDate();
	var thang=t.getMonth() + 1;
	var nam=t.getFullYear();
	var tag=document.getElementById("date");
	tag.innerHTML=arr[thu]+" - "+ ngay +"/"+ thang +"/"+ nam;
}
//----------------------------------------------------------------------------------------------


function demoTime(){
	var t=new Date();
	var tag=document.getElementById("time");
	tag.innerHTML=t.getHours()+":"+ t.getMinutes()+":"+t.getSeconds();
	setTimeout("demoTime()", 1000);
}
//----------------------------------------------------------------------------------------------


var aatrox= new Array;
	aatrox[1]="images/Aatrox/0.jpg";
	aatrox[2]="images/Aatrox/1.jpg";
	aatrox[3]="images/Aatrox/2.jpg";
	aatrox[4]="images/Aatrox/3.jpg";
var aatr=1;
function doiaatrox(){
	var t=document.getElementById("hinh");
	aatr++;
	if(aatr==aatrox.length) aatr=1;
	t.innerHTML="<img src='"+aatrox[aatr]+"' class='scroll' onClick='doiaatrox()'><br><i>("+aatr+" of "+(aatrox.length-1)+")<br>(Click image to view another skin)</i><br>";
}
//----------------------------------------------------------------------------------------------


var amumu= new Array;
	amumu[1]="images/Amumu/0.jpg";
	amumu[2]="images/Amumu/1.jpg";
	amumu[3]="images/Amumu/2.jpg";
	amumu[4]="images/Amumu/3.jpg";
	amumu[5]="images/Amumu/4.jpg";
	amumu[6]="images/Amumu/5.jpg";
	amumu[7]="images/Amumu/6.jpg";
	amumu[8]="images/Amumu/7.jpg";
	amumu[9]="images/Amumu/8.jpg";
var amu=1;
function doiamumu(){
	var t=document.getElementById("hinh");
	amu++;
	if(amu==amumu.length) amu=1;
	t.innerHTML="<img src='"+amumu[amu]+"' class='scroll' onClick='doiamumu()'><br><i>("+amu+" of "+(amumu.length-1)+")<br>(Click image to view another skin)</i><br>";
}
//----------------------------------------------------------------------------------------------


var ahri= new Array;
	ahri[1]="images/Ahri/0.jpg";
	ahri[2]="images/Ahri/1.jpg";
	ahri[3]="images/Ahri/2.jpg";
	ahri[4]="images/Ahri/3.jpg";
	ahri[5]="images/Ahri/4.jpg";
	ahri[6]="images/Ahri/5.jpg";
	ahri[7]="images/Ahri/6.jpg";
var ahr=1;
function doiahri(){
	var t=document.getElementById("hinh");
	ahr++;
	if(ahr==ahri.length) ahr=1;
	t.innerHTML="<img src='"+ahri[ahr]+"' class='scroll' onClick='doiahri()'><br><i>("+ahr+" of "+(ahri.length-1)+")<br>(Click image to view another skin)</i><br>";
}
//----------------------------------------------------------------------------------------------


var ashe= new Array;
	ashe[1]="images/Ashe/0.jpg";
	ashe[2]="images/Ashe/1.jpg";
	ashe[3]="images/Ashe/2.jpg";
	ashe[4]="images/Ashe/3.jpg";
	ashe[5]="images/Ashe/4.jpg";
	ashe[6]="images/Ashe/5.jpg";
	ashe[7]="images/Ashe/6.jpg";
	ashe[8]="images/Ashe/7.jpg";
var ash=1;
function doiashe(){
	var t=document.getElementById("hinh");
	ash++;
	if(ash==ashe.length) ash=1;
	t.innerHTML="<img src='"+ashe[ash]+"' class='scroll' onClick='doiashe()'><br><i>("+ash+" of "+(ashe.length-1)+")<br>(Click image to view another skin)</i><br>";
}
//----------------------------------------------------------------------------------------------


var alistar= new Array;
	alistar[1]="images/Alistar/0.jpg";
	alistar[2]="images/Alistar/1.jpg";
	alistar[3]="images/Alistar/2.jpg";
	alistar[4]="images/Alistar/3.jpg";
	alistar[5]="images/Alistar/4.jpg";
	alistar[6]="images/Alistar/5.jpg";
	alistar[7]="images/Alistar/6.jpg";
	alistar[8]="images/Alistar/7.jpg";
	alistar[9]="images/Alistar/8.jpg";
var alis=1;
function doialistar(){
	var t=document.getElementById("hinh");
	alis++;
	if(alis==alistar.length) alis=1;
	t.innerHTML="<img src='"+alistar[alis]+"' class='scroll' onClick='doialistar()'><br><i>("+alis+" of "+(alistar.length-1)+")<br>(Click image to view another skin)</i><br>";
}
//----------------------------------------------------------------------------------------------

