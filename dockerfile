FROM node

WORKDIR /aplicacao-app
COPY package.json .
RUN npm install -g ts-node
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]