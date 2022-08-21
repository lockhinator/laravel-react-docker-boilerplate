FROM php:8.1-fpm-buster

RUN apt-get update && apt-get install -y build-essential libpng-dev libodb-pgsql-dev libpq-dev libzip-dev \
    libonig-dev libjpeg62-turbo-dev libfreetype6-dev locales zip jpegoptim optipng pngquant gifsicle vim unzip git curl

RUN pecl install redis && \
    docker-php-ext-enable redis

RUN pecl install xdebug && \
    docker-php-ext-enable xdebug

RUN echo "xdebug.mode=develop,debug,coverage" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

RUN docker-php-ext-install pdo_pgsql mbstring zip exif pcntl

RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ && \
    docker-php-ext-install gd

RUN apt-get install -y libuv1-dev

RUN  git clone https://github.com/bwoebi/php-uv.git && \
  cd php-uv && \
  phpize && \
  ./configure && \
  make && \
  make install

RUN echo 'extension=uv.so' >> /usr/local/etc/php/php.ini

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Install all production composer deps
RUN composer install

# allow php-cs-fixer to be executed
RUN chmod a+x php-cs-fixer-v3.phar

RUN chown -R www-data:www-data /var/www

# install nodejs 16 (only built for prod run)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs
RUN npm install -g npm@8.18.0
RUN npm install --location=global -y yarn

RUN yarn
RUN yarn build
