FROM php:8.1-fpm-buster as builder

RUN apt-get update && apt-get install -y unzip curl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /var/www

WORKDIR /var/www

RUN composer install

FROM nginx:1.23

WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

COPY --from=builder /var/www/vendor /var/www/vendor

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY docker/nginx/site.conf /etc/nginx/conf.d/default.conf

# install nodejs 16 (only built for prod run)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs
RUN npm install -g npm@8.18.0
RUN npm install --location=global -y yarn

RUN yarn
RUN yarn build
