document.getElementsByClassName('note')[0].getElementsByTagName('button')[0].addEventListener('click', function () {
	let postForm = document.getElementsByClassName('mk-post-form')[0];
	let button = document.createElement('button');
	button.classList.add('fugu10');
	button.setAttribute('title', '10連ふぐぱんち！');
	let i = document.createElement('i');
	let svg = createElementFromHTML('<svg aria-hidden="true" data-prefix="far" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-smile fa-w-16"><path data-v-ecef0a18="" fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>');
	i.innerHTML = '<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248 - 111 248 - 248S385 8 248 8zm0 448c - 110.3 0 - 200 - 89.7 - 200 - 200S137.7 56 248 56s200 89.7 200 200 - 89.7 200 - 200 200zm - 80 - 216c17.7 0 32 - 14.3 32 - 32s - 14.3 - 32 - 32 - 32 - 32 14.3 - 32 32 14.3 32 32 32zm160 0c17.7 0 32 - 14.3 32 - 32s - 14.3 - 32 - 32 - 32 - 32 14.3 - 32 32 14.3 32 32 32zm4 72.6c - 20.8 25 - 51.5 39.4 - 84 39.4s - 63.2 - 14.3 - 84 - 39.4c - 8.5 - 10.2 - 23.7 - 11.5 - 33.8 - 3.1 - 10.2 8.5 - 11.5 23.6 - 3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9 - 20.6 120.9 - 56.6c8.5 - 10.2 7.1 - 25.3 - 3.1 - 33.8 - 10.1 - 8.4 - 25.3 - 7.1 - 33.8 3.1z"></path>';
	svg.appendChild(i);
	button.appendChild(svg);
	button.addEventListener('click', function () {
		var i = 0;
		document.getElementsByClassName('kao')[0].click();
		var interval = setInterval(function () {
			document.getElementsByClassName('kao')[0].click();
			if (++i == 9) {
				clearInterval(interval);
				setTimeout(function () {
					document.getElementsByClassName('mk-post-form')[0].getElementsByClassName('content')[0].getElementsByTagName('textarea')[0].value += " #フグパンチ10連ガチャ";
				}, 100);
			}
		}, 500);
	});
	postForm.insertBefore(button, document.querySelector('.text-count'));
});
function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstChild;
}