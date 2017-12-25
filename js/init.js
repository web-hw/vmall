window.onload = function(){
	var obanner = document.getElementById("banner");
	var obannerli = obanner.getElementsByTagName("li");
	var oslider = document.getElementById("slider");
	var ositem = oslider.getElementsByTagName("span");
	function hidden(a){
		for(i=0;i<a.length; i++){
			a[i].style.display = 'none';
		}
	}

	for(i=0;i<ositem.length; i++){
		//var obannerli[i].index=i;
		ositem[i].onmouseover = function(){
			obannerli[i].style.display = 'block';
			obannerli[i].style.zIndex = 100;
		}  
		ositem[i].onmouseout = function(){
			obannerli[i].style.display = 'none';
			obannerli[i].style.zIndex = "";
		}
		ositem[i].onclick = function(){
			obannerli[this.index].style.display = 'block';
			obannerli.style.display = "none";
		}
	}
}