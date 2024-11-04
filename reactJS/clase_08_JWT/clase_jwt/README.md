# Clase: Implementación de JWT en React

### ¿Qué es JWT?

**JWT (JSON Web Tokens)** es un estándar para generar tokens que permiten la autenticación de usuarios en aplicaciones web. Un token contiene un **payload** que lleva información como el email del usuario. Este token es firmado con una **llave secreta**, y solo los servidores con la llave secreta pueden verificar su autenticidad.

**Diferencia entre Autenticación y Autorización:**

- **Autenticación:** Confirmar la identidad de un usuario (por ejemplo, al iniciar sesión).
- **Autorización:** Permitir o denegar acceso a recursos específicos dependiendo de los permisos del usuario.

**Propiedades de JWT:**

- **Encabezado (Header):** Define el tipo de token y el algoritmo de firma.
- **Cuerpo (Payload):** Contiene los datos que se quieren transmitir, como el ID del usuario.
- **Firma (Signature):** Garantiza que el token no ha sido alterado.

**Ejemplo de Token JWT:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

### Cómo funciona JWT

1. **Autenticación:** El usuario ingresa sus credenciales (usuario y contraseña) y las envía al servidor.
2. **Generación de Token:** El servidor verifica las credenciales y, si son válidas, genera un token JWT.
3. **Almacenamiento del Token:** El cliente recibe el token JWT y lo almacena (en `localStorage` o `sessionStorage`).
4. **Acceso a Rutas Protegidas:** En cada solicitud a rutas protegidas, el cliente envía el token JWT en el encabezado HTTP.
5. **Verificación:** El servidor verifica el token y autoriza el acceso a los recursos si el token es válido.
