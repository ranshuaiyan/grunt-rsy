	//点击隐藏出现
	$(".btn-primary").on("click",function(){
		$('#night').toggle();
	})

	//面向对象
	function Pop(){
		this.id=obj.id;
		this.width=obj.width;
		this.height=obj.height;
		this.title=obj.title;
		this.content=obj.content;
		this.border=obj.border;
		this.color=obj.color;
		this.shadown=obj.shadown;
		this.textshadown=obj.textShadow;
		this.fontsize=obj.fontsize;
		this.background=obj.background;
		this.backimg=obj.backimg;
		this.AddDom();
	}
	Pop.prototype.AddDom=function(){
		//大div
		this.divs=document.createElement("div");
		this.divs.setAttribute("id",this.id);
		this.divs.setAttribute("class","popover popover-primary fade left in");
		this.divs.style.width=this.width;
		this.divs.style.height=this.height;
		//第一个div
		this.div1=document.createElement("div");
		//h3
		this.h3=document.createElement("h3");
		this.h3.setAttribute("class","popover-title");
		this.text1=document.createTextNode(this.title);
		//第二个div
		this.div2=document.createElement("div");
		this.div2.setAttribute("class","popover-content");
		this.text2=document.createTextNode(this.content);
		
		body.appendChild(this.divs);
		this.divs.appendChild(this.div1);
		this.h3.appendChild(this.text1);
		this.divs.appendChild(this.h3);
		this.divs.appendChild(this.div2);
		this.div2.appendChild(this.text2);
		console.log(this.divs);
	}
	var obj={
		id:"night",
		width:300,
		height:200,
		fontsize:30,
		title:"是我",
		content:"不要熬夜了秃头少女",
		border:"1px solid #000",
		color:"orange",
		background:"#f1f1f1",
		//backimg:"url('images/5.png') center center",
		//shadown:"10px 10px 5px 0px rgba(167,167,229, .7) inset",
		textShadow:"0px 0px 5px #f0f,0px 0px 10px rgba(1,0,1,0.8)",
	}
	var pop1=new Pop(obj);
	
	var ids=document.getElementById(obj["id"]);
	ids.style.width=obj["width"]+"px";
	ids.style.height=obj["height"]+"px";
	ids.style.fontSize=obj["fontsize"]+"px";
	ids.style.border=obj["border"];
	ids.style.color=obj["color"];
	ids.style.boxShadow=obj["shadown"];
	ids.style.textShadow=obj["textShadow"];
	ids.style.backgroundColor=obj["background"];
	ids.style.background=obj["backimg"];
	console.log(pop1);