window.onload = function(){
	
	
	var qs=[
		[1,1,1,1,1,1,1,1,1,-99],//VERY TRICKY! USE -99 TO GET PASS STEP JUDGING
		[-1,-1,1,-1,1,1,1,1,1,1],
		[-1,-1,-1,1,-1,1,1,1,1,1],
		[1,-1,1,-1,-1,-1,1,-1,1,1],
		[1,-1,-1,-1,1,-1,-1,-1,1,2],
		[-1,-1,-1,1,1,1,-1,-1,-1,2],
		[-1,1,-1,-1,1,-1,1,1,1,2],
		[-1,-1,1,-1,-1,1,-1,-1,-1,2],
		[-1,-1,1,1,1,-1,-1,-1,1,2],
		[1,-1,-1,-1,1,1,-1,1,1,2],
		[1,1,-1,-1,-1,1,1,1,1,2],
		[-1,1,1,1,-1,-1,1,-1,1,2],
		[-1,1,1,-1,1,-1,-1,-1,1,-99],
		[1,1,-1,1,1,1,-1,-1,1,-99],
		[-1,1,-1,-1,1,-1,1,1,-1,-99],
		[-1,1,1,1,1,1,1,1,1,-99],
		[1,-1,1,1,1,1,1,1,1,-99],
		[1,1,1,1,-1,1,1,1,1,-99],
		[-1,1,1,1,1,1,1,1,1,5],
		[1,-1,1,1,1,1,1,1,1,4],
		[1,1,1,1,-1,1,1,1,1,5],
		[1,-1,1,-1,-1,-1,-1,1,-1,3],
		[-1,-1,1,1,-1,-1,1,1,-1,3],
		[-1,-1,1,-1,1,-1,-1,-1,-1,3],
		[-1,1,1,1,1,1,-1,1,-1,3],
		[-1,-1,1,1,1,-1,-1,1,-1,3],
		[1,-1,1,-1,-1,-1,1,1,1,3],
		[1,-1,-1,-1,1,-1,1,1,1,3],
		[-1,-1,-1,1,-1,1,1,-1,1,3],
		[1,1,-1,1,-1,-1,-1,1,1,3],
		[1,-1,-1,1,1,1,1,-1,1,3],
		[1,1,-1,1,-1,-1,-1,1,1,3],
		[1,-1,-1,1,1,-1,1,-1,1,3],
		[-1,-1,1,-1,1,1,-1,1,-1,3],
		[1,-1,1,1,-1,-1,-1,-1,-1,3],
		[-1,1,-1,-1,1,1,1,1,-1,3],
		[1,1,-1,1,1,-1,1,1,-1,4],
		[-1,1,-1,1,1,-1,-1,-1,-1,4],
		[1,1,-1,-1,-1,1,-1,-1,-1,4],
		[-1,1,-1,1,1,1,-1,1,-1,4],
		[1,-1,-1,-1,1,1,1,1,-1,4],
		[-1,1,-1,1,-1,1,1,1,-1,4],
		[-1,-1,-1,-1,-1,-1,-1,-1,-1,5],
		[1,1,1,1,1,-1,1,1,-1,5],
		[1,-1,1,-1,-1,-1,-1,-1,-1,5],
		[1,-1,-1,-1,-1,-1,-1,-1,-1,4],
		[-1,1,-1,-1,-1,-1,-1,-1,-1,3],
		[-1,-1,-1,-1,1,-1,-1,-1,-1,8],
		[-1,1,1,1,1,-1,1,-1,1,5],
		[-1,1,-1,1,-1,-1,-1,-1,-1,5],
		[-1,-1,1,1,-1,-1,-1,1,-1,8],
		[-1,-1,1,-1,-1,1,1,1,-1,7],
		[-1,1,-1,1,1,1,1,-1,1,8],
		[-1,1,-1,1,-1,1,-1,1,-1,9],
		[1,-1,1,-1,-1,1,-1,1,-1,5],
		[1,1,-1,1,1,1,1,-1,1,5],
		[-1,1,1,-1,1,1,1,1,-1,6]
		   ];
	var library = document.getElementsByClassName("qs");
	var dots1 = document.getElementsByClassName("dot1")[0].getElementsByTagName("div");
	var dots2 = document.getElementsByClassName("dot2")[0].getElementsByTagName("div");
	var lights1 = document.getElementsByClassName("steplight")[0].getElementsByTagName("div");
	var lights2 = document.getElementsByClassName("steplight")[1].getElementsByTagName("div");
	var d1vl = [1, 1, 1, 1, 1, 1, 1, 1, 1]; //dotsvalue,'d1'=dots1
	var d2vl = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	//r:related dots
	var d1r1 = [0, 1, 3],
	  d1r2 = [0, 1, 2, 4],
	  d1r3 = [1, 2, 5],
	  d1r4 = [0, 3, 4, 6],
	  d1r5 = [1, 3, 4, 5, 7],
	  d1r6 = [2, 4, 5, 8],
	  d1r7 = [3, 6, 7],
	  d1r8 = [4, 6, 7, 8],
	  d1r9 = [5, 7, 8],
	  //////
	  d2r1 = [0, 1, 4],
	  d2r2 = [0, 1, 2, 5],
	  d2r3 = [1, 2, 3, 6],
	  d2r4 = [2, 3, 7],
	  d2r5 = [0, 4, 5, 8],
	  d2r6 = [1, 4, 5, 6, 9],
	  d2r7 = [2, 5, 6, 7, 10],
	  d2r8 = [3, 6, 7, 11],
	  d2r9 = [4, 8, 9, 12],
	  d2r10 = [5, 8, 9, 10, 13],
	  d2r11 = [6, 9, 10, 11, 14],
	  d2r12 = [7, 10, 11, 15],
	  d2r13 = [8, 12, 13],
	  d2r14 = [9, 12, 13, 14],
	  d2r15 = [10, 13, 14, 15],
	  d2r16 = [11, 14, 15];
	
	

	var u; //id of the dot clicked
	var g; //id of the present question / the qs dealt with

	var rs1 = [d1r1, d1r2, d1r3, d1r4, d1r5, d1r6, d1r7, d1r8, d1r9];
	var rs2 = [d2r1, d2r2, d2r3, d2r4, d2r5, d2r6, d2r7, d2r8, d2r9, d2r10, d2r11, d2r12, d2r13, d2r14, d2r15, d2r16];

	var rsu1; //=rs[u],因为不能写rs[u][i]来调用数组中的数组
	var rsu2;
	
	var step1=-9999;
	var qsnow=qs[0];
	
	var sum1;
	
	colorit1();
	
	////color library start
	for(var n = 0; n< qs.length; n++){
		qsnow=qs[n];
		var qsnowdotss=library[n];
		var qsnowdots=qsnowdotss.getElementsByTagName("div");
		
		for (var m = 0 ; m<9; m++){
			var qsnowdot=qsnowdots[m];
			if(qsnow[m]==1){qsnowdot.style.backgroundColor="transparent";}
				else{qsnowdot.style.backgroundColor="grey"}
		}
	}
	
	////					   
						   
	function colorit1(){
		for(var i=0;i<9;i++){
			if(d1vl[i]==1){dots1[i].style.backgroundColor="transparent";}
			else{dots1[i].style.backgroundColor="grey"}
	}
		for(var i=0;i<9;i++){
			if(i<step1){lights1[i].style.background="grey";}
			else{lights1[i].style.backgroundColor="transparent"}
		}
	}
	
	function colorit2(i){
		if(d2vl[rsu2[i]]==1){dots2[rsu2[i]].style.backgroundColor="transparent";}
		else{dots2[rsu2[i]].style.backgroundColor="grey"}
	}
	////					   
						   

	////
	function fuckthis1(u) {
	  rsu1 = rs1[u];
		if(step1!=0)
		{step1=step1-1;
	  		for (var i = 0; i < 5; i++) {
	    		d1vl[rsu1[i]] = d1vl[rsu1[i]] * -1;
	    		//dots1[rsu[i]].innerHTML=vl[rsu[i]];
	    		//document.getElementById("text").innerHTML=u;
	  		}
		}
		colorit1();
		if (step1 < 1) {
		  let sum1 = d1vl.reduce((acc, val) => acc + val, 0);

		  if (sum1 === 9 && qsnow !== qs[0]) {
		    g++;
		    setTimeout(() => loadqs(g), 500);
		    sum1 = -1; // to avoid a bug
		  }
		}

		if (step1 === 0) {
		  setTimeout(() => loadqs(g), 500);
		}
	}
	////
	

	function fuckthis2(u) {
	  rsu2 = rs2[u];
	  for (var i = 0; i < 5; i++) {
	    d2vl[rsu2[i]] = d2vl[rsu2[i]] * -1;
	    //dots1[rsu[i]].innerHTML=vl[rsu[i]];
	    //document.getElementById("text").innerHTML=u;
	    colorit2(i);
	  }
	}
	////
	
	function loadqs(g) {
	  qsnow = qs[g];
	  rsu1 = rs1[g];
	  for (var i = 0; i < 9; i++) {
	    d1vl[i] = qsnow[i];
	  }
	step1=qsnow[9];
	  colorit1();
	}
	
	
	
	////onclicks////
	
	for (var i = 0; i < dots1.length; i++) {
	  dots1[i].onclick = (function (index) {
		return function () {
		   u = index;
		   fuckthis1(u);
		};
	  })(i);
	}
	////
	for (var i = 0; i < dots2.length; i++) {
	  dots2[i].onclick = (function (index) {
	    return function () {
	      u = index;
	      fuckthis2(u);
	    };
	  })(i);
	}
	////
	
	
	
	for (var i = 0; i < library.length; i++) {
	  library[i].onclick = (function (index) {
	    return function () {
	      g = index;
	      loadqs(g);
	    };
	  })(i);
	}
			


	}

