# Lexy's notes Angular 10+ & nodeJS
useful commands

## Install
``` 
cd ~/git/marksheets-ng/
npm update --save --legacy-peer-deps
``` 

## Serve to localhost:
```
nvm use default 
npm update
ng serve -o
``` 
- Open Browser: http://localhost:4200/.

## Serve to localhost with proxy:
``` 
cd ~/git/testProj/Frontend
npm update
npm audit fix
ng serve --proxy-config proxy.conf.json --open
```
- Open Browser: http://localhost:4200/.


## Test
``` 
cd ~/git/testProj/Frontend/src/app/_helpers
ng test --include='**/_helpers/*.spec.ts'
```


# Nodejs & Library update
## Library updates (npm)
- https://angular.io/cli/update
- https://update.angular.io/

``` 
npm i -g npm-upgrade
npm-upgrade check
npm install --save --legacy-peer-deps
npm update
``` 

## nodejs check
``` 
node -v
nvm list
```

## Nodejs - set default stable version 
https://nodejs.org/en/ 
```
nvm list

nvm install v16.16.0
nvm alias default v16.16.0
nvm use default
npm update
``` 

## Nodejs - set default unstable version 
```
nvm list

nvm install v18.6.0
nvm alias unstable v18.6.0
nvm use unstable
npm update
```



## How to start
``` 
git clone git@gitlab.com:nyilas.rp/testProj.git testProj/
cd ~/git/testProj/
cd /Frontend
npm install
npm update
npm audit fix
ng serve --proxy-config proxy.conf.json --open
``` 

## Other commands

Kill port 4200 in ubuntu
``` 
lsof -t -i:4200
kill -9 $(lsof -t -i:4200)
```
Git commands
```
git diff origin/master 
git add *
git status
git commit
(Ctrl + Y)
```

``` 
cd ~/git/testProj/.git
cat config
url = git@gitlab.com:nyilas.rp/testProj.git
``` 

ng update commands
```
ng update
ng update @angular/cli @angular/core
npm update --force
npm audit fix --force
npm install
``` 