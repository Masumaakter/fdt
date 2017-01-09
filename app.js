/* objects start */
var mobile = {type:"sumsung", model:"j7",color:"white"};
document.getElementById("cre").innerHTML = mobile.type;

var person ={firstName:"jerry", lastName:"tom", age:50, eyeColor:"blue"};
document.getElementById("caj").innerHTML = person.firstName + person.lastName +"is" + person.age + "years old.";

var person = {
	firstName:"john",
	lastName :"doe",
	id       : 5856
};
document.getElementById("aop").innerHTML = person["firstName"] + " " + person["lastName"];

var person = {
	firstName:"jerry",
	lastName :"tom",
	id       :1256,
	fullName :function(){
		return this.firstName + " " + this.lastName;
	}
};
document.getElementById("aom").innerHTML = person.fullName;

/* objects end */


 /* if-else start */
if (new Date().getHours()<18) {
	document.getElementById('did').innerHTML="Good day!";
}


function weFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("demo").innerHTML = greeting;
}
/* if-else end */
/* Array start */


var cars =["saab","volvo","BMW"];
document.getElementById("ar").innerHTML= cars;


var mobiles =["sumsung","nokia","iphone"];
document.getElementById("acc").innerHTML = mobiles[0];


var person = ["jerry","tom",46];
document.getElementById("aro").innerHTML =person[1];


var fruits = ["Banana","Mango","Orange","Apple"];
document.getElementById("len").innerHTML = fruits.length;

var fruits = ["Apple","Orange","Banana","Mango"];
document.getElementById("pma").innerHTML =fruits;
function frFunction(){
	fruits.push("Lemon");
	document.getElementById("pma").innerHTML = fruits;
}

var person =[];
person[0] ="jerry";
person[1] = "tom";
person[2] = 46;
document.getElementById("ass").innerHTML =person[1] + " " + person.length;





/* ArrY end */

/* string start */
var mobileName1 = "sumsung";
var mobileName2 = 'nokia';
document.getElementById("st").innerHTML = mobileName1 +"<br>" + mobileName2;

var txt = "ABCDEFGHIJKLMNOP";
document.getElementById("sl").innerHTML = txt.length;

var x = 'It\'s alright';
var y = "We are the so-called \"Vikings\" from the north.";
document.getElementById("sp").innerHTML = x +"<br>" + y;

document.getElementById("bl").innerHTML ="welcome";

document.getElementById("bc").innerHTML = "wel \ come";

var x = "Tom";   // x is a string
var y = new String ("Tom");   // y is an object
document.getElementById("blc").innerHTML = typeof x + "<br>" + typeof y;

var x = "tom";
var y = new String ("tom");
document.getElementById("blcl").innerHTML =(x==y);

var x = "jerry" ;
var y = new String ("jerry");
document.getElementById("brek").innerHTML =(x===y);

/* string end */
/* string method start */
function itFunction(){
	var str = document.getElementById("p1").innerHTML;
	var pos = str.indexOf("locate");
	document.getElementById("fin").innerHTML = pos;
}

function myFunction(){
	var str = document.getElementById("p2").innerHTML;
	var pos = str.lastIndexOf("locate");
	document.getElementById("fss").innerHTML = pos;
}

/* string method end */
/* numbers start */
function inFunction(){
	var x = 777777777777777;
	var y = 7777777777777777;
	document.getElementById("int").innerHTML = x + "<br>" + y;
}

function flFunction(){
	var x = 0.2 + 0.1;
	document.getElementById("flo").innerHTML = "0.2 + 0.1 =" + x;
}

function mlFunction(){
	var x = (0.2*10 + 0.1*10)/10;
	document.getElementById("mul").innerHTML ="0.2 +0.1 =" + x;
}

function heFunction(){
	document.getElementById("hex").innerHTML = "0xFF =" +0xFF;
}


/* numbers end */
/* number method start */
var x = 123;
document.getElementById("str").innerHTML = x.toString() + "<br>" + (123) .toString() + "<br>" + (100+23) .toString();

document.getElementById("np").innerHTML = Number.MAX_VALUE;

document.getElementById("pm").innerHTML = 
      parseFloat("10") + "<br>" +
      parseFloat("10.33") + "<br>" +
      parseFloat("10 6") + "<br>" +
      parseFloat("10 years") + "<br>" +
      parseFloat("years 10");
/* number method end */