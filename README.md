<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://github.com/lockhinator/laravel-react-docker-boilerplate/actions?query=branch%3Amain++"><img src="https://img.shields.io/github/workflow/status/lockhinator/laravel-react-docker-boilerplate/tests/main" alt="Build Status"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel - React - Docker - Boilerplate

This repo is built with the following:
- Laravel 9
- Laravel Websockets
- Laravel Horizon
- React 17
- Vite 3
- ESLint 8
- TypeScript 4.7
- Husky/Commit lint
- PHP CS Fixer v3
- Redis 7
- Postgres 14.4
- Nginx 1.23

I put together this repo in an effort to have a solid starting place to begin a React/Docker/Laravel project from. 
While I understand monolithic repos may not be everyone's bread and butter, it makes sense for a good number of my projects.
If you find any bugs or see anything that needs to be changed/updated feel free to put up a PR!

A few things to note. 

- Websockets are ready to use out of the box for development. They are not configured for production however so you will
need to handle the production config/setup based on your needs. If working with Cloudflare you will need to change the
port that the sockets run on as well.
- The `php artisan schedule:work`, `php artisan websocket:serve` and `php artisan horizon` commands all run from within 
their own containers. If you make changes that impacts these processes you will need to restart the containers using 
`docker-compose restart <container-name(s)>`
- I would discourage using the container based Postgres and Redis services in production. While its great for development, 
a managed service is going to take less resources from your all and serve you far better than these stock implementations
would.

## Get started

1. Install [Docker Desktop](https://docs.docker.com/desktop/#download-and-install) 
2. Clone this repo
   1. `git clone git@github.com:lockhinator/laravel-react-docker-boilerplate.git`
3. CD into the directory
   1. `cd laravel-react-docker-boilerplate`
4. Copy the `.env.example` to `.env`
   1. `cp .env.example .env`
5. Update your `.env` to reflect the database you want to connect to. If using the default `docker-compose.yml` then you can copy the blow and paste it over the initial values.
   1. ```dotenv
          DB_CONNECTION=pgsql
          DB_HOST=pgsql
          DB_PORT=5432
          DB_DATABASE=laravel
          DB_USERNAME=localuser
          DB_PASSWORD=supersecretpassword
      ```
6. Run the following commands to run the repo in docker
   1. `docker-compose build fpm node web`
   2. `docker-compose run --rm fpm php artisan key generate`
   3. `docker-compose run --rm fpm php artisan migrate`
   4. `docker-compose run --rm fpm composer install`
   5. `docker-compose run --rm node yarn`
   6. `docker-compose up -d`
7. Visit [http://localhost](http://localhost) and make sure the app is running 
8. Start making building your app!

## Quick links
With the addition of Laravel Horizon and Laravel Websockets there are a few new endpoints that you may want to access to
observe/manage your application in your local development environment. These endpoints are:
- [http://localhost/laravel-websockets](http://localhost/laravel-websockets) which allows you to view all websocket communication
  (broadcast events) going through your development environment
- [http://localhost/horizon](http://localhost/horizon) which allows you to view the current queue within your development
  environment.

## Usage

Linters and test suites are available for the boilerplate. You are free to change the configs how you want.

### Running tests/linters

You can run tests/linters for both React and Laravel/PHP independently. These are the commands to do so:
1. React
   1. Jest tests
      1. `docker-compose run --rm node yarn test`
   2. Prettier
      1. `docker-compose run node yarn prettier:check`
      2. `docker-compose run node yarn prettier:fix`
2. Laravel
   1. `docker-compose run --rm fpm php artisan test --coverage --min=85`
3. PHP CS Fixer
   1. `docker-compose run --rm fpm composer fix-cs-check`
   2. `docker-compose run --rm fpm composer fix-cs`

The Jest configuration is defined in the `package.json` file under the `jest` key.
The reason for this is that using `jest.config.ts` results in coverage not correctly running and no files will be found.
If you want to make changes to the Jest configuration then do it in the `package.json` or risk not having coverage run correctly.

## Committing changes

In order to keep commits looking good this repository uses commitlint in conjunction with husky. 

Because of this the commit process ends up being:
- Create your branch
- Make changes to the code base
- Add your changes via `git add`
- Commit your changes using `yarn commit`
  - Fill out the interactive prompts
- Push your changes to your branch
  - `git push`

## Todo
- [ ] Fill out the jest tests more to cover the different default Laravel Auth pages

## License

This boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
