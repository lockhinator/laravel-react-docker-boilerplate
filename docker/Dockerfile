########################################################################################################################
# fpm-base - this can be used in prod builds
########################################################################################################################
FROM php:8.2-fpm-buster as fpm-base

RUN apt-get update && apt-get install -y build-essential libpng-dev libodb-pgsql-dev libpq-dev libzip-dev \
    libonig-dev libjpeg62-turbo-dev libfreetype6-dev locales zip jpegoptim optipng pngquant gifsicle vim unzip git curl
RUN pecl install redis && docker-php-ext-enable redis
RUN docker-php-ext-install pdo_pgsql mbstring zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ && \
    docker-php-ext-install gd

# libuv install for using event loop with stuff such as reactphp
RUN apt-get install -y libuv1-dev
RUN  git clone https://github.com/bwoebi/php-uv.git && \
  cd php-uv && \
  phpize && \
  ./configure && \
  make && \
  make install
RUN echo 'extension=uv.so' >> /usr/local/etc/php/php.ini

WORKDIR /var/www
# Copy existing application directory contents
COPY . /var/www
RUN chown -R www-data:www-data /var/www
# Set 775 Permissions
RUN chmod -R 775 /var/www/storage

# Install all production composer deps
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev


# Generate the ziggy configuration
RUN php artisan ziggy:generate

########################################################################################################################
# fpm-dev build
########################################################################################################################
FROM fpm-base as fpm-dev
RUN pecl install xdebug && \
    docker-php-ext-enable xdebug
RUN echo "xdebug.mode=develop,debug,coverage" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
# install composer development dependancies
RUN composer install --dev

########################################################################################################################
# node build
########################################################################################################################
FROM fpm-base as node
# install nodejs 16 (only built for prod run)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install -y nodejs
RUN npm install --location=global npm@9.6.0
RUN npm install --location=global -y yarn
RUN yarn
RUN yarn build

########################################################################################################################
# nginx build
########################################################################################################################
FROM nginx:1.23 as nginx
COPY --from=fpm-base /var/www /var/www
COPY docker/site.conf /etc/nginx/conf.d/default.conf

