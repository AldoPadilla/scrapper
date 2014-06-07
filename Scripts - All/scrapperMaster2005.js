// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"31-Dec-05":38718,
"24-Dec-05":38711,
"17-Dec-05":38704,
"10-Dec-05":38697,
"3-Dec-05":38690,
"26-Nov-05":38683,
"19-Nov-05":38676,
"12-Nov-05":38669,
"5-Nov-05":38662,
"29-Oct-05":38655,
"22-Oct-05":38648,
"15-Oct-05":38641,
"8-Oct-05":38634,
"1-Oct-05":38627,
"24-Sep-05":38620,
"17-Sep-05":38613,
"10-Sep-05":38606,
"3-Sep-05":38599,
"27-Aug-05":38592,
"20-Aug-05":38585,
"13-Aug-05":38578,
"6-Aug-05":38571,
"30-Jul-05":38564,
"23-Jul-05":38557,
"16-Jul-05":38550,
"9-Jul-05":38543,
"2-Jul-05":38536,
"25-Jun-05":38529,
"18-Jun-05":38522,
"11-Jun-05":38515,
"4-Jun-05":38508,
"28-May-05":38501,
"21-May-05":38494,
"14-May-05":38487,
"7-May-05":38480,
"30-Apr-05":38473,
"23-Apr-05":38466,
"16-Apr-05":38459,
"9-Apr-05":38452,
"2-Apr-05":38445,
"26-Mar-05":38438,
"19-Mar-05":38431,
"12-Mar-05":38424,
"5-Mar-05":38417,
"26-Feb-05":38410,
"19-Feb-05":38403,
"12-Feb-05":38396,
"5-Feb-05":38389,
"29-Jan-05":38382,
"22-Jan-05":38375,
"15-Jan-05":38368,
"8-Jan-05":38361,
"1-Jan-05":38354
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2005.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')