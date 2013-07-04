$.ajax('/api/resumes', {
	complete : function(response)
	var resume = response.responseJSON[0];
	{h1.attr('data-id', resume.id)


$('a').click(functino(){
	var id = $('h1').data('id');
	/* var id = $('h1').attr('data-id');  - same as above */

	$.ajax({
		url : 'api?resumes/'+id,
		type : 'DELETE'
		complete : function() {
			window.location = window.location; /* refreshes page */
		}
	});
})
