window.onload = function(){
			
			var dots=document.getElementsByClassName("dot")[0].getElementsByTagName("div");
			var vl=[1,1,1,1,1,1,1,1,1];//dotsvalue
			//r:related dots
			var r1=[0,1,3],
				r2=[0,1,2,4],
				r3=[1,2,5],
				r4=[0,3,4,6],
				r5=[1,3,4,5,7],
				r6=[2,4,5,8],
				r7=[3,6,7],
				r8=[4,6,7,8,],
				r9=[5,7,8];
			var rs=[r1,r2,r3,r4,r5,r6,r7,r8,r9];
			var u;//id of the dot clicked
			var rsu;//=rs[u],因为不能写rs[u][i]来调用数组中的数组
			
			function fuckthis(u){
						rsu=rs[u];
						for(var i=0;i<5;i++){
							vl[rsu[i]]=vl[rsu[i]]*-1;
							//dots[rsu[i]].innerHTML=vl[rsu[i]];
							//document.getElementById("text").innerHTML=u;
							colorit(i);
						}
			}
			
			function colorit(i){
				if(vl[rsu[i]]==1){dots[rsu[i]].style.backgroundColor="white";}
				else{dots[rsu[i]].style.backgroundColor="grey"}
			}
			
			dots[0].onclick=function(){u=0;fuckthis(u);}
			dots[1].onclick=function(){u=1;fuckthis(u);}
			dots[2].onclick=function(){u=2;fuckthis(u);}
			dots[3].onclick=function(){u=3;fuckthis(u);}
			dots[4].onclick=function(){u=4;fuckthis(u);}
			dots[5].onclick=function(){u=5;fuckthis(u);}
			dots[6].onclick=function(){u=6;fuckthis(u);}
			dots[7].onclick=function(){u=7;fuckthis(u);}
			dots[8].onclick=function(){u=8;fuckthis(u);}	
			
		}