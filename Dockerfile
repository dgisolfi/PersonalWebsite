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

ENV SECRET_KEY=c_x14&&t6+-49!3954ty5xbm!b+g(ajg&wr(1vf4_5jsy1*ljz
ENV USER=dgisolfi
ENV API_TOKEN=a40126d2a9f9ad60503ce14901cf014300e78296

ENTRYPOINT [ "python3" ]
CMD ["./manage.py", "runserver", "--insecure", "0.0.0.0:80"]