var apiTargetHtmlObj = document.getElementById("demo-rate-convert");
    var tmScript = document.createElement("script");
    tmScript.src = "https://www.transfermate.com/en/exchange_rates_api.asp";
    document.getElementsByTagName("head")[0].appendChild(tmScript);