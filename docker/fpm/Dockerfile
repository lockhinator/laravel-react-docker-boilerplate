FROM cameeob2003/php-8.1-fpm-laravel-base:latest

WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Install all production composer deps
RUN composer install

# allow php-cs-fixer to be executed
RUN chmod a+x php-cs-fixer-v3.phar

RUN chown -R www-data:www-data /var/www

RUN yarn
RUN yarn build

RUN rm -rf /var/www/node_modules
