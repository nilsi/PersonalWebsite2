# Docker setup for the Aurelia starter kit

Provides an easy way to run the Aurelia starter kit using Docker and Docker
Compose.

## Prerequisites

- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instructions

1. Clone this repository.
2. Download the Aurelia starter kit from the "Getting Started" section in the
[Aurelia documentation](http://aurelia.io/docs.html).
3. Extract the zip file in this directory.

Then, to run the starter kit:

```
$ docker-compose up
```

This will build an image based on the official Node.js image from Docker hub,
and spin up a container listening on http://localhost:8080.
