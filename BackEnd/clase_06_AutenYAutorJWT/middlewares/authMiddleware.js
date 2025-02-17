const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  try {
    const Authorization = req.header("Authorization");

    // Verifica si la cabecera de la autorizacion existe
    if (!Authorization) {
      throw { code: 401, message: "No se ha enviado el token" };
    }

    // Extraer Token despues del "Bearer "
    const token = Authorization.split("Bearer ")[1];

    if (!token) {
      throw {
        code: 401,
        message: "Formato Invalido o no se ha enviado el token",
      };
    }

    // Verificar si el token es valido
    jwt.verify(token, "clave_secreta", (error, payload) => {
      if (error) {
        throw { code: 401, message: "Token Invalido" };
      }

      // Decodificar y asignar el payload
      req.user = payload;

      next(); // Continua al siguiente middleware
    });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "Error de Autenticacion" });
  }
};

module.exports = verificarToken;
