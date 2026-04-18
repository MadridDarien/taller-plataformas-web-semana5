# Implementación de certificados SSL

Para habilitar conexiones seguras, se generaron certificados SSL autofirmados utilizando OpenSSL.

Se crearon los siguientes archivos:
- key.pem (clave privada)
- cert.pem (certificado)

Estos archivos se almacenan en la carpeta certs/ y se excluyen del repositorio mediante .gitignore por motivos de seguridad.

Los certificados permiten trabajar con HTTPS en entorno local, aunque generan advertencias en el navegador al no estar firmados por una entidad certificadora oficial.
