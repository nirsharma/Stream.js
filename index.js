import source from './source/index.js';

window.S = source;

var inc$ = S.FromDomEvent(btn1, "click").map(x => 1);

var dec$ = S.FromDomEvent(btn2, "click").map(x => -1);

inc$.merge(dec$).scan((a,b) => a+b, 0).subscribe(val => txt.innerHTML = val);