function allClick() {

    var B = document.getElementById("Bill").value;
    
    var p = document.getElementById("people").value;

    var per = document.getElementById("percentage").value;

    if (per == "4%") {
        var k = ( B * 0.04);
        var y = ( k / p);
        var j = "The Tip Amount To Be Paid is $" + y + " Dollars";
        document.getElementById("demo").innerHTML = j;
    } 

    if (per == "5%") {
        var k = ( B * 0.05);
        var y = ( k / p);
        var j = "The Tip Amount To Be Paid is $" + y + " Dollars";
        document.getElementById("demo").innerHTML = j;
    } 


    if (per == "10%") {
        var k = ( B * 0.1);
        var y = ( k / p);
        var j = "The Tip Amount To Be Paid is $" + y + " Dollars";
        document.getElementById("demo").innerHTML = j;
    } 

    if (per == "15%") {
        var k = ( B * 0.15);
        var y = ( k / p);
        var j = "The Tip Amount To Be Paid is $" + y + " Dollars";
        document.getElementById("demo").innerHTML = j;
    } 


    
    if (per == "20%") {
        var k = ( B * 0.2);
        var y = ( k / p);
        var j = "The Tip Amount To Be Paid is $" + y + " Dollars";
        document.getElementById("demo").innerHTML = j;
        
    } 
    
}