function rav() {
    // var ry = (document.getElementById("ry"));
    // var rk = (document.getElementById("rk").value);
    // var rx = (document.getElementById("rx").value);
    // var rpow = (document.getElementById("rpow").value);
    // var rb = (document.getElementById("rb").value);
    // var x0 = (document.getElementById("rx0"));
    var y = Number(document.getElementById("y").value);
    var k = Number(document.getElementById("k").value);
    var x = Number(document.getElementById("x").value);
    var pow = Number(document.getElementById("pow").value);
    var b = Number(document.getElementById("b").value);
    //var x0 = Number(document.getElementById("x0").value);
//......................................................

    if (y == 0) {
        var pow = Math.pow(x,pow)
        var y = k * pow + b
        alert("Y: "+ y)
        ctx.clearRect((0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillText("Ответ Y=" + y,10,50);
    } else if (k == 0) {
        var pow = Math.pow(x,pow)
        var k = (y - b) / pow
        alert("K: "+ k)
        ctx.clearRect((0, 0, canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.fillText("Ответ K=" + k,10,50);
    } else if (pow ==0) {
        var pow = Math.pow(x,pow)
        var pow = (y - b) / k
        alert("POW: "+ pow)
        ctx.clearRect((0, 0, canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.fillText("Ответ степень=" + pow,10,50);
    } else if (x == 0) { 
        var pow = Math.pow(x,pow)
        var x = Math.sqrt(pow)
        alert("X: "+ x)
        ctx.clearRect((0, 0, canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.fillText("Ответ X=" +x,10,50);
    } else if (b == 0) { 
        var pow = Math.pow(x,pow)
        var b = y-k * pow
        alert("B: "+ b)
        ctx.clearRect((0, 0, canvas.width, canvas.height)
        ctx.font = "30px Arial";
        ctx.fillText("Ответ B=" + b,10,50);
    }    
}
