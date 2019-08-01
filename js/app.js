//button clicked
//$('.search-button').click(display(){
	//alert("Sandeep");
//})

var display = function(){

	var linksElement = $('#links');
	var searchString = $('#searchString').val();
	console.log(searchString);
	var wikiurl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString +'&format=json&callback=wikiCallback';

	$.ajax({
		url: wikiurl,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(res){
			var linkLists = res[1];
			linkLists.forEach(function(item){
				//console.log(linkLists);
				var url = 'https://en.wikipedia.org/wiki/'+ item;
				linksElement.append('<li><a href="'+ url +'">'+ item +'</ul>');
			})


		}
	});
	return false;
};

$('#form').submit(display);