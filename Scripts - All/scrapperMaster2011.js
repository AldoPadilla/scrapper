// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"31-Dec-11":40909,
"24-Dec-11":40902,
"17-Dec-11":40895,
"10-Dec-11":40888,
"3-Dec-11":40881,
"26-Nov-11":40874,
"19-Nov-11":40867,
"12-Nov-11":40860,
"5-Nov-11":40853,
"29-Oct-11":40846,
"22-Oct-11":40839,
"15-Oct-11":40832,
"8-Oct-11":40825,
"1-Oct-11":40818,
"24-Sep-11":40811,
"17-Sep-11":40804,
"10-Sep-11":40797,
"3-Sep-11":40790,
"27-Aug-11":40783,
"20-Aug-11":40776,
"13-Aug-11":40769,
"6-Aug-11":40762,
"30-Jul-11":40755,
"23-Jul-11":40748,
"16-Jul-11":40741,
"9-Jul-11":40734,
"2-Jul-11":40727,
"25-Jun-11":40720,
"18-Jun-11":40713,
"11-Jun-11":40706,
"4-Jun-11":40699,
"28-May-11":40692,
"21-May-11":40685,
"14-May-11":40678,
"7-May-11":40671,
"30-Apr-11":40664,
"23-Apr-11":40657,
"16-Apr-11":40650,
"9-Apr-11":40643,
"2-Apr-11":40636,
"26-Mar-11":40629,
"19-Mar-11":40622,
"12-Mar-11":40615,
"5-Mar-11":40608,
"26-Feb-11":40601,
"19-Feb-11":40594,
"12-Feb-11":40587,
"5-Feb-11":40580,
"29-Jan-11":40573,
"22-Jan-11":40566,
"15-Jan-11":40559,
"8-Jan-11":40552,
"1-Jan-11":40545
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2011.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')