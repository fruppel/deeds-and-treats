# Deeds & Treats

## Installation
```
cp .env.example .env
composer install
npm ci 
sail up -d
sail artisan key:generate
```

## Technology stack
- Laravel 9.x
- Vue 3
- Pinia

## Development
Import db:
```shell
docker ps | grep mysql
docker exec -i <container> /usr/bin/mysql -usail -p<password> <db> < dbexport_20230227.sql
```
