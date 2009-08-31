
var custombookmarkletfunction = ""+
"  if(window.Reticulator) { return; }"+
"  var d = document "+
"  ,s = d.createElement('script') "+
"  ,wo = window.onload "+
"  ,go = function () { "+
"    new Reticulator({"+
"      align: rtalign,"+
"      width: rtwidth,"+
"      offset: rtoffset,"+
"      columns: rtcolumns,"+
"      gutter: rtgutter,"+
"      color: rtcolor,"+
"      opacity: rtopacity,"+
"      zindex: rtzindex"+
"    });"+
"    window.onload = wo || null; "+
"   }; "+
"  s.src = 'http://github.com/mamuso/reticulatorjs/raw/master/reticulator.js?x='+(Math.random()); "+
"  if (null === s.onreadystatechange) {"+
"    s.onreadystatechange = function () { "+
"      if (s.readyState == 'complete') "+
"      go(); "+
"    }; "+
"  } else {"+
"    s.onload = go; "+
"    d.body.appendChild(s); "+
"  }";

var bookmarkletfunction = ""+
"  if(window.Reticulator) { return; }"+
"  var d = document "+
"  ,s = d.createElement('script') "+
"  ,w = window "+
"  ,wo = window.onload "+
"  ,a = function () { w.open('http://localhost:4567/bookmarkletoptions', 'RTconfig','menubar=0,toolbar=0,resizable=0,status=1,width=220,height=400');"+
"  }; "+
"  s.src = 'http://github.com/mamuso/reticulatorjs/raw/master/reticulator.js?x='+(Math.random()); "+
"  d.body.appendChild(s); "+
"  if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0);}else{a();}"

var setBookmarkletForm = function () {
  document.getElementById("bookmarkletform").onsubmit = function(){
    setBookmarklet();
    return false;
  }
  
  setBookmarklet();
};

var setBookmarklet = function() {
  document.getElementById("reticulatorjsbookmarklet").href = "javascript:(function(){"+
    bookmarkletfunction +
  "})();"

  document.getElementById("customreticulatorjsbookmarklet").href = "javascript:(function(){"+
    "var rtalign, rtwidth, rtoffset, rtcolumns, rtgutter, rtcolor, rtopacity, rtzindex;"+
    "rtalign = '" + document.getElementById("grid_align").value + "';"+
    "rtwidth = " + document.getElementById("grid_width").value + ";"+
    "rtoffset = " + document.getElementById("grid_offset").value + ";"+
    "rtcolumns = " + document.getElementById("grid_columns").value + ";"+
    "rtgutter = " + document.getElementById("grid_gutter").value + ";"+
    "rtcolor = '" + document.getElementById("grid_color").value + "';"+
    "rtopacity = " + document.getElementById("grid_opacity").value + ";"+
    "rtzindex = " + document.getElementById("grid_zindex").value + ";"+
    custombookmarkletfunction +
  "})();"
  document.getElementById("updatedbookmarklet").innerHTML = "values: " + 
    document.getElementById("grid_align").value + " | " + 
    document.getElementById("grid_width").value + " | " + 
    document.getElementById("grid_offset").value + " | " + 
    document.getElementById("grid_columns").value + " | " + 
    document.getElementById("grid_gutter").value + " | " + 
    document.getElementById("grid_color").value + " | " + 
    document.getElementById("grid_opacity").value + " | " + 
    document.getElementById("grid_zindex").value; 

};


window.onload = function() {
  setBookmarkletForm();
}