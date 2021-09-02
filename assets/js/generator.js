var host = "http://" + window.location.host + "/insider/";
// var host = "http://" + window.location.host + "/";
$("#edmType").change(function () {
	document.location.href = host + $(this).val() + ".html";
});

$("button").click(function(){
    $(this).siblings('textarea').select();
    document.execCommand('copy');
});
