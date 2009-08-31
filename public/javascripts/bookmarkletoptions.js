var windowoptions = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"'+
'  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'+
'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
'<title>configure reticulatorjs</title>'+
'<link rel="stylesheet" href="http://reticulatorjs.mamuso.net/stylesheets/reticulatorjs.css" type="text/css" media="screen" charset="utf-8"/>'+
'</head>'+
'<body>'+
'<form action="#" method="post" accept-charset="utf-8" id="RTform">'+
'  <div id="configurereticulator">'+
''+
'    <h2>setup your grid</h2>'+
'      <p>'+
'        <label for="grid_align">align</label>'+
'        <select id="grid_align" name="grid_align">'+
'          <option value="center">center</option>'+
'          <option value="left">left</option>'+
'          <option value="right">right</option>'+
'        </select>'+
'      </p>'+
'      <p>'+
'        <label for="grid_width">width</label>'+
'        <input type="text" id="grid_width" value="951" name="grid_width"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_offset">offset</label>'+
'        <input type="text" id="grid_offset" value="0" name="grid_offset"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_columns">columns</label>'+
'        <input type="text" id="grid_columns" value="16" name="grid_columns"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_gutter">gutter</label>'+
'        <input type="text" id="grid_gutter" value="9" name="grid_gutter"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_color">color</label>'+
'        <input type="text" id="grid_color" value="#00FF00" name="grid_color"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_opacity">opacity</label>'+
'        <input type="text" id="grid_opacity" value="0.5" name="grid_opacity"/>'+
'      </p>'+
'      <p>'+
'        <label for="grid_zindex">zindex</label>'+
'        <input type="text" id="grid_zindex" value="9000000" name="grid_zindex"/>'+
'      </p>'+
''+
'      <p class="actions">'+
'        <button type="submit" id="RTform_button">get a grid!</button>'+
'      </p>'+
'  </div>'+
'</form>'+
'</body>'+
'</html>';


var RToptions = function () {
    top.wref.document.writeln(windowoptions);
    top.wref.document.getElementById("RTform").onsubmit = function(){
      top.wref.opener.eval(""+
        "var rtalign, rtwidth, rtoffset, rtcolumns, rtgutter, rtcolor, rtopacity, rtzindex;"+
        "rtalign = '" + top.wref.document.getElementById("grid_align").value + "';"+
        "rtwidth = " + top.wref.document.getElementById("grid_width").value + ";"+
        "rtoffset = " + top.wref.document.getElementById("grid_offset").value + ";"+
        "rtcolumns = " + top.wref.document.getElementById("grid_columns").value + ";"+
        "rtgutter = " + top.wref.document.getElementById("grid_gutter").value + ";"+
        "rtcolor = '" + top.wref.document.getElementById("grid_color").value + "';"+
        "rtopacity = " + top.wref.document.getElementById("grid_opacity").value + ";"+
        "rtzindex = " + top.wref.document.getElementById("grid_zindex").value + ";"+
        "new Reticulator({"+
        "  align: rtalign,"+
        "  width: rtwidth,"+
        "  offset: rtoffset,"+
        "  columns: rtcolumns,"+
        "  gutter: rtgutter,"+
        "  color: rtcolor,"+
        "  opacity: rtopacity,"+
        "  zindex: rtzindex"+
        "});"
      );
      top.wref.opener.focus();
      top.wref.close();
      return false;
    }
};