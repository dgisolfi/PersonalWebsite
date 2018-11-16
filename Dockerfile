FROM ubuntu:latest
MAINTAINER Daniel Gisolfi
EXPOSE 80
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y
RUN apt-get install -y \
    python3-pip \
    python3-dev \
    build-essential

WORKDIR /Site
COPY ./app .
COPY requirements.txt .
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["routes.py"]