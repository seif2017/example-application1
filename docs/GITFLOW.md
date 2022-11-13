## START FEATURE (developper):
* git pull
* git checkout develop
* git flow feature start 'feat name'
* ... develop & test ... git commit & git push
* ... develop & test ... git commit & git push
* git flow feature rebase
* ... resolve conflicts & retest ... git commit & git push
* ... develop & test ... git commit & git push
* git flow feature rebase
* ... resolve conflicts & retest ... git commit & git push
* git flow feature publish 

## VALIDATE FEATURE (tech leader):
* git pull
* git checkout 'feat name'
* ... test ...
* if OK => git flow feature finish