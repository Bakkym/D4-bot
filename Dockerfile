# Usa una imagen de Node.js como base
FROM node:16.15.1

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el resto de los archivos de la aplicación a /app
COPY . .

# Instala las dependencias de la aplicación
RUN yarn install
RUN yarn build


# Ejecuta el comando "npm start" cuando se inicie el contenedor
CMD [ "yarn", "start" ]
