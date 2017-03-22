/**
 * Created by Mavalur on 3/21/17.
 */

module.exports = function () {
    let data = require("./sp500.json");
    data.forEach(function(company,index){
        company.id = company.Symbol;
        console.log(company);
    });
    return {
        "companies":data
    }

}