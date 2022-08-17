FROM cameeob2003/laravel-fpm:latest as builder

WORKDIR /code

# Copy existing application directory contents
COPY . /code

# Install all production composer deps
RUN composer install

FROM node:16

RUN mkdir /var/www

WORKDIR /var/www

COPY --from=builder /code/vendor ./vendor

RUN npm install --location=global npm@8.1.3

COPY . /var/www

RUN yarn
RUN yarn build