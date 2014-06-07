// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"28-Dec-13":41637,
"21-Dec-13":41630,
"14-Dec-13":41623,
"7-Dec-13":41616,
"30-Nov-13":41609,
"23-Nov-13":41602,
"16-Nov-13":41595,
"9-Nov-13":41588,
"2-Nov-13":41581,
"26-Oct-13":41574,
"19-Oct-13":41567,
"12-Oct-13":41560,
"5-Oct-13":41553,
"28-Sep-13":41546,
"21-Sep-13":41539,
"14-Sep-13":41532,
"7-Sep-13":41525,
"31-Aug-13":41518,
"24-Aug-13":41511,
"17-Aug-13":41504,
"10-Aug-13":41497,
"3-Aug-13":41490,
"27-Jul-13":41483,
"20-Jul-13":41476,
"13-Jul-13":41469,
"6-Jul-13":41462,
"29-Jun-13":41455,
"22-Jun-13":41448,
"15-Jun-13":41441,
"8-Jun-13":41434,
"1-Jun-13":41427,
"25-May-13":41420,
"18-May-13":41413,
"11-May-13":41406,
"4-May-13":41399,
"27-Apr-13":41392,
"20-Apr-13":41385,
"13-Apr-13":41378,
"6-Apr-13":41371,
"30-Mar-13":41364,
"23-Mar-13":41357,
"16-Mar-13":41350,
"9-Mar-13":41343,
"2-Mar-13":41336,
"23-Feb-13":41329,
"16-Feb-13":41322,
"9-Feb-13":41315,
"2-Feb-13":41308,
"26-Jan-13":41301,
"19-Jan-13":41294,
"12-Jan-13":41287,
"5-Jan-13":41280
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2013.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')