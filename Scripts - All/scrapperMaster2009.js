// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"26-Dec-09":40174,
"19-Dec-09":40167,
"12-Dec-09":40160,
"5-Dec-09":40153,
"28-Nov-09":40146,
"21-Nov-09":40139,
"14-Nov-09":40132,
"7-Nov-09":40125,
"31-Oct-09":40118,
"24-Oct-09":40111,
"17-Oct-09":40104,
"10-Oct-09":40097,
"3-Oct-09":40090,
"26-Sep-09":40083,
"19-Sep-09":40076,
"12-Sep-09":40069,
"5-Sep-09":40062,
"29-Aug-09":40055,
"22-Aug-09":40048,
"15-Aug-09":40041,
"8-Aug-09":40034,
"1-Aug-09":40027,
"25-Jul-09":40020,
"18-Jul-09":40013,
"11-Jul-09":40006,
"4-Jul-09":39999,
"27-Jun-09":39992,
"20-Jun-09":39985,
"13-Jun-09":39978,
"6-Jun-09":39971,
"30-May-09":39964,
"23-May-09":39957,
"16-May-09":39950,
"9-May-09":39943,
"2-May-09":39936,
"25-Apr-09":39929,
"18-Apr-09":39922,
"11-Apr-09":39915,
"4-Apr-09":39908,
"28-Mar-09":39901,
"21-Mar-09":39894,
"14-Mar-09":39887,
"7-Mar-09":39880,
"28-Feb-09":39873,
"21-Feb-09":39866,
"14-Feb-09":39859,
"7-Feb-09":39852,
"31-Jan-09":39845,
"24-Jan-09":39838,
"17-Jan-09":39831,
"10-Jan-09":39824,
"3-Jan-09":39817
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2009.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')