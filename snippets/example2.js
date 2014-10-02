var circular = require("biojs-vis-circularnet");
yourDiv.textContent = "";
d3.json("http://www.corsproxy.com/bl.ocks.org/mbostock/raw/7607999/a782ae3d8a76201e9f46983166012121d6138361/readme-flare-imports.json", function(error, data) {
  var config = {el: yourDiv, diameter:960, tension: 0.85, data: data};
  var obj = new circular(config);
  obj.on("mouseover", function(d){
    console.log(d);
  });
  obj.on("click", function(d){
    console.log(d);
  });
});
