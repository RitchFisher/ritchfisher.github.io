window.onload = function(){
	var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    window.open(this.src, "_blank");
  };
}
}