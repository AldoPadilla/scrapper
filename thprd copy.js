var request = require('request');
var cheerio = require('cheerio');

week = {
    'Week-3-2-14': 41763,
    'Week-9-2-14': 41770

};

pos = ['1', '2', '3', '4', '5', '6', '7'];

for (pool in week) {
    var url = 'http://www.vgchartz.com/weekly/' + week[pool];
    
    request(url, ( function(pool) {
        return function(err, resp, body) {
            if (err)
                throw err;
            $ = cheerio.load(body);

            $('#chart_body .new_entry').each(function(pos) {
    $(this).find('td').each(function() {
    });
});

            console.log(pool + ',' + pos[0]);
            // TODO: scraping goes here!
        }
    } )(pool));
}