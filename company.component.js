/**
 * Created by Mavalur on 3/21/17.
 */

module.exports = function () {
    'use strict';
    let data = require("./sp500.json");
    let sectorcompanymap = new Map();
    let sectordata = [];
    data.forEach(function(company,index){
        company.id = company.Symbol;
        // console.log(company);
        if (!sectorcompanymap.has(company.Sector)) {
            sectorcompanymap.set(company.Sector, []);
        }
        sectorcompanymap.get(company.Sector).push(company);
    });
  //  console.log(sectorcompanymap);
    sectorcompanymap.forEach(function (value,key) {
        console.log(key);
        sectordata.push({
            "id": key,
            "companies": value
        });
    });

    return {
        "companies": data,
        "sectors": sectordata
    }

}