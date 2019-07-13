function allClick() {

    var B = document.getElementById("Bill").value;
    
    var p = document.getElementById("people").value;

    var per = document.getElementById("percentage").value;


    if (per == "10%") {
        var k = ( B * 0.1);
        var y = ( k / p);
        var j = "the tip amount to be paid is $" + y + " dollars";
        document.getElementById("demo").innerHTML = j;
    } 


    
    if (per == "20%") {
        var k = ( B * 0.2);
        var y = ( k / p);
        var j = "the tip amount to be paid is $" + y + " dollars";
        document.getElementById("demo").innerHTML = j;
        
        console.log(y);
    } 
    
}