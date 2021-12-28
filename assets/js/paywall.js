function init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant) {
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
	if ( codeVariant != '' ) {
		Code += "$('.paywall .paywall__body .btn--contained').addClass('sp-custom-c" + codeVariant + "-1');";
		$('.paywall--p0 .paywall__body .btn--contained').addClass('sp-custom-c' + codeVariant + '-1');
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
function init0Btn(codeImg, codeTitle, codeText, codeLink, codeBtn, codeLink2, codeBtn2, codeVariant) {
	var Code = "",
		checks = "",
		check = "";
	checks = codeText.split('\n');
	for (let i = 0; i < checks.length; i++) {
		check += checks[i] + "<br/>";
	}
	$('.paywall--insider .paywall__body .h1').text(codeTitle);
	$('.paywall--insider .paywall__body .essay').html(check);
	$('.paywall--insider .paywall__body .btn--contained').addClass('sp-custom-c' + codeVariant + '-1');
	$('.paywall--insider .paywall__body .btn--contained').text(codeBtn);
	$('.paywall--insider .paywall__body .btn--contained').attr('href', codeLink);
	$('.paywall--insider .paywall__body .btn--outlined').text(codeBtn2);
	$('.paywall--insider .paywall__body .btn--outlined').attr('href', codeLink2);
	$('.paywall--insider .paywall__body img').attr('src', codeImg);
	Code = `let str = \`<div class="paywall__body pt40">
			<div class="h1 font-weight-500 my0">${codeTitle}</div>
			<img class="my30" src="${codeImg}" alt="線上+紙本閱讀">
			<div class="essay mt0-mb1">${check}</div>
			<div class="btn__group">
				<a class="btn btn--outlined" target="_blank" href="${codeLink2}">${codeBtn2}</a>
				<a class="btn btn--contained" target="_blank" href="${codeLink}">${codeBtn}</a>
			</div>
		</div>
		<div class="paywall__footer py40">
			您已經是訂戶？<a class="btn btn--text otherBtn gtmEvent" gtm-name="Paywall_popup_0_login" href="https://www.cw.com.tw/member/home/MemberLogin.action?site=C_paywall&amp;source=paywall_popup_login" target="_blank">登入</a>
		</div>\`\;
document.querySelector('.paywall--p0').classList.add('paywall--insider');
document.querySelector('.paywall--p0').innerHTML = str;`;
	$("#sourceCode textarea#javascript").val(Code);
}
function init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant) {
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
	if ( codeVariant != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').addClass('sp-custom-c" + codeVariant + "-1');";
		$('.paywall--p1 .paywall__item .btn--contained').addClass('sp-custom-c' + codeVariant + '-1');
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
function init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant) {
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
	if ( codeVariant != '' ) {
		Code += "$('.paywall .paywall__item .btn--contained').addClass('sp-custom-c" + codeVariant + "-1');";
		$('.paywall--p2 .paywall__item .btn--contained').addClass('sp-custom-c' + codeVariant + '-1');
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

$('select').on('change', function() {
	if ( this.value == 'p0__btn' ) {
		$('.double__btn--hide').show();
	} else {
		$('.double__btn--hide').hide();
	}
});  

$('#preview').on('click', function(){
	var selectType = $('#pw-type').val(),
		codeImg = $("#pw-img").val(),
		codeTitle = $("#pw-title").val(),
		codeText = $("#pw-textarea").val(),
		codeLink = $("#pw-link").val(),
		codeBtn = $("#pw-btn").val(),
		codeLink2 = $("#pw-link2").val(),
		codeBtn2 = $("#pw-btn2").val(),
		codeVariant = $("#pw-variant").val();
    $("#sourceCode, #previewHtml0, #previewHtml0Btn, #previewHtml1, #previewHtml2").hide(); 
	switch (selectType) {
		case "p0":
			init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$('#previewHtml0').show();
					break;
			}
			break;
		case "p0__btn":
			init0Btn(codeImg, codeTitle, codeText, codeLink, codeBtn, codeLink2, codeBtn2, codeVariant);
			let array = [];
			array.push(codeImg, codeTitle, codeText, codeLink, codeBtn, codeLink2, codeBtn2, codeVariant);
			array = array.filter(function(el) {
				return el.length > 0;
			})
			console.log(array.length);
			switch (array.length) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					if ( codeImg == '' ) {
						$('#pw-img').parent().addClass('form__group--undone');
					}
					if ( codeTitle == '' ) {
						$('#pw-title').parent().addClass('form__group--undone');
					}
					if ( codeText == '' ) {
						$('#pw-textarea').parent().addClass('form__group--undone');
					}
					if ( codeLink == '' ) {
						$('#pw-link').parent().addClass('form__group--undone');
					}
					if ( codeBtn == '' ) {
						$('#pw-btn').parent().addClass('form__group--undone');
					}
					if ( codeLink2 == '' ) {
						$('#pw-link2').parent().addClass('form__group--undone');
					}
					if ( codeBtn2 == '' ) {
						$('#pw-btn2').parent().addClass('form__group--undone');
					}
					if ( codeVariant == '' ) {
						$('#pw-variant').parent().addClass('form__group--undone');
					}
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$('#previewHtml0Btn').show();
					break;
			}
			break;
		case "p1":
			init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$('#previewHtml1').show();
					break;
			}
			break;
		case "p2":
			init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
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
		codeLink2 = $("#pw-link2").val(),
		codeBtn2 = $("#pw-btn2").val(),
		codeVariant = $("#pw-variant").val();
    $("#sourceCode, #previewHtml0, #previewHtml0Btn, #previewHtml1, #previewHtml2").hide();
	switch (selectType) {
		case "p0":
			init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					$("#sourceCss0Btn").hide(); 
					break;
			}
			break;
		case "p0__btn":
			init0Btn(codeImg, codeTitle, codeText, codeLink, codeBtn, codeLink2, codeBtn2, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					$("#sourceCss0Btn").show(); 
					break;
			}
			break;
		case "p1":
			init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					$("#sourceCss0Btn").hide(); 
					break;
			}
			break;
		case "p2":
			init2(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant);
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$("#sourceCode").show(); 
					$("#sourceCss0Btn").hide(); 
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
