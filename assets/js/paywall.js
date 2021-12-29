function init0(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant) {
	let init = `<div class="paywall__header">
		您已經是訂戶？<a class="btn btn--text otherBtn" gtm-name="Paywall_popup_0_login" href="https://www.cw.com.tw/member/home/MemberLogin.action?site=C_paywall&amp;source=paywall_popup_login" target="_blank">登入</a>
	</div>
	<div class="paywall__body">
		<img src="https://www.cw.com.tw/images/secant/webaccess-pe@2x.png" alt="線上+紙本閱讀">
		<div class="h1 font-weight-500 mt20 mb0">訂閱天下　無限暢讀</div>
		<ul class="check">
			<li>天下全閱讀：不限篇數暢讀天下雜誌網站和APP</li>
			<li>每日編輯精選推薦：整理全球焦點要聞、產業脈動</li>
			<li>串聯頂尖媒體：國際合作夥伴，提供您全面的觀點</li>
		</ul>
		<a id="paywall_box_l0_a_tag" class="btn btn--contained" gtm-name="Paywall_popup_0_sub" target="_blank" href="https://www.cw.com.tw/payment?source=paywall0">查看訂閱方案</a>
	</div>
	<div class="separation separation--or"><span>或</span></div>
	<div class="paywall__footer">
		繼續閱讀此篇文章<a href="#!" class="btn--text">加入會員</a>
	</div>`;
	$('.paywall--p0').html(init);
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
	let init = `<div class="paywall__header">
		您已經是訂戶？<a class="btn btn--text otherBtn" gtm-name="Paywall_popup_0_login" href="https://www.cw.com.tw/member/home/MemberLogin.action?site=C_paywall&amp;source=paywall_popup_login" target="_blank">登入</a>
	</div>
	<div class="paywall__body">
		<img src="https://www.cw.com.tw/images/secant/webaccess-pe@2x.png" alt="線上+紙本閱讀">
		<div class="h1 font-weight-500 mt20 mb0">訂閱天下　無限暢讀</div>
		<ul class="check">
			<li>天下全閱讀：不限篇數暢讀天下雜誌網站和APP</li>
			<li>每日編輯精選推薦：整理全球焦點要聞、產業脈動</li>
			<li>串聯頂尖媒體：國際合作夥伴，提供您全面的觀點</li>
		</ul>
		<a id="paywall_box_l0_a_tag" class="btn btn--contained" gtm-name="Paywall_popup_0_sub" target="_blank" href="https://www.cw.com.tw/payment?source=paywall0">查看訂閱方案</a>
	</div>
	<div class="separation separation--or"><span>或</span></div>
	<div class="paywall__footer">
		繼續閱讀此篇文章<a href="#!" class="btn--text">加入會員</a>
	</div>`;
	$('.paywall--p0').html(init);

	$('.paywall--insider .h1').removeClass('mt20 mb0').addClass('my0');
	$('.paywall--insider img').addClass('my30');
	$('.paywall--insider .check').addClass('mt0-mb1');
	$(`<div class="btn__group"></div>`).insertAfter('.check');
	$('.paywall--insider .paywall__body .btn').appendTo(".btn__group");
	var Code = "",
		checks = "",
		check = "";
	checks = codeText.split('\n');
	for (let i = 0; i < checks.length; i++) {
		check += "<li>" + checks[i] + "</li>";
	}
	if ( codeTitle != '' ) {
		$('.paywall--insider .paywall__body .h1').text(codeTitle);
	}
	if ( codeText != '' ) {
		$('.paywall--insider .paywall__body .check').html(check);
	}
	if ( codeVariant != '' ) {
		$('.paywall--insider .paywall__body .btn--contained').addClass('sp-custom-c' + codeVariant + '-1');
	}
	if ( codeBtn != '' ) {
		$('.paywall--insider .paywall__body .btn--contained').text(codeBtn);
	}
	if ( codeLink != '' ) {
		$('.paywall--insider .paywall__body .btn--contained').attr('href', codeLink);
	}
	if ( codeImg != '' ) {
		$('.paywall--insider .paywall__body img').attr('src', codeImg);
	}
	Code += `$('.paywall--p0').addClass('paywall--insider');
$('.paywall--insider .h1').removeClass('mt20 mb0').addClass('my0');
$('.paywall--insider img').addClass('my30');
$('.paywall--insider .check').addClass('mt0-mb1');
$(\`<div class="btn__group"></div>\`).insertAfter('.check');
$('.paywall--insider .paywall__body .btn').appendTo(".btn__group");
`;
	if ( codeBtn2 != '' && codeLink2 != '' ) {
		let newBtn = `<a class="btn btn--outlined" target="_blank" href="${codeLink2}">${codeBtn2}</a>`;
		$(newBtn).prependTo(".btn__group");
		Code += `let newBtn = \`<a class="btn btn--outlined" target="_blank" href="${codeLink2}">${codeBtn2}</a>\`\;
$(newBtn).prependTo(".btn__group");`;
	}
	$("#sourceCode textarea#javascript").val(Code);
}
function init1(codeImg, codeTitle, codeText, codeLink, codeBtn, codeVariant) {
	let init = `<div class="paywall__item paywall__item--text">
		<div class="h1 font-weight-500 mt0 mb10">免費閱讀篇數已達上限</div>
		<div class="paywall__text mb10">
			每日4元，投資更好的自己<br/>首購優惠12週 $399
		</div>
		<a id="paywall_box_content_l1_a_tag" class="btn btn--contained" href="https://www.cw.com.tw/payment?source=paywall1">查看訂閱方案</a>
	</div>
	<div class="paywall__item paywall__item--img">
		<img src="https://www.cw.com.tw/images/secant/webaccess-pe@2x.png" width="100%" alt="線上+紙本閱讀">
	</div>`;
	$('.paywall--p1').html(init);

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
	let init = `<div class="paywall__item paywall__item--text">
		<div class="h1 font-weight-500 mt0 mb10">此篇為訂戶限定文章</div>
		<div class="paywall__text mb10">
			每日4元，投資更好的自己<br/>首購優惠12週 $399
		</div>
		<a id="paywall_box_content_l2_a_tag" class="btn btn--contained" href="https://www.cw.com.tw/payment?source=paywall1">查看訂閱方案</a>
	</div>
	<div class="paywall__item paywall__item--img">
		<img src="https://www.cw.com.tw/images/secant/webaccess-pe@2x.png" width="100%" alt="線上+紙本閱讀">
	</div>`;
	$('.paywall--p2').html(init);

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
			switch (codeVariant) {
				case "":
					$('#pw-variant').parent().addClass('form__group--undone');
					break;
				default:
					$('#pw-variant').parent().removeClass('form__group--undone');
					$('#previewHtml0Btn').show();
					break;
			}
			if ( codeBtn2 != '' && codeLink2 == '' ) {
				$('#pw-link2').parent().addClass('form__group--undone');
				$('#previewHtml0Btn').hide();
				return;
			}
			if ( codeBtn2 == '' && codeLink2 != '' ) {
				$('#pw-btn2').parent().addClass('form__group--undone');
				$('#previewHtml0Btn').hide();
				return;
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
	if ( this.value == 'p0__btn' ) {
		$('.double__btn--hide').show();
	} else {
		$('.double__btn--hide').hide();
	}
	$(this).parent().removeClass("select__group--undone");
	$(this).siblings().text("");
});

$("input.form__group__input").change(function() {
	$(this).parent().removeClass("form__group--undone");
});
