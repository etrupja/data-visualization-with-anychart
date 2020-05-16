$("#dashboardBtn").click(function () {
    $(this).text(function(i, text){
        $('#yearlyReport').toggle();
        $('#quarterlyReport').toggle();
        if(text === "Yearly Report"){
            loadYearlyReport();
            return "Quarterly Report";
        } else {
            loadQuerterlyReport();
            return "Yearly Report";
        }
    })
});