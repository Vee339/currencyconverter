const currencyi = document.getElementById("currency-i");
const currencyo = document.getElementById("currency-o");
const amounti = document.querySelector(".input input");
const amounto = document.querySelector(".output .amount input");
var option = document.querySelectorAll(".selectBox option");



//fetch currency rates and update the dom
function calculate(){
	const currency_one = currencyi.value;
	const currency_two = currencyo.value;
   

	fetch(`https://v6.exchangerate-api.com/v6/ca58df0f1d7ebd9ffb973498/latest/${currency_one}`)
	.then(res => res.json())
	.then(data =>{
    	//console.log(data);
    	const rate = data.conversion_rates[currency_two];

    	amounto.value = (amounti.value * rate).toFixed(2);

    });

	
}

currencyi.addEventListener("change",calculate);
currencyo.addEventListener("change",calculate);
amounti.addEventListener("input",calculate);
amounto.addEventListener("input",calculate);
amounti.addEventListener("click",function(){
    if(amounti.value == "0.00"){
        amounti.value = "";
    }
});

currencyi.addEventListener("change",function(){
	amounti.value = "0.00";
	amounto.value = "0.00";
});

