# 🧪 NestJS + Prisma API

API REST construida con NestJS y Prisma ORM para gestionar usuarios y mensajes. Permite crear usuarios, enviar mensajes asociados por correo electrónico y listar mensajes por usuario.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [class-validator](https://github.com/typestack/class-validator)
- TypeScript

---

## 📦 Instalación

1. **Copia el repositorio**  
   ```bash
   git clone https://github.com/Andestid/API-NestJS-PrismaORM.git

2. **Crea un archivo .env con tu db** 
   ```bash
   DATABASE_URL="mysql://usuario:contraseña@localhost:3306/tu_basededatos"

3. **Ejecuta prisma y el servidor**
    ```bash
   git clone https://github.com/Andestid/API-NestJS-PrismaORM.git
   npm install
   npm install class-validator class-transformer
   npx prisma generate
   npx prisma migrate dev --name init
   npm run start:dev

---

## 📬 Endpoints disponibles
##     👤 Usuarios
    POST /users
    Crea un nuevo usuario
    {
      "name": "Juan",
      "email": "juan@example.com"
    }
    GET /users/:id/messages
    Obtiene todos los mensajes de un usuario por su ID

##   💬 Mensajes
     POST /messages
     Crea un mensaje vinculado al usuario por su email
     {
       "email": "juan@example.com",
       "content": "Hola mundo"
     }
  
 ---

## ✅ Validaciones
El email debe tener un formato válido (@IsEmail)

name y content no deben estar vacíos (@IsNotEmpty)

No se permiten emails duplicados (@unique en Prisma)
