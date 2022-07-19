## Install
``` 
cd ~/git/marksheets-ng/
npm update --save --legacy-peer-deps
``` 

# start Angular service
```
nvm use default 
npm update
ng serve -o
``` 

# nodejs check
``` 
node -v
nvm list
```

# angular lib updates
``` 
npm i -g npm-upgrade
npm-upgrade check
npm install --save --legacy-peer-deps
``` 

# nodejs set default stable version 
https://nodejs.org/en/ 
```
nvm list

nvm install v16.16.0
nvm alias default v16.16.0
nvm use default
npm update
``` 

# nodejs set default new version 
```
nvm list

nvm install v18.6.0
nvm alias unstable v18.6.0
nvm use unstable
npm update
```