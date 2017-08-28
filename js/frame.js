$(function(){
	$(".checkbox__input").click(function(){
		var input = $(this).find(".checkbox__original");
		var isChecked =  input.prop('checked');
		input.prop('checked', !isChecked)
		if(input.prop('checked')){
			$(this).addClass('is-checked')
		}else{
			$(this).removeClass('is-checked')
		}
	})
})
