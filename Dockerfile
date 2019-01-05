FROM python:3.6
MAINTAINER Daniel Gisolfi
EXPOSE 80
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y
RUN apt-get install -y \
    build-essential \
    && pip install --upgrade pip

COPY ./server /server
WORKDIR /server
COPY requirements.txt .

RUN pip3 install -r requirements.txt

ENV SECRET_KEY=AAAAA
ENV USER=username
ENV API_TOKEN=token


ENTRYPOINT [ "python3" ]
CMD ["./manage.py", "runserver", "--insecure", "0.0.0.0:80"]