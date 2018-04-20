# boop boilerplate

A (fairly) simple boiler plate built on:
* React
* Express
* Postgres
* TypeORM

## Goals and opinions

This boilerplate is not meant for production use (yet), but it is meant to accomplish the following:

1. Put DX first: nodemon to reload the server and hot reloading for clientside work
1. Use `webpack-dev-middleware` instead of the dev server to keep everything on the same port.

And maybe some other things once I think about it more. One consequence of these decisions is that the webpack config becomes a bit more complicated.

## To do

1. Set up linting correctly
1. Set up tests
1. Maybe... be more considerate about configuartion (right now it's locked-in to help keep it simple)
1. Add styled components, css modules, etc?
1. Add rxjs?
