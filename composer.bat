@REM Maybe powershell instead

@ECHO OFF
SET cmd=composer bash
if "%1%"=="serve" SET cmd=composer php artisan serve --host 0.0.0.0

docker run --rm --interactive --tty -p 8000:8000 --volume %cd%:/app %cmd%

PAUSE