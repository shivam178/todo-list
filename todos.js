$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"solid"	
	// 	});
	// }
	// else{	
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// 	}); 
	// }
});
//delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); 
	event.stopPropagation();
});
//hide input
$("i").on("click",function(){
	$("input[type='text']").fadeToggle(500);
});

//add todo
$("input[type='text']").on("keypress",function(e){
	if(e.keyCode===13){
		var TodoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+TodoText+"</li>");
	}
}) ;