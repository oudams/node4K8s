# node4K8s

## Port

Application starts with port 8080

## Some Endpoints

`/compute` : return some string with random delay

`/health` : return `ok`

## RUN
### With Docker
```
docker build  . -t node4k8s
docker run --name node4k8s -p 80:8080 node4k8s
```

### Without Docker
```
npm install
npm start
```
