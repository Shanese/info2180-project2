var emptytile=15;
var count=0;
var str;
var moving=false;
var add=0;
var tiles1;//array of tiles
var direct="none";

window.onload =function(){
	var tiles = document.getElementById('puzzlearea').getElementByTagName('div');
	tiles1=tiles;
	var botton = document.getElementById('shufflebutton');
	botton.onclick=shuffle();

	for(var i=0; i<tiles.length;i++){
		tiles[i].className = 'puzzlepiece';
		tiles[i].onmouseover = movable;
		tiles[i].onmouseout = stopMove;
		tiles[i].onclick = moveTile;

		if(i>=0 && i<=3){
			tiles[i].style.left+=i*100+'px';
			tiles[i].style.top=0+'px';
			tiles[i].style.backgroundPosition = -i*100+'px '+'0px';
		}else if(i>=4 && i<=7){
			tiles[i].style.left+=(i-4)*100+'px';
			tiles[i].style.top=100+'px';
			tiles[i].style.backgroundPosition = -(i-4)*100+'px '+'-100px';
		}else if(i>=8 && i<=11){
			tiles[i].style.left+=(i-8)*100+'px';
			tiles[i].style.top=200+'px';
			tiles[i].style.backgroundPosition = -(i-8)*100+'px '+'-200px';
		}else{
			tiles[i].style.left+=(i-12)*100+'px';
			tiles[i].style.top=300+'px';
			tiles[i].style.backgroundPosition = -(i-12)*100+'px '+'-300px';
		}
	}
}

function stopMove(){
	this.className = 'puzzlepiece';
}

function movableCheck(tile){
	if((parseInt(tile.style.left)+parseInt(tile.offsetWidth)) === parseInt(getX()) && elmt.style.top===getY()){
		direct="right";
		return "right";
	}else if(parseInt(tile.style.left) === (parseInt(getX())+parseInt(tile.offsetWidth)) && elmt.style.top===getY()){
		direct= "left";
		return "left";
	}else if((parseInt(tile.style.top)+parseInt(tile.offsetHeight)) === parseInt(getY()) && elmt.style.left===getX()){
		direct= "down";
		return "down";
	}else if(parseInt(tile.style.top) === (parseInt(getY())+parseInt(tile.offsetHeight)) && elmt.style.left===getX()){
		direct= "up";
		return "up";
	}else{
		direct= "none";
		return "none";
	}

}

function movable(){
	if(!moving){
		if((parseInt(this.style.left)+parseInt(this.offsetWidth)) === parseInt(getX()) && this.style.top===getY()){
		this.className = this.className + " movablepiece";
		direct="right";
		}else if(parseInt(this.style.left) === (parseInt(getX())+parseInt(this.offsetWidth)) && this.style.top===getY()){
			this.className = this.className + " movablepiece";
			direct= "left";
		}else if((parseInt(this.style.top)+parseInt(this.offsetHeight)) === parseInt(getY()) && this.style.left===getX()){
			this.className = this.className + " movablepiece";
			direct= "down";
		}else if(parseInt(this.style.top) === (parseInt(getY())+parseInt(this.offsetHeight)) && this.style.left===getX()){
			this.className = this.className + " movablepiece";
			direct= "up";
		}else{
			direct= "none";
		}
	}
	

}

function moveTile(){
	if(!moving){
		if(direct === "right"){
			count=1;
			emptytile-=1;
			str=this.textContent;
			shift();
		}else if(direct === "left"){
			count=-1;
			emptytile+=1;
			str=this.textContent;
			shift();
		}else if(direct === "down"){
			count=1;
			emptytile-=4;
			str=this.textContent;
			shift();
		}else if(direct === "up"){
			count=-1;
			emptytile+=4;
			str=this.textContent;
			shift();
		}
	}

}

function shift(){
	var x = 0;
	for(var i=0; i<tilees1.length;i++){
		if(tiles1[i].textContent===str){
			x=i;	
		}
	}
}

if(add!=100){
		if(direct==="left" || direct==="right"){
			tiles1[x].style.left=parseInt(tiles1[x].style.left)+counter+'px';
		}else{
			tiles1[x].style.top=parseInt(tiles1[x].style.top)+counter+'px';
		}
		add+=1;
		moving=true;
		setTimeout("shift()", "1 * 1000");
	}else{
		add=0;
		moving=false;
		direct="none";
	}	
	
}

var moveTile1 = function(tile){

	if(direct === "right"){
		tile.style.left=parseInt(tile.style.left)+100+'px';
		space-=1;
	}else if(direct === "left"){
		tile.style.left=parseInt(tile.style.left)-100+'px';
		space+=1;
	}else if (direct === 'down'){
		tile.style.top=parseInt(tile.style.top)+100+'px';
		space-=4;
	}else if(direct === 'up'){
		tile.style.top=parseInt(tile.style.top)-100+'px';
		space+=4;
	}
}

function shuffle(){
	var num=100;
	for(var i =0; i<num; i++){
		var lst = [];
		for(var y =0; y<tiles1.length; y++){
			if(movableCheck(tiles1[y])!="none"){
				lst.push(y);
			}

		}
		if(lst.length!=0){
			var x = lst[Math.floor((Math.random()*lst.length)+0)];
			movableCheck(tiles1[x]);
			moveTile1(tiles1[x]);
		}
	}
	direct="none";
}

function getX(){
		if(emptytile>=0 && emptytile<=3){
			return emptytile*100+'px';
		}else if(emptytile>=4 && emptytile<=7){
			return (emptytile-4)*100+'px';
			
		}else if(emptytile>=8 && emptytile<=11){
			return (emptytile-8)*100+'px';
			
		}else{
			return (emptytile-12)*100+'px';
			
		}
	
}

function getY(){
	if(emptytile>=0 && emptytile<=3){
			return '0px';
		}else if(emptytile>=4 && emptytile<=7){
			return '100px';
			
		}else if(emptytile>=8 && emptytile<=11){
			return '200px';
			
		}else{
			return '300px';
			
		}
}


$(document).ready(function (e) {
	console.log("in ajax");
	$("#uploadimage").on('submit',(function(e) {
		e.preventDefault();
		$("#message").empty();
		$('#loading').show();
		$.ajax({
		url: "fifteen.php", // Url to which the request is send
		type: "POST",             // Type of request to be send, called as method
		data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
		contentType:false,       // The content type used when sending data to the server.
		cache:false,             // To unable request pages to be cached
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		success:function(data)   // A function to be called if request succeeds
		{
			$('#loading').hide();
			$("#message").html(data);
		}
	});
}));




// Image preview after check
$(function() {
	$("#file").change(function() {
	$("#message").empty(); // removing error message
	var file = this.files[0];
	var imagefile = file.type;
	var match= ["image/jpeg","image/png","image/jpg"];
	if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
		{
			$('#previewing').attr('src','noimage.png');

			$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
			return false;
		}
		else
			{
				var reader = new FileReader();
				reader.onload = imageIsLoaded;
				reader.readAsDataURL(this.files[0]);
			}
		});
});
function imageIsLoaded(e) {
	$("#file").css("color","green");
	$('#image_preview').css("display", "block");
	$('#previewing').attr('src', e.target.result);
	$('#previewing').attr('width', '250px');
	$('#previewing').attr('height', '230px');
};
});
