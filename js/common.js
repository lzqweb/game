$(".menu").on("click",function(){
	$(".sub_menu").stop().slideToggle();
	$(".gai").stop().toggle();
});

$(".fh").on("click",function(){
	history.go(-1);
})
$("#ret").on("click",function(){
	$(document).scrollTop(0);
})
