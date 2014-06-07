// Working file for multiple Weeks... //


var request = require ('request'),
	cheerio = require('cheerio'),
	chart = [];                              //array


weeks = {
	'24-May': 41784,
	'00-October': 41777


};



for (week in weeks) {
	var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
	if(!err && resp.statusCode == 200){
		$ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';');
			 			chart.push(rank);

              		console.log(week + ';' + rank);                              //print the urls


		});
	}
};
})(week));
}
// git.com/mikeal/request for request options //
// ** explained here http://stackoverflow.com/questions/23228086/object-object-has-no-method-attr-when-scraping-with-cheerio-and-nodejs
