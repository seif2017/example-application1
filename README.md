## Developpment MODEL<hr>
<strong>example-application1</strong><br>
vuejs-nodejs-docker-compose Example project for Developing Vuejs with Docker Compose 

## Installation procedure
### database :
- docker-compose  ==>  Compose Up - Select Services    ==>   mssql & adminer
- cd database ==> bkp-db.sh / .bat
### front & backend :
- docker-compose  ==>  Compose Up
### develop :
- modify code according to <strong>git flow</strong>
- update CHANGELOG.md every changes in ENV or DB 
- commit work every step
- push twice a day
- before publishing :
<ul>
1. rebase (with develop)<br>
2. solve conflicts<br>
3. execute tests
</ul>
<hr>
<h2>EXECUTION :</h2>
* CONTAINERS ==> (select) ==> Open in Browser
