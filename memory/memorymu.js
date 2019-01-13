// Related Image Memory Game
// copyright Stephen Chapman, 28th February 2006, 22nd May 2010
// you may copy this script provided that you retain the copyright notice
(function() {
var back = 'back.jpg';
var tile = [['match01a.jpg','match01b.jpg'],
['match02a.jpg','match02b.jpg'],
['match03a.jpg','match03b.jpg'],
['match04a.jpg','match04b.jpg'],
['match05a.jpg','match05b.jpg'],
['match06a.jpg','match06b.jpg'],
['match07a.jpg','match07b.jpg'],
['match08a.jpg','match08b.jpg'],
['match09a.jpg','match09b.jpg'],
['match10a.jpg','match10b.jpg'],
['match11a.jpg','match11b.jpg'],
['match12a.jpg','match12b.jpg'],
['match13a.jpg','match13b.jpg'],
['match14a.jpg','match14b.jpg'],
['match15a.jpg','match15b.jpg']];

function randOrd(a, b){return (Math.round(Math.random())-0.5);}
var im = []; var tilen = []; for (var i = 0; i < 15; i++) {im[i] = new Image(); im[i].src = tile[i]; tilen[i] = []; tilen[i][0] = '<img src="'+tile[i][0]+'" width="100" height="100" alt="tile" \/>'; tilen[i][1]=i; tilen[i+15] = []; tilen[i+15][0] = '<img src="'+tile[i][1]+'" width="100" height="100" alt="tile" \/>'; tilen[i+15][1]=i;} function displayBack(i) {document.getElementById('t'+i).innerHTML = '<img src="'+back+'" width="100" height="100" alt="back" \/>'; document.getElementById('t'+i).onclick=function(){disp(i)};} var ch1, ch2, tmr, tno, tid, cid, cnt; function begin() {for (var i = 0; i <= 29 ;i++) displayBack(i);clearInterval(tid);tmr = tno = cnt = 0;tilen.sort( randOrd );cntr(); tid = setInterval(cntr, 1000);} function cntr() {var min = Math.floor(tmr/60);var sec = tmr%60;document.getElementById('cnt').value = min+':'+ (sec<10 ? '0' : '') + sec;tmr++;} function disp(sel) {if (tno>1) {clearTimeout(cid); conceal();}document.getElementById('t'+sel).innerHTML = tilen[sel][0];if (tno==0) ch1 = sel;else {ch2 = sel;  cid = setTimeout(conceal, 900);}tno++;} function conceal() {tno = 0; if (tilen[ch1][1] != tilen[ch2][1]) {displayBack(ch1);displayBack(ch2);} else cnt++; if (cnt >= 15) clearInterval(tid);} function createGame(nm) {var d = document.createElement('div');d.align = 'center';var t = document.createElement('table');t.cellpadding = 0;t.cellspacing = 0;t.borders = 0;for (var a = 0; a <= 5; a++) {t.insertRow(a);for (var b = 0; b <= 4; b++) {t.rows[a].insertCell(b);t.rows[a].cells[b].className = 'blk';t.rows[a].cells[b].id = 't'+((5*a)+b);t.rows[a].cells[b].align = 'center';}}d.appendChild(t);var f = document.createElement('form');f.id = 'mem';var bt = document.createElement('input');bt.type = 'button';bt.id = 'cnt';bt.value = '0.00';bt.onclick = begin;f.appendChild(bt);d.appendChild(f);document.getElementById(nm).appendChild(d);} createGame('memory'); begin(); })();