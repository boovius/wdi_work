
$(document).ready(function(){
	$('body').click(reshuffle);
	$('body').keypress(function(data){
		console.log(data.keyCode);
		if (data.keyCode === 32){
			resize();
		}
	});
});

names = [
	'alex',
	'beatrice',
	'corey'
];
function addNames(names){
	var element;
	for (i=0; i< names.length; i++){
		element = $('.l' + (i + 1));
		element.html(names[i]);
	}
}

function reshuffle(){
	var elements = $('.root>*:not(.left)');
	for (i=0; i<elements.length; i++){
		$(elements[i]).animate({
		top : Math.random() * 400, 
		right : Math.random() * 600
		});
	}	
}

function resize(){
	var elements = $('.root>*:not(.left)');
	for (i=0; i<elements.length; i++){
		$(elements[i]).animate({
		height : Math.random() * 400, 
		width : Math.random() * 600
		});
	}	
}

/*height 
width */


