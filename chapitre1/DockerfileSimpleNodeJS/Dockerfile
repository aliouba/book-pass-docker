FROM centos:latest
MAINTAINER Aliou BA <alioubafr@gmail.com>
RUN yum install epel-release -y && yum install nodejs -y
RUN mkdir /app
COPY ./index.js /app
EXPOSE 8080
CMD ["node", "/app/index.js"]
