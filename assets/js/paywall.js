function init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVeriant) {
	var Code = "",
		checks = "",
		check = "";
	checks = codeText.split('\n');
	for (let i = 0; i < checks.length; i++) {
		check += "<li>" + checks[i] + "</li>";
	}
	if ( codeTitle != '' ) {
		Code += "$('.paywall .paywall__body .h1').text('" + codeTitle + "');";
		$('.paywall--p0 .paywall__body .h1').text(codeTitle);
	}
	if ( codeText != '' ) {
		Code += "$('.paywall .paywall__body ul.check').html('" + check + "');";
		$('.paywall--p0 .paywall__body ul.check').html(check);
	}
	if ( codeVeriant != '' ) {
		Code += "$('.paywall .paywall__body .btn--contained').addClass('sp-custom-c" + codeVeriant + "-1');";
		$('.paywall--p0 .paywall__body .btn--contained').addClass('sp-custom-c' + codeVeriant + '-1');
	}
	if ( codeBtn != '' ) {
		Code += "$('.paywall .paywall__body .btn--contained').text('" + codeBtn + "');";
		$('.paywall--p0 .paywall__body .btn--contained').text(codeBtn);
	}
	if ( codeLink != '' ) {
		Code += "$('.paywall .paywall__body .btn--contained').attr('href', '" + codeLink + "');";
		$('.paywall--p0 .paywall__body .btn--contained').attr('href', codeLink);
	}
	if ( codeImg != '' ) {
		Code += "$('.paywall .paywall__body img').attr('src', '" + codeImg + "');";
		$('.paywall--p0 .paywall__body img').attr('src', codeImg);
	}
	$("#sourceCode textarea#javascript").val(Code);
}
function init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVeriant) {
	var Code = "",
		checks = "",
		check = "";
	checks = codeText.split('\n');
	for (let i = 0; i < checks.length; i++) {
		check += checks[i] + "<br/>";
	}
	if ( codeTitle != '' ) {
		Code += "$('.paywall .paywall__item .h1').text('" + codeTitle + "');";
		$('.paywall--p1 .paywall__item .h1').text(codeTitle);
	}
	if ( codeText != '' ) {
		Code += "$('.paywall .paywall__item .paywall__text').html('" + check + "');";
		$('.paywall--p1 .paywall__item .paywall__text').html(check);
	}
	if ( codeVeriant != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').addClass('sp-custom-c" + codeVeriant + "-1');";
		$('.paywall--p1 .paywall__item .btn--contained').addClass('sp-custom-c' + codeVeriant + '-1');
	}
	if ( codeBtn != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').text('" + codeBtn + "');";
		$('.paywall--p1 .paywall__item .btn--contained').text(codeBtn);
	}
	if ( codeLink != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').attr('href', '" + codeLink + "');";
		$('.paywall--p1 .paywall__item .btn--contained').attr('href', codeLink);
	}
	if ( codeImg != '' ) {
		Code += "$('.paywall .paywall__item img').attr('src', '" + codeImg + "');";
		$('.paywall--p1 .paywall__item img').attr('src', codeImg);
	}
	$("#sourceCode textarea#javascript").val(Code);
}
function init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVeriant) {
	var Code = "",
		checks = "",
		check = "";
	checks = codeText.split('\n');
	for (let i = 0; i < checks.length; i++) {
		check += checks[i] + "<br/>";
	}
	if ( codeTitle != '' ) {
		Code += "$('.paywall .paywall__item .h1').text('" + codeTitle + "');";
		$('.paywall--p2 .paywall__item .h1').text(codeTitle);
	}
	if ( codeText != '' ) {
		Code += "$('.paywall .paywall__item .paywall__text').html('" + check + "');";
		$('.paywall--p2 .paywall__item .paywall__text').html(check);
	}
	if ( codeVeriant != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').addClass('sp-custom-c" + codeVeriant + "-1');";
		$('.paywall--p2 .paywall__item .btn--contained').addClass('sp-custom-c' + codeVeriant + '-1');
	}
	if ( codeBtn != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').text('" + codeBtn + "');";
		$('.paywall--p2 .paywall__item .btn--contained').text(codeBtn);
	}
	if ( codeLink != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').attr('href', '" + codeLink + "');";
		$('.paywall--p2 .paywall__item .btn--contained').attr('href', codeLink);
	}
	if ( codeImg != '' ) {
		Code += "$('.paywall .paywall__item img').attr('src', '" + codeImg + "');";
		$('.paywall--p2 .paywall__item img').attr('src', codeImg);
	}
	$("#sourceCode textarea#javascript").val(Code);
}

$('#preview').on('click', function(){
	var selectType = $('#pw-type').val(),
		codeImg = $("#pw-img").val(),
		codeTitle = $("#pw-title").val(),
		codeText = $("#pw-textarea").val(),
		codeLink = $("#pw-link").val(),
		codeBtn = $("#pw-btn").val(),
		codeVariant = $("#pw-veriant").val();
    $("#sourceCode, #previewHtml0, #previewHtml1, #previewHtml2").hide(); 
	switch (selectType) {
		case "p0":
			init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$('#previewHtml0').show();
					break;
			}
			break;
		case "p1":
			init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$('#previewHtml1').show();
					break;
			}
			break;
		case "p2":
			init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$('#previewHtml2').show();
					break;
			}
			break;
		default:
			$('#pw-type').parent().addClass('select__group--undone');
			$('#pw-type').siblings().text('請選擇 Paywall 版本');
			break;
	}
});

$("#source").click( function(){
	var selectType = $('#pw-type').val(),
		codeImg = $("#pw-img").val(),
		codeTitle = $("#pw-title").val(),
		codeText = $("#pw-textarea").val(),
		codeLink = $("#pw-link").val(),
		codeBtn = $("#pw-btn").val(),
		codeVariant = $("#pw-veriant").val();
    $("#sourceCode, #previewHtml0, #previewHtml1, #previewHtml2").hide();
	switch (selectType) {
		case "p0":
			init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					break;
			}
			break;
		case "p1":
			init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					break;
			}
			break;
		case "p2":
			init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-veriant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-veriant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					break;
			}
			break;
		default:
			$('#pw-type').parent().addClass('select__group--undone');
			$('#pw-type').siblings().text('請選擇 Paywall 版本');
			break;
	}
});

$("select").change(function() {
	$(this).parent().removeClass("select__group--undone");
	$(this).siblings().text("");
});
$("input.form__group__input").change(function() {
	$(this).parent().removeClass("form__group--undone");
});
