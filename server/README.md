# Usage

## Development

### 1. Create .env file

This file should be placed in the project root folder

```.env

# Example .env file

# Database configurations
PG_USERNAME=bracelet
PG_PASSWORD=bracelet
PG_DATABASE=bracelet
# optional. use host.docker.internal to refer to host machine, else use postgres service name
# PG_HOST=
# optional. The port for our postgres database
# PG_PORT=

# Prisma Configurations
# optional. used for administrative prisma tasks (deployement, migrations)
PRISMA_MANAGEMENT_API_SECRET=PrimaManagmentSecret
# example: http://host:4466/service/stage
PRISMA_ENDPOINT=http://localhost:4466/bracelet/dev
# Used to access the Prisma API
PRISMA_SECRET=PrismaSecret

# Application Configurations
# Used to validate user sessions
APP_SECRET=ApplicationSecret
# See BYCRYPT docs
BCRYPT_SALT_ROUNDS=12

```
### 2. Deploy docker containers

Docker must be installed and running

```sh
docker-compose up -d
# if you need to rebuild the image
docker-compose up -d --build
```

### 3. Deploy the prisma service

The prisma cli should be installed

```sh
prisma deploy
```

##### 3.1 Prisma service utils

```sh
prisma reset            # remove all server data
prisma delete           # delete service
prisma seed             # seed starting data
prisma generate         # generate schema and client based on datamodel
```

## Production

### 1. Build & Save the production docker image

```sh
# build image for production
docker-compose -f docker-compose.yml build
# find image id
docker images
# save image
docker save <IMAGE_ID> --output dist/wasp.prod.tar
```

### 2. Load and tag Image in production environment

```sh
sudo docker load --input path/to/wasp.prod.tar
# find image id
sudo docker images
# tag image
sudo docker tag <IMAGE_ID> wasp:prod
```

### 3. Move & create required files to production environment

The folowing files are required in production

.env
docker-compose.yml

Also create a data directory

### 4. Deploy docker production services

```sh
sudo docker-compose up -d
```

### 5. Deploy prisma services

This should be executed from the development environment where the prisma cli is available

You must create a .env.production file in the root directory

```
# Example .env.production file. Used to deploy and manage production environment.
# Variables values here must be the same as the ones in the production environment .env file

# Prisma Configurations
PRISMA_MANAGEMENT_API_SECRET=PrimaManagmentSecret
# example: http://host:4466/service/stage
PRISMA_ENDPOINT=http://app:4466/bracelet/prod
# Used to access the Prisma API
PRISMA_SECRET=PrismaSecret

```

```sh
prisma deploy --env .env.production
```

##### 5.1 Prisma service utils

```sh
prisma reset --env .env.production            # remove all server data
prisma delete --env .env.production           # delete service
prisma seed --env .env.production             # seed starting data
prisma generate --env .env.production         # generate schema and client based on datamodel
```