# AD Website

## Docker

We highly recommend using the docker to ensure cross-platform developement.

Make sure you have docker install, then run according to your platform:
- Linux: `sudo sh ./composer.sh`
- Windows: N/A

Then run the command `composer update`.

If this is the first time you run this you need to create a `.env` file with the contents:
```
APP_KEY=
```
then in your terminal run `php artisan key:generate`

To serve run `php artisan serve`.
You can also immediately serve with `sudo sh ./composer.sh serve`

## Native (untested)

To get started make sure u have `php` installed and `composer` (or other alternatives from their getting started website).

Run `composer install --ignore-platform-reqs`
Run `composer update`.

Create a `.env` file with
```
APP_KEY=
```
as the content. Then run `php artisan key:generate`.

Start the dev server with `php artisan serve`.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.