<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel React Boilerplate

This repo is built with the following:
- Laravel 9
- React 17
- Vite 3
- ESLint 8
- TypeScript 4.7
- Husky/Commit lint
- PHP CS Fixer v3

## Get started

1. Install [Docker Desktop](https://docs.docker.com/desktop/#download-and-install) 
2. Clone this repo
   1. `git clone git@github.com:lockhinator/laravel-react-docker-boilerplate.git`
3. CD into the directory
   1. `cd laravel-react-docker-boilerplate`
4. Copy the `.env.example` to `.env`
   1. `cp .env.example .env`
5. Run the following commands to run the repo in docker
   1. `docker-compose build fpm node web`
   2. `docker-compose run --rm fpm php artisan key generate`
   3. `docker-compose run --rm fpm composer install`
   4. `docker-compose run --rm node yarn`
   5. `docker-compose up -d`
6. Start making changes to the boiler plate

## Usage

Linters and test suites are available for the boilerplate. You are free to change the configs to your liking.

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


## License

This boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
