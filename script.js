// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload = function(){
//     var result = JSON.parse(request.response);
//   var res = result.filter((ele)=>ele.dollars==="currency")
//   console.log(res)
// }
// function foo() {
//   var res= document.getElementById("first").value;
//    console.log(res);
//    var res1= document.getElementById("middle").value;
//    console.log(res1);
//    var res2= document.getElementById("last").value;
//    console.log(res2);
//    var res3= document.getElementById("email").value;
//    console.log(res3);
//    var res4= document.getElementById("password").value;
//    console.log(res4);
// }


function lables(tagname, attrname, attrvalue, content) {
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname, attrvalue);
  ele.innerHTML = content;
  return ele;

}
function inputs(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2) {
  var ele1 = document.createElement(tagname);
  ele1.setAttribute(attrname, attrvalue);
  ele1.setAttribute(attrname1, attrvalue1);
  ele1.setAttribute(attrname2, attrvalue2);
  return ele1;
}
function linebreak(tagname) {
  var br = document.createElement(tagname);
  return br;
}
var firstname = lables("lables", "for", "firstname", "firstname");
var br = linebreak("br");
var input = inputs("input", "type", "firstname", "name", "firstname", "id", "firstname");
var br1 = linebreak("br");
var middlename = lables("lables", "for", "middlename", "middlename");
var br2 = linebreak("br");
var input1 = inputs("input", "type", "middlename", "name", "middlename", "id", "middlename");
var br3 = linebreak("br");
var lastname = lables("lables", "for", "lastname", "lastname");
var br4 = linebreak("br");
var input2 = inputs("input", "type", "lastname", "name", "lastname", "id", "lastname");
var br5 = linebreak("br");
var email = lables("lables", "for", "email", "email");
var br6 = linebreak("br");
var input3 = inputs("input", "type", "email", "name", "email", "id", "email");
var br7 = linebreak("br");
var password = lables("lables", "for", "password", "password");
var br8 = linebreak("br");
var input4 = inputs("input", "type", "password", "name", "password", "id", "password");
var br9 = linebreak("br");
var br10 = linebreak("br");
var input5 = inputs("input", "type", "submit", "name", "submit", "id", "submit");
document.body.append(firstname, br, input, br1, middlename, br2, input1, br3, lastname, br4, input2, br5, email, br6, input3, br7, password, br8, input4, br9,br10,input5)
