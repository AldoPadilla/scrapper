var request = require ('request'),
	cheerio = require('cheerio'),
	chart = [];                              //array


weeks = {
	'week-x': 41784,
    'week-y': 41777

};

for (week in weeks) {
	var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, function(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		$('tr', '#chart_body').prepend('tr tr', '#chart_body').each(function(){
			var rank = $(this).text().trim().replace(/\s\s+/g, ';');
			chart.push(rank);
		});
		console.log(chart);                              //print the urls
	}
});
}
// git.com/mikeal/request for request options //
// ** explained here http://stackoverflow.com/questions/23228086/object-object-has-no-method-attr-when-scraping-with-cheerio-and-nodejs

