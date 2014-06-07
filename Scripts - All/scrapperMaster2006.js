// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"30-Dec-06":39082,
"23-Dec-06":39075,
"16-Dec-06":39068,
"9-Dec-06":39061,
"2-Dec-06":39054,
"25-Nov-06":39047,
"18-Nov-06":39040,
"11-Nov-06":39033,
"4-Nov-06":39026,
"28-Oct-06":39019,
"21-Oct-06":39012,
"14-Oct-06":39005,
"7-Oct-06":38998,
"30-Sep-06":38991,
"23-Sep-06":38984,
"16-Sep-06":38977,
"9-Sep-06":38970,
"2-Sep-06":38963,
"26-Aug-06":38956,
"19-Aug-06":38949,
"12-Aug-06":38942,
"5-Aug-06":38935,
"29-Jul-06":38928,
"22-Jul-06":38921,
"15-Jul-06":38914,
"8-Jul-06":38907,
"1-Jul-06":38900,
"24-Jun-06":38893,
"17-Jun-06":38886,
"10-Jun-06":38879,
"3-Jun-06":38872,
"27-May-06":38865,
"20-May-06":38858,
"13-May-06":38851,
"6-May-06":38844,
"29-Apr-06":38837,
"22-Apr-06":38830,
"15-Apr-06":38823,
"8-Apr-06":38816,
"1-Apr-06":38809,
"25-Mar-06":38802,
"18-Mar-06":38795,
"11-Mar-06":38788,
"4-Mar-06":38781,
"25-Feb-06":38774,
"18-Feb-06":38767,
"11-Feb-06":38760,
"4-Feb-06":38753,
"28-Jan-06":38746,
"21-Jan-06":38739,
"14-Jan-06":38732,
"7-Jan-06":38725
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2006.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')