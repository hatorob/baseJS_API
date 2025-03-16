# CREAR CONTENEDOR EN DOCKER
1. Crear un archivo en la raíz docker-compose.yml

```
version: '3.8'

services:

  mysql-db:
    image: mysql:8.0 # Cambiar a la imagen de MySQL
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DB}          # Base de datos predeterminada
      MYSQL_USER: ${MYSQL_USER}                  # Usuario adicional
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}          # Contraseña para el usuario adicional
    volumes:
      - ./mysql:/var/lib/mysql                   # Volumen para persistir los datos
    ports:
      - 3306:3306                                # Puerto de MySQL
```
2. Configurar las variables de entorno
```
PORT=3000

MYSQL_URL=mysql://root:123456@localhost:3306/TASK # Cambia el esquema a `mysql` y ajusta el puerto y credenciales.
MYSQL_DB=TASK
MYSQL_PORT=3306 # Cambia el puerto al de MySQL (3306 por defecto).
MYSQL_ROOT_PASSWORD=123456

NODE_ENV=development
```
3. ejecutar el contenedor para levantar los servicios
```
docker-compose up -d
Ejecutar el de abajo si las variables se cargan desde .env
docker-compose up --build
```
4. Instalar Sequelize y MYSQL
```
npm install sequelize mysql2
```
5. Crear archivo de app.js
```
1. Instalar express
npm i express
```

6. Configurar archivo BD config/database.js
```
instalar dotenv para obtener variables de entorno
npm i dotenv
```
7. Para generar tokes y encriptar contraseñas
```
npm install jsonwebtoken bcryptjs
```