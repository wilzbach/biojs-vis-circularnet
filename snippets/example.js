var circular = require("biojs-vis-circularnet");
var data = [{name: "A", size: 4, imports: ["B"]},
{name: "B", imports: ["D"]},
{name: "C", imports: ["A","D", "E"]}, 
{name: "D", imports: []},
{name: "E", imports: []}]
yourDiv.textContent = "";
var config = {el: yourDiv, diameter:460, diffInnerRadius: 20,tension: 0.85, data: data};
var obj = new circular(config);
//instance=obj
obj.on("mouseover", function(d){
  console.log(d);
});
obj.on("click", function(d){
  console.log(d);
});
