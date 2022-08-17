FROM cameeob2003/laravel-fpm:latest

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
RUN npm install --location=global -y yarn

RUN yarn
RUN yarn build
