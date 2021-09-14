function myfunc(){
    const fruits=["banana","apple","grapes"];
    document.getElementById("demo").innerHTML=fruits.length;
    document.getElementById("demo1").innerHTML=fruits[1];
    fruits.push("mango");
    document.getElementById("demo2").innerHTML=fruits;
}



