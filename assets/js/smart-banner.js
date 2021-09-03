function init(codeImg, codeTitle, codeLink, codeBtn) {
	var html = '';
	html += '<div class="smartbanner"><div class="content-wrapper"><div class="ins-selectable-element ins-element-wrap ins-element-close-button smart-banner-close-button smartbanner__close"><div class="ins-element-content"><i class="icon icon-cancel"></i></div></div><div class="adaptive-image ins-selectable-element ins-element-wrap element-image smartbanner__img"><div class="ins-element-content"><a class="ins-element-link" href="';
	html += codeLink;
	html += '"><img src="';
	html += codeImg;
	html += '" class="element-image"></a></div></div><div class="text-container"><div class="adaptive-title ins-selectable-element ins-element-wrap element-text"><strong>';
	html += codeTitle;
	html += '</strong></div></div><div class="adaptive-button ins-selectable-element ins-element-wrap element-button ins-download-button"><div class="ins-element-link ins-element-content editable-text"><a href="';
	html += codeLink;
	html += '" slide-type="none" class="btn btn--contained btn--small"><div class="editable ins-element-editable">';
	html += codeBtn;
	html += '</div></a></div></div></div></div> ';
	var code = '$(\'.breaking\').remove();';
	$('#previewBlock').html(html);
	$("#sourceCode textarea#html").val(html);
	$("#sourceCode textarea#javascript").val(code);
}

$('#preview').on('click', function(){
	var codeImg = $("#sb-img").val(),
		codeTitle = $("#sb-title").val(),
		codeLink = $("#sb-link").val(),
		codeBtn = $("#sb-btn").val();
	init(codeImg, codeTitle, codeLink, codeBtn);
    $("#sourceCode").hide(); 
	$('#previewHtml').show();
});

$("#source").click( function(){
	var codeImg = $("#sb-img").val(),
		codeTitle = $("#sb-title").val(),
		codeLink = $("#sb-link").val(),
		codeBtn = $("#sb-btn").val();
	init(codeImg, codeTitle, codeLink, codeBtn);
    $("#previewHtml").hide();
    $("#sourceCode").show(); 
});
