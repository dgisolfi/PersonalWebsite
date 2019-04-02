# PersonalWebsite
A Personal Webpage run with Django 

### Author

**Daniel Gisolfi** - *All current work* - [dgisolfi](https://github.com/dgisolfi)

## Deployment

Currently, this site exists on a Digital Ocean droplet. The droplet is pointed at the domain name: [dgisolfi.xyz](http://www.dgisolfi.xyz)

## Docker Implementation

The site is currently taking advantage of a Docker container. The Dockerfile in the repository specifies, when building the image, what needs to be installed in the container as well as what files need to be copied over and to where.

To run an instance of the image execute the make target `dev_container`. The makefile uses the following commands to run the web app...if make is unavailable one can run the commands on their own.

```dockerfile
docker pull dgisolfi/dgisolfi-site
docker run --rm --name dgisolfi_prod -p 80:80 dgisolfi/dgisolfi-site
```
**commands**
```bash
# Build the image based of the dockerfile
docker build -t dgisolfi-site .
# run the image
docker run --rm --name dgisolfi_prod -p 80:80 dgisolfi-site
```
If necessary the port that the container is pointing to can be changed, to do so change the first "80" to the port desired to be used outside of the container.