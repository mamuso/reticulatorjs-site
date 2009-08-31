
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
"  ,sr = d.createElement('script') "+
"  ,wo = window.onload "+
"  ,w = window "+
"  ,a = function () {"+
"   top.wref = window.open('', 'RTconfig','menubar=0,toolbar=0,resizable=0,status=1,width=220,height=400');"+
"}"+
"  ,go = function () { "+
"    new RToptions();"+
"    window.onload = wo || null; "+
"   }; "+
"     if(/Firefox/.test(navigator.userAgent)){setTimeout(a,1);}else{a();}"+
"  s.src = 'http://github.com/mamuso/reticulatorjs/raw/master/reticulator.js?x='+(Math.random()); "+
"  sr.src = 'http://localhost:4567/javascripts/bookmarkletoptions.js?x='+(Math.random()); "+
"  if (null === s.onreadystatechange) {"+
"    s.onreadystatechange = function () { "+
"      if (s.readyState == 'complete') "+
"      go(); "+
"    }; "+
"  } else {"+
"    d.body.appendChild(sr); "+
"    d.body.appendChild(s); "+
"    s.onload = go; "+
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
  document.getElementById("customreticulatorjsbookmarklet").innerHTML = document.getElementById("grid_width").value + "/" + document.getElementById("grid_columns").value + "/" + document.getElementById("grid_gutter").value + " grid";
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