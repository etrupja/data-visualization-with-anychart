$("#dashboardBtn").click(function () {
    $(this).text(function(i, text){
        $('#yearlyReport').toggle();
        $('#quarterlyReport').toggle();
        if(text === "Yearly Report"){
            loadYearlyReport();
            return "Quarterly Report";
        } else {
            loadQuarterlyReport();
            return "Yearly Report";
        }
    })
});