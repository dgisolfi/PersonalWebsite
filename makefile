# dgisolfi website
# Author:  Daniel Nicolas Gisolfi

container=dgisolfi_prod
image=dgisolfi-site
APPNAME=dgisolfi-site

#####################
# Common Commands
#####################

intro:
	@echo "\n					DGISOLFI - PERSONAL SITE"

clean:
	-docker kill $(container)
	-docker rm $(container)
	-docker rmi $(image)


clean_images:
	@#clean images TODO: These commands need Makefile compatibility
	@docker rmi $(docker images | awk '{print $1}')
	@docker images

clean_containers:
	@#clean Containers TODO: These commands need Makefile compatibility
	@docker kill $(docker ps -a | awk '{print $1}')
	@docker rm $(docker ps -a | awk '{print $1}')
	@docker ps -a


#####################
# Docker Commands
#####################


docker_image:
	@# Initial commands used priming devops environment
	@# Note: If docker account "dan36911" is not used; This command required
	@echo "\n				Creating dgisolfi-site docker image"
	@# @ln -s /Users/daniel/code-repos/Blockchain/lib /Users/daniel/code-repos/Blockchain/src
	@docker build -t $(image) .

dev_container:docker_image
	@# This command should be run from the local computer
	@echo "\n Creating Docker container"
	@#docker pull ${DOCKER_IMAGE}
	@docker run --rm --name $(container) -p 80:80 $(image)
	docker run --rm --name dgisolfi_prod -p 80:80 dgisolfi/dgisolfi-site
	# -v /etc/letsencrypt/:/etc/letsencrypt/
publish_image: docker_image
	@echo "\n				Create dgisolfi-site docker image..."
	@docker login
	@docker tag ${image} dgisolfi/${image}:latest
	@docker push dgisolfi/${image}
