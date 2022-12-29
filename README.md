# Otus Node.js

# How to
```
git clone https://github.com/demyan1411/drozdov-demyan-otus.git
cd drozdov-demyan-otus
npm install
```

## Homework 1
### 1.1
```
cd hm-1
npm install
node src/logTree
node src/logTree -fn test-objects/array.json // json filename, array.json or object.json(default)
node src/logTree -d 2           // depth for console tree
node src/logTree -d 2 -fn test-objects/array.json
```

### 1.2
```
cd hm-1
npm install
node src/logDir
node src/logDir -dir src/logDir // or ../utils
node src/logDir -d 2           // depth for console tree
node src/logDir -d 2 -dir ../utils
```
