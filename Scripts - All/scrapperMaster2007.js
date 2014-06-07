// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"29-Dec-07":39446,
"22-Dec-07":39439,
"15-Dec-07":39432,
"8-Dec-07":39425,
"1-Dec-07":39418,
"24-Nov-07":39411,
"17-Nov-07":39404,
"10-Nov-07":39397,
"3-Nov-07":39390,
"27-Oct-07":39383,
"20-Oct-07":39376,
"13-Oct-07":39369,
"6-Oct-07":39362,
"29-Sep-07":39355,
"22-Sep-07":39348,
"15-Sep-07":39341,
"8-Sep-07":39334,
"1-Sep-07":39327,
"25-Aug-07":39320,
"18-Aug-07":39313,
"11-Aug-07":39306,
"4-Aug-07":39299,
"28-Jul-07":39292,
"21-Jul-07":39285,
"14-Jul-07":39278,
"7-Jul-07":39271,
"30-Jun-07":39264,
"23-Jun-07":39257,
"16-Jun-07":39250,
"9-Jun-07":39243,
"2-Jun-07":39236,
"26-May-07":39229,
"19-May-07":39222,
"12-May-07":39215,
"5-May-07":39208,
"28-Apr-07":39201,
"21-Apr-07":39194,
"14-Apr-07":39187,
"7-Apr-07":39180,
"31-Mar-07":39173,
"24-Mar-07":39166,
"17-Mar-07":39159,
"10-Mar-07":39152,
"3-Mar-07":39145,
"24-Feb-07":39138,
"17-Feb-07":39131,
"10-Feb-07":39124,
"3-Feb-07":39117,
"27-Jan-07":39110,
"20-Jan-07":39103,
"13-Jan-07":39096,
"6-Jan-07":39089
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2007.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')