$(function() {

	$('.carousel').carousel();

});

// Template

$(function() {
	
	var html = $('#test').html();
	
	var info = [{
		title: 'OLGA DUBYNKA',
		content: 'GoFE course'
		
		},
		{
		title: "I like to study front dev, cause:",
		itemOne: "it's really interesting",
		itemTwo: "I want to create web apps",
		itemThree: "I want to find a job in IT"

		},
		{
		title: "Feedback",
		content: '+380663905400'
		}
	];

	var content = tmpl(html, {
		data: info
	});

	$('body').append(content); 
});


