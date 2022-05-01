FROM node:18-alpine3.14

ADD . /root
WORKDIR /root

CMD ["npm", "start"]