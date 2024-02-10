FROM node:alpine AS development

MAINTAINER Neha-Thakur

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /kayak-app

# Installing dependencies
COPY ./package*.json /kayak-app/

COPY public/ /kayak-app/public
COPY src/ /kayak-app/src


RUN npm install

# Copying all the files in our project




# Starting our application
CMD ["npm","start"]