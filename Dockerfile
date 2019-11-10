FROM mhart/alpine-node:latest

ADD . /

ENTRYPOINT ["npm", "start"]
