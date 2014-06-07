// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"25-Dec-10":40538,
"18-Dec-10":40531,
"11-Dec-10":40524,
"4-Dec-10":40517,
"27-Nov-10":40510,
"20-Nov-10":40503,
"13-Nov-10":40496,
"6-Nov-10":40489,
"30-Oct-10":40482,
"23-Oct-10":40475,
"16-Oct-10":40468,
"9-Oct-10":40461,
"2-Oct-10":40454,
"25-Sep-10":40447,
"18-Sep-10":40440,
"11-Sep-10":40433,
"4-Sep-10":40426,
"28-Aug-10":40419,
"21-Aug-10":40412,
"14-Aug-10":40405,
"7-Aug-10":40398,
"31-Jul-10":40391,
"24-Jul-10":40384,
"17-Jul-10":40377,
"10-Jul-10":40370,
"3-Jul-10":40363,
"26-Jun-10":40356,
"19-Jun-10":40349,
"12-Jun-10":40342,
"5-Jun-10":40335,
"29-May-10":40328,
"22-May-10":40321,
"15-May-10":40314,
"8-May-10":40307,
"1-May-10":40300,
"24-Apr-10":40293,
"17-Apr-10":40286,
"10-Apr-10":40279,
"3-Apr-10":40272,
"27-Mar-10":40265,
"20-Mar-10":40258,
"13-Mar-10":40251,
"6-Mar-10":40244,
"27-Feb-10":40237,
"20-Feb-10":40230,
"13-Feb-10":40223,
"6-Feb-10":40216,
"30-Jan-10":40209,
"23-Jan-10":40202,
"16-Jan-10":40195,
"9-Jan-10":40188,
"2-Jan-10":40181
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2010.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')