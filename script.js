function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
// calculate year after x years
    var year = new Date().getFullYear()+parseInt(years);
// calculate the interest using input parameters
    var interest = principal * years * rate /100;
    if (principal > 0) {
// if amount is greater than 0, then calculate the interest 
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\> at an interest rate of <mark>"+rate+"%</mark>. \<br\> You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    } else {
// if amount is less than or equal to zero or left blank, alert
        alert("Enter a positive number");
    document.getElementById("principal").focus();
    }
  }
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
// Update the rate value with the rate selected    
}

