// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"29-Dec-12":41273,
"22-Dec-12":41266,
"15-Dec-12":41259,
"8-Dec-12":41252,
"1-Dec-12":41245,
"24-Nov-12":41238,
"17-Nov-12":41231,
"10-Nov-12":41224,
"3-Nov-12":41217,
"27-Oct-12":41210,
"20-Oct-12":41203,
"13-Oct-12":41196,
"6-Oct-12":41189,
"29-Sep-12":41182,
"22-Sep-12":41175,
"15-Sep-12":41168,
"8-Sep-12":41161,
"1-Sep-12":41154,
"25-Aug-12":41147,
"18-Aug-12":41140,
"11-Aug-12":41133,
"4-Aug-12":41126,
"28-Jul-12":41119,
"21-Jul-12":41112,
"14-Jul-12":41105,
"7-Jul-12":41098,
"30-Jun-12":41091,
"23-Jun-12":41084,
"16-Jun-12":41077,
"9-Jun-12":41070,
"2-Jun-12":41063,
"26-May-12":41056,
"19-May-12":41049,
"12-May-12":41042,
"5-May-12":41035,
"28-Apr-12":41028,
"21-Apr-12":41021,
"14-Apr-12":41014,
"7-Apr-12":41007,
"31-Mar-12":41000,
"24-Mar-12":40993,
"17-Mar-12":40986,
"10-Mar-12":40979,
"3-Mar-12":40972,
"25-Feb-12":40965,
"18-Feb-12":40958,
"11-Feb-12":40951,
"4-Feb-12":40944,
"28-Jan-12":40937,
"21-Jan-12":40930,
"14-Jan-12":40923,
"7-Jan-12":40916
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2012.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')