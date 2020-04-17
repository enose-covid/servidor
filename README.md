# Servidor para el aplicativo e-nose 


El servidor crea un entorno web, que de momento corre en el puerto 3000, y un broker mqtt en el puerto por defecto 1883

## Requisitos previos

El servidor corre sobre nodejs, por lo que es necesario tenerlo instalado en nuestro equipo.
[pagina de nodejs](https://nodejs.org/es/download/)
Para poder aportar al proyecto es necesario git.
[pagina de git](https://git-scm.com/downloads)

## Instalacion del proyecto:

### Con git:

~~~
git clone https://github.com/enose-covid/servidor.git
cd servidor
npm install
~~~

### Sin git:

en la pagina del proyecto nos descargamos el zip con todo el codigo, lo descomprimimos y una vez descomprimido dentro del directorio, ejecutamos el comando:

~~~
npm install
~~~

## Ejecucion de la aplicación

### En producción:

~~~
npm start
~~~

### En desarrollo:

~~~
npm run dev
~~~