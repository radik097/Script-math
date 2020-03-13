function rav() {
	 var ry = (document.getElementById("ry"));
	 var rk = (document.getElementById("rk"));
	 var rx = (document.getElementById("rx"));
	 var rpow = (document.getElementById("rpow"));
	 var rb = (document.getElementById("rb"));
	// var x0 = (document.getElementById("rx0"));
	var y = Number(document.getElementById("y").value);
	var k = Number(document.getElementById("k").value);
	var x = Number(document.getElementById("x").value);
	var pow = Number(document.getElementById("pow").value);
	var b = Number(document.getElementById("b").value);
	//var x0 = Number(document.getElementById("x0").value);
	//......................................................
	if (y == 0) {
		var pow = Math.pow(x, pow)
		var y = k * pow + b
		alert("Y: " + y)
		rpow.innerHTML=""
		rk.innerHTML=""
		rx.innerHTML=""
		rb.innerHTML=""
		ry.innerHTML='Ответ: Y=' + y;
	} else if (k == 0) {
		var pow = Math.pow(x, pow)
		var k = (y - b) / pow
		alert("K: " + k)
		rpow.innerHTML=""
		ry.innerHTML=""
		rx.innerHTML=""
		rb.innerHTML=""
		rk.innerHTML='Ответ: K=' + k;
	} else if (pow == 0) {
		var pow = Math.pow(x, pow)
		var pow = (y - b) / k
		alert("POW: " + pow)
		ry.innerHTML=""
		rk.innerHTML=""
		rx.innerHTML=""
		rb.innerHTML=""
		rpow.innerHTML='Ответ: Степень=' + pow;
	} else if (x == 0) {
		var pow = Math.pow(x, pow)
		var x = Math.sqrt(pow)
		alert("X: " + x)
		rpow.innerHTML=""
		rk.innerHTML=""
		ry.innerHTML=""
		rb.innerHTML=""
		rx.innerHTML='Ответ: X=' + x;
	} else if (b == 0) {
		var pow = Math.pow(x, pow)
		var b = y - k * pow
		alert("B: " + b)
		rpow.innerHTML=""
		rk.innerHTML=""
		rx.innerHTML=""
		ry.innerHTML=""
		rb.innerHTML='Ответ: B=' + b;
	}
}
