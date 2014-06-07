// Working file for multiple Weeks... //

var fs = require('fs');
var request = require ('request'),
    cheerio = require('cheerio'),
    chart = [];    

weeks = {
"27-Dec-08":39810,
"20-Dec-08":39803,
"13-Dec-08":39796,
"6-Dec-08":39789,
"29-Nov-08":39782,
"22-Nov-08":39775,
"15-Nov-08":39768,
"8-Nov-08":39761,
"1-Nov-08":39754,
"25-Oct-08":39747,
"18-Oct-08":39740,
"11-Oct-08":39733,
"4-Oct-08":39726,
"27-Sep-08":39719,
"20-Sep-08":39712,
"13-Sep-08":39705,
"6-Sep-08":39698,
"30-Aug-08":39691,
"23-Aug-08":39684,
"16-Aug-08":39677,
"9-Aug-08":39670,
"2-Aug-08":39663,
"26-Jul-08":39656,
"19-Jul-08":39649,
"12-Jul-08":39642,
"5-Jul-08":39635,
"28-Jun-08":39628,
"21-Jun-08":39621,
"14-Jun-08":39614,
"7-Jun-08":39607,
"31-May-08":39600,
"24-May-08":39593,
"17-May-08":39586,
"10-May-08":39579,
"3-May-08":39572,
"26-Apr-08":39565,
"19-Apr-08":39558,
"12-Apr-08":39551,
"5-Apr-08":39544,
"29-Mar-08":39537,
"22-Mar-08":39530,
"15-Mar-08":39523,
"8-Mar-08":39516,
"1-Mar-08":39509,
"23-Feb-08":39502,
"16-Feb-08":39495,
"9-Feb-08":39488,
"2-Feb-08":39481,
"26-Jan-08":39474,
"19-Jan-08":39467,
"12-Jan-08":39460,
"5-Jan-08":39453
};



for (week in weeks) {
    var url = 'http://www.vgchartz.com/weekly/' + weeks[week];

request(url, (function(week) { return function(err, resp, body){
    if(!err && resp.statusCode == 200){
        $ = cheerio.load(body);
        $('table.chart tr', '#chart_body').each(function(){
              var rank = $(this).text().trim().replace(/\s\s+/g, ';').replace("Shooter","; Shooter").replace("Sports","; Sports").replace("Action","; Action").replace("Role-Playing","; Role-Playing").replace("Racing","; Racing").replace("Platform","; Platform").replace("Misc","; Misc").replace("Adventure","; Adventure").replace("Simulation","; Simulation").replace("Puzzle","; Puzzle").replace("Strategy","; Strategy").replace("Fighting","; Fighting").replace("(DS)",";DS;").replace("(3DS)",";3DS;").replace("(PS3)",";PS3;").replace("(PS4)",";PS4;").replace("(PSP)",";PSP;").replace("(PSV)",";PSV;").replace("(Wii)",";Wii;").replace("(WiiU)",";WiiU;").replace("(X360)",";X360;").replace("(XOne)",";XOne;").replace("(PC)",";PC;");
                          chart.push(week + ';' +rank);

        fs.writeFile('output2008.txt', JSON.stringify(chart, null, 4), function(){

        console.log(chart);

        });


        });
    }
};
})(week));


}


//remove parentheses with: .replace(/\(|\)/g, '; ')