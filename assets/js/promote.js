function init(codeImg, codeTitle, codeLink, codeOrder) {
	let imgSource = codeImg.split('/')[5];
	let html = '';
	let order = codeOrder - 1;
	let imgResize = `const item${order}img = \`<source type="image/webp" media="(max-width: 767px)" data-srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220&amp;format=webp" sizes="220px" srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220&amp;format=webp"><source type="image/webp" media="(max-width: 1279px)" data-srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420&amp;format=webp" sizes="220px" srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420&amp;format=webp"><source type="image/webp" media="(min-width: 1280px)" data-srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630&amp;format=webp" sizes="220px" srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630&amp;format=webp"><source data-srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220 220w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420 420w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630 630w" sizes="220px" srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220 220w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420 420w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630 630w"><img data-expand="40" alt="${codeTitle}" data-sizes="auto" src="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630" data-src="https://storage.googleapis.com/www-cw-com-tw/article/202108/article-61269ca458faf.jpg" data-srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220 220w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420 420w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630 630w" class="recommend lazyautosizes lazyloaded" srcset="https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=220 220w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=420 420w, https://image-resizer.cwg.tw/resize/uri/${imgSource}/?w=630 630w" sizes="220px">\`;

`;
	html += `${imgResize}`;
	html += `$('.card__group.card__group--grid .card__item').eq(${order}).attr('href', '${codeLink}');
$('.card__group.card__group--grid .card__item').eq(${order}).children('.card__img').children('picture').html(item${order}img);
$('.card__group.card__group--grid .card__item').eq(${order}).children('.card__body').children('.card__subtitle').text('贊助');
$('.card__group.card__group--grid .card__item').eq(${order}).children('.card__body').children('.card__title').text('${codeTitle}');`;

	$("#sourceCode textarea#javascript").val(html);
}

$("#source").click( function(){
	let codeImg = $("#promote-img").val();
	let codeTitle = $("#promote-title").val();
	let codeLink = $("#promote-link").val();
	let codeOrder = $("#promote-order").val();
	init(codeImg, codeTitle, codeLink, codeOrder);
	$("#sourceCode").show(); 
});
