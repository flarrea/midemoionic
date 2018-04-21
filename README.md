# midemoionic
Demo de una app desarrollada en Ionic 3 que consume un JSON desde Firebase, alojada en MS Azure y gestionada desde Github y VSTS.

La presente demostración es parte de una aplicación que localiza los cajeros automáticos más próximos a la ubicación del usuario.

1. La app está desarrollada con Ionic 3, y aunque la aplicación es para Android e iOS, esta demostración se abilitó para la plataforma web.

2. Consume un JSON con las direcciones, nombres, locales, latitudes, longitudes, etc., de cajeros automáticos del país. El arhivo es parte de una fuente mayor, pero este fue adaptado para la demostración. Por tanto, no incluye todos los campos ni todos los registros.

3. Los datos están en una RTDB proporciada por Firebase, servicio que nos permite tener los datos en formato JSON y el acceso a sólo lectura. Cabe agregar que también permite controlar el acceso via validación de usuarios, entre otros servicios.

4. Para el hosting de la aplicación se utilizó MS Azure.

5. La gestión de la aplicación se está realizando con Github y MS VSTS.

Demo aplicacón desde navegador.
![aplicacionionicenazure](https://user-images.githubusercontent.com/5190215/39084973-454b9e80-4553-11e8-8149-6a38500b9e64.png)

JSON desde FIREBASE.
![esructuradedatosenfirebase](https://user-images.githubusercontent.com/5190215/39084983-5955baf0-4553-11e8-98e0-8ec64788e605.png)

JSON desde navegador.
![archivo_json](https://user-images.githubusercontent.com/5190215/39084985-6257ee3e-4553-11e8-92bb-91b31788a9fe.png)

![jsondesdefirefox](https://user-images.githubusercontent.com/5190215/39084989-7624dbfc-4553-11e8-9c4d-9e2d7848e447.png)

Reglas de acceso.
![reglasdeaccesoalosdatosenfirebase](https://user-images.githubusercontent.com/5190215/39084995-7ef1ddca-4553-11e8-9b55-8e8a249ff548.png)

Gestión de la app des VSTS.
![gestiondelaappdesdevsts](https://user-images.githubusercontent.com/5190215/39085015-8fdc9d1e-4553-11e8-9ec2-328732e4c998.png)


