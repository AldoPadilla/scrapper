// Working weeks //
var request = require ('request'),
	cheerio = require('cheerio'),
	chart = [];                              //array


weeks = {
	'24-May': 41784

};

for (week in weeks) {
	var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, function(err, resp, body){
	if(!err && resp.statusCode == 200){
		$ = cheerio.load(body);
		$('table.chart tr', '#chart_body').each(function(){
			//$('.chart_region_selector', '#chart_body').remove().text();
			 var rank = $(this).text().trim().replace(/\s\s+/g, ';');
			 			chart.push(week + ';' + rank);

		});
		console.log(chart);                              //print the urls
	}
});
}
// git.com/mikeal/request for request options //
// ** explained here http://stackoverflow.com/questions/23228086/object-object-has-no-method-attr-when-scraping-with-cheerio-and-nodejs

