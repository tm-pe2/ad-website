
@REM Maybe powershell instead

@ECHO OFF
SET cmd=composer bash
if "%1%"=="serve" SET cmd=composer php artisan serve

docker run --rm --interactive --tty --net=host --volume %cd%:/app %cmd%

PAUSE