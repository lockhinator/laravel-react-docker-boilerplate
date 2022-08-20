<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://github.com/lockhinator/laravel-react-docker-boilerplate/actions?query=branch%3Amain++"><img src="https://img.shields.io/github/workflow/status/lockhinator/laravel-react-docker-boilerplate/tests/main" alt="Build Status"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel - React - Docker - Boilerplate

This repo is built with the following:
- Laravel 9
- React 17
- Vite 3
- ESLint 8
- TypeScript 4.7
- Husky/Commit lint
- PHP CS Fixer v3

I put together this repo in an effort to have a solid starting place to begin a React/Docker/Laravel project from. 
While I understand monolithic repos may not be everyone's bread and butter, it makes sense for a good number of my projects.
If you find any bugs or see anything that needs to be changed/updated feel free to put up a PR!

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

## License

This boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
