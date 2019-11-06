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

## Other Commands

### Build docker image using current time as version

```shell script
docker rmi $(docker images mxadam/node4k8s -q) -f && init_current && docker build . -t mxadam/node4k8s:latest && docker tag mxadam/node4k8s:latest mxadam/node4k8s:${CURRENT}
```

### Run Jmeter test

```shell script
rm -rf result.jtl &&  jmeter -n -t TestPlanNode4K8s.jmx -l result.jtl
```

### Generate Jmeter report from current output

```shell script
cp result.jtl result_temp.jtl && sed -i '' -e '$ d' result_temp.jtl && jmeter -g result_temp.jtl -o html -f && open html/index.html
```

### K8s Scale down manually

```shell script
kubctl scale --current-replicas=N --replicas=M deployment/node4k8s
```
