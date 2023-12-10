1. Descargar o clonar el siguiente repositorio: https://github.com/Vchamorro/Practica3React/tree/main

2. Pasos que se necesitan para ejecutar el backend

2.1 Una vez que clonan el repositorio, crear una base de datos en mysql(se puede utilizar mysql workbench o xampp, se recomienda xampp).

2.1.1 Descargar e instalar Xampp de la siguiente pagina: https://www.apachefriends.org/es/index.html

2.2 Instalar Composer (seguir los pasos de la siguiente pagina: https://getcomposer.org/doc/00-intro.md)

2.3 en la raíz del proyecto de backend ejecutar los siguientes comandos.

2.3.1 copy .env.example .env

2.3.2 composer install

2.3.3 php artisan key:generate

2.3.4 modificar el .env con las variables de entorno de su base de datos (ingresar el nombre de la base de datos creada en DB_DATABASE).

2.3.5 php artisan db:seed --class=Seeders

2.3.6 php artisan serve --host 0.0.0.0

3. Pasos para instalar el frontend


3.1 instalar React (seguir los pasos de la siguiente pagina: https://es.react.dev/learn/installation)

3.1 en la raíz del proyecto ejecutar npm install

3.2 npx react-native start

3.2.1 npx react-native run-android

3.2.2 En caso de querer emular en dispositivo movil android, ejecutar el comando npm start y luego cuando cargue el icono de react apretar "a".

3.4 verificar ip publica con ipconfig en cmd

3.5 cambiar ip pública en userApi.jsx en la carpeta api
