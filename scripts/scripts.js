$("#dashboardBtn").click(function () {
    $(this).text(function(i, text){
        $('#worldwide').toggle();
        $('#top5Countries').toggle();
        if(text === "Worldwide"){
            loadWorldWideStats();
            return "Top 5 Countries";
        } else {
            loadTop5Countries();
            return "Worldwide";
        }
    })
});