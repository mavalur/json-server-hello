# json-server-hello

* checkout the code and navigate to the folder
* npm install (installs dependencies and json-server module globally)
* json-server company.component.js (runs the json-server module with the dataset provide through the js file)
* Access http://localhost:3000 in the browser 


GET

* http://localhost:3000/companies
* http://localhost:3000/companies/MSFT
* http://localhost:3000/sectors
* http://localhost:3000/sectors/Industrials
* http://localhost:3000/companies?q=jp (search)
* http://localhost:3000/companies?_start=0&_end=10  (pagination)
* http://localhost:3000/companies?_sort=Symbol&_order=DESC (sorting)

many more cool api within minutes

PUT (need a fiddler (or) postman client)

**Header** 
<code>
   Content-Type: application/json
</code>
**Content**
<code>
{
  {   "Symbol": "NEW",   "Name": "New england Sports LLC",   "id": "NEW" }
}
**URL** http://localhost:3000/companies

POST

**Header** 
<code>
   Content-Type: application/json
</code>
**Content**
<code>
{
  "Symbol": "MSFT",
  "Name": "Microsoft Corp. (updated now)",
  "Sector": "Information Technology",
  "id": "MSFT"
}
</code>
**URL** http://localhost:3000/companies/MSFT

DELETE

**URL** http://localhost:3000/companies/MSFT

All data are persisted using a js module called (lowdb)

More information about json-server, more api -  https://github.com/typicode/json-server 
Video Tutorial - https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server 