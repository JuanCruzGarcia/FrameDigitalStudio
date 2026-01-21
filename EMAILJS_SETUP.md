# 📧 Configuración de EmailJS para Frame Digital Studio

## 🎯 Pasos para configurar EmailJS

### 1️⃣ Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" (Registrarse)
3. Crea una cuenta gratuita con tu email

---

### 2️⃣ Agregar un servicio de Email
1. Una vez dentro del dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el SERVICE ID** que se genera (ejemplo: `service_abc123`)

---

### 3️⃣ Crear una plantilla de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con el siguiente contenido:

#### **Subject (Asunto):**
```
Nueva consulta de {{from_name}}
```

#### **Body (Cuerpo del email):**
```
Has recibido una nueva consulta desde el sitio web de Frame Digital Studio.

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde framedigital.studio
```

4. En la sección **"To Email"**, asegúrate de que esté configurado para enviar a: `info@framedigital.studio`
5. **Copia el TEMPLATE ID** (ejemplo: `template_xyz789`)

---

### 4️⃣ Obtener tu Public Key
1. Ve a **"Account"** → **"General"**
2. Busca la sección **"Public Key"**
3. **Copia tu PUBLIC KEY** (ejemplo: `abcXYZ123_456`)

---

### 5️⃣ Configurar las credenciales en tu proyecto

Abre el archivo `src/components/CTA.jsx` y reemplaza estas líneas (aproximadamente línea 15-17):

```javascript
// 🔑 CONFIGURACIÓN DE EMAILJS
// Reemplaza estos valores con tus credenciales de EmailJS
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Pega tu Service ID aquí
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // ← Pega tu Template ID aquí
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // ← Pega tu Public Key aquí
```

**Ejemplo de cómo debería quedar:**
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'abcXYZ123_456';
```

---

## ✅ Verificar que funciona

1. Guarda los cambios en `CTA.jsx`
2. Recarga tu aplicación
3. Haz clic en el botón "Contactanos"
4. Completa el formulario de prueba
5. Haz clic en "Enviar consulta"
6. Deberías ver el mensaje: **"¡Mensaje enviado exitosamente!"**
7. Revisa tu email `info@framedigital.studio` para confirmar que llegó el mensaje

---

## 🔒 Seguridad

- La **Public Key** es segura para usar en el frontend
- EmailJS maneja el envío de emails de forma segura
- El plan gratuito incluye **200 emails/mes**

---

## 🆘 Solución de problemas

### Error: "Service ID not found"
- Verifica que copiaste correctamente el Service ID
- Asegúrate de que el servicio esté activo en EmailJS

### Error: "Template ID not found"
- Verifica que copiaste correctamente el Template ID
- Asegúrate de que la plantilla esté guardada

### No llegan los emails
- Revisa la carpeta de spam
- Verifica que el email de destino en la plantilla sea correcto
- Revisa los logs en el dashboard de EmailJS

---

## 📚 Recursos adicionales

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Video tutorial de EmailJS](https://www.youtube.com/watch?v=dgcYOm8n8ME)

---

**¡Listo!** Una vez configurado, tu formulario enviará emails directamente sin abrir el cliente de correo. 🚀
