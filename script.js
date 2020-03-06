const url = "http://data.fixer.io/api/latest?access_key=aa2eb301b4d28f85de0542b39d35a409&base=EUR&symbols=USD,GBP,JPY,EUR"



function recupererValeur() {

$.ajax({

    url: url,
    type: "GET",
    success: function(res, status, req){
        

        var rates = res.rates
        , fromAmount = document.getElementById("fromAmount").value
        , from = document.getElementById("from").value
        
        , to = document.getElementById("to").value

        var result = fromAmount * rates[to] / rates[from]

        document.getElementById("toAmount").value = result
        
        
    }
}) 

 }