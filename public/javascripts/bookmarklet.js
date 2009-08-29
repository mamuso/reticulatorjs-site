
var bookmarkletfunction = ""+
"  if(window.Reticulator) { return; }"+
"  var d = document "+
"  ,s = d.createElement('script') "+
"  ,wo = window.onload "+
"  ,go = function () { "+
"    new Reticulator({"+
"      align: rtalign,"+
"      width: rtwidth,"+
"      columns: rtcolumns,"+
"      gutter: rtgutter,"+
"      color: rtcolor,"+
"      opacity: rtopacity"+
"    });"+
"    window.onload = wo || null; "+
"  }; "+
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

var setBookmarkletForm = function () {
  document.getElementById("bookmarkletform").onsubmit = function(){
    setBookmarklet();
    return false;
  }
  
  setBookmarklet();
};

var setBookmarklet = function() {
  document.getElementById("reticulatorjsbookmarklet").href = "javascript:(function(){"+
    "var rtalign, rtwidth, rtcolumns, rtgutter, rtcolor, rtopacity;"+
    "rtalign = '" + document.getElementById("grid_align").value + "';"+
    "rtwidth = " + document.getElementById("grid_width").value + ";"+
    "rtcolumns = " + document.getElementById("grid_columns").value + ";"+
    "rtgutter = " + document.getElementById("grid_gutter").value + ";"+
    "rtcolor = '" + document.getElementById("grid_color").value + "';"+
    "rtopacity = " + document.getElementById("grid_opacity").value + ";"+
    bookmarkletfunction +
  "})();"
  document.getElementById("updatedbookmarklet").innerHTML = "values: " + 
    document.getElementById("grid_align").value + " | " + 
    document.getElementById("grid_width").value + " | " + 
    document.getElementById("grid_columns").value + " | " + 
    document.getElementById("grid_gutter").value + " | " + 
    document.getElementById("grid_color").value + " | " + 
    document.getElementById("grid_opacity").value; 

};


window.onload = function() {
  setBookmarkletForm();
}