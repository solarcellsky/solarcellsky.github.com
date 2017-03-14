if(typeof TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.Status = 1;
}

var g_score = 0;
var g_score_site={x:0,y:0};
var g_coinTypeCount=3;
var g_awardLine = 80;
var g_time =25;
var g_windows = [
    {sprite:{},state:0,bong:{},site:"163,567",coinType:0},
    {sprite:{},state:0,bong:{},site:"296,567",coinType:0},
    {sprite:{},state:0,bong:{},site:"426,567",coinType:0},

    {sprite:{},state:0,bong:{},site:"164,413",coinType:0},
    {sprite:{},state:0,bong:{},site:"294,413",coinType:0},
    {sprite:{},state:0,bong:{},site:"423,413",coinType:0},

    {sprite:{},state:0,bong:{},site:"163,259",coinType:0},
    {sprite:{},state:0,bong:{},site:"294,259",coinType:0},
    {sprite:{},state:0,bong:{},site:"426,259",coinType:0},

    {sprite:{},state:0,bong:{},site:"163,105",coinType:0},
    {sprite:{},state:0,bong:{},site:"296,105",coinType:0},
    {sprite:{},state:0,bong:{},site:"426,105",coinType:0},

    {sprite:{},state:0,bong:{},site:"163,-49",coinType:0},//
    {sprite:{},state:0,bong:{},site:"296,-49",coinType:0},
    {sprite:{},state:0,bong:{},site:"426,-49",coinType:0}
];
var gameState = 'ready';//ready,running,end;
var fontSize = 15;
