FROM mhart/alpine-node:latest

ADD . /

CMD cd / && npm install

ENTRYPOINT ["npm", "start"]
