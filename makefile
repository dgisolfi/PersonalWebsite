# dgisolfi website
# Author:  Daniel Nicolas Gisolfi

container=dgisolfi_prod
image=dgisolfi-site

#####################
# Common Commands
#####################

intro:
	@echo "\n					DGISOLFI - PERSONAL SITE"

clean:
	-docker kill $(container)
	-docker rm $(container)
	-docker rmi $(image)
	-docker rmi dgisolfi/$(image)

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
	# @docker run --rm --name $(container) -p 80:80 -v$(PWD)/DEV:/DEV $(image)
	@docker run --rm --name dgisolfi_prod -p 80:80  -v$(PWD)/server:/server dgisolfi-site
	# docker run --rm --name dgisolfi_prod -p80:80 dgisolfi/dgisolfi-site

publish_image: docker_image
	@echo "\n				Create dgisolfi-site docker image..."
	@docker tag ${image} dgisolfi/${image}:latest
	@docker push dgisolfi/${image}
