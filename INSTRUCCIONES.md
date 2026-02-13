# 📚 INSTRUCCIONES DETALLADAS - TALLER 2 NTD

## 🎯 Objetivo del Taller

Crear una página web sobre Eminem utilizando Next.js y trabajar de forma colaborativa con Git/GitHub.

## 👥 Configuración Inicial del Equipo

### Paso 1: Configurar el Repositorio (Una persona del equipo)

1. **Ya tienen el repositorio creado:** https://github.com/HackDevCol/NTD_Taller2.git

2. **Añadir colaboradores:**
   - Ve a Settings → Collaborators
   - Click en "Add people"
   - Busca a tus compañeros por username de GitHub
   - Envía las invitaciones

3. **Cada colaborador debe:**
   - Revisar su email
   - Aceptar la invitación al repositorio

## 💻 Configuración Local (Todos los miembros)

### Paso 2: Clonar el Repositorio

```bash
# Abrir terminal/cmd
cd Desktop  # o donde quieras trabajar

# Clonar el repo
git clone https://github.com/HackDevCol/NTD_Taller2.git

# Entrar al directorio
cd NTD_Taller2
```

### Paso 3: Instalar Node.js y Dependencias

**Verificar si tienes Node.js:**
```bash
node --version
npm --version
```

Si no tienes Node.js:
- Descarga desde: https://nodejs.org/
- Instala la versión LTS (recomendada)
- Reinicia la terminal

**Instalar dependencias del proyecto:**
```bash
npm install
```

Esto instalará:
- Next.js
- React
- Framer Motion
- Tailwind CSS
- TypeScript

### Paso 4: Probar que Funciona

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:3000`

Deberías ver la página de Eminem funcionando! 🎉

## 🔄 Flujo de Trabajo Colaborativo

### Estrategia Recomendada: Trabajo por Ramas

**Opción 1: Ramas por Persona (Recomendado para principiantes)**

```bash
# Persona 1
git checkout -b desarrollo-juan
# Trabaja en Hero y Footer

# Persona 2  
git checkout -b desarrollo-maria
# Trabaja en Biography y Awards

# Persona 3
git checkout -b desarrollo-carlos
# Trabaja en Discography y Legacy
```

**Opción 2: Ramas por Feature (Más profesional)**

```bash
# Cualquier persona puede trabajar en cualquier feature
git checkout -b feature/hero
git checkout -b feature/biography
git checkout -b feature/discography
# etc.
```

### Ciclo de Trabajo Diario

**1. Siempre empezar con pull:**
```bash
git checkout main
git pull origin main
```

**2. Crear o cambiar a tu rama:**
```bash
git checkout -b tu-rama
# o si ya existe
git checkout tu-rama
```

**3. Hacer cambios en el código**
- Edita los archivos en VS Code o tu editor favorito
- Guarda los cambios

**4. Ver qué cambiaste:**
```bash
git status
git diff
```

**5. Agregar cambios:**
```bash
# Agregar todo
git add .

# O agregar archivos específicos
git add components/Hero.tsx
git add app/globals.css
```

**6. Hacer commit:**
```bash
git commit -m "Añadir sección Hero con animaciones de entrada"
```

**7. Subir a GitHub:**
```bash
git push origin tu-rama
```

**8. Crear Pull Request en GitHub:**
- Ve a GitHub.com
- Verás un botón "Compare & pull request"
- Click y describe tus cambios
- Asigna a un compañero para review
- Espera aprobación
- Merge a main

## 🔧 División de Trabajo Sugerida

### Persona 1: Fundación y Estructura
**Archivos:**
- `components/Hero.tsx` ✅
- `components/Footer.tsx` ✅
- `app/layout.tsx` ✅
- `README.md` ✅

**Commits sugeridos (10+):**
1. "Configurar proyecto Next.js inicial"
2. "Añadir Hero component con estructura básica"
3. "Implementar animaciones de entrada en Hero"
4. "Añadir gradientes y efectos visuales al Hero"
5. "Crear Footer component"
6. "Añadir enlaces sociales al Footer"
7. "Implementar scroll indicator en Hero"
8. "Optimizar responsive en Hero"
9. "Actualizar README con instrucciones"
10. "Refinar estilos del Footer"
11. "Añadir easter egg al Footer"

### Persona 2: Contenido Biográfico
**Archivos:**
- `components/Biography.tsx` ✅
- `components/Awards.tsx` ✅
- `app/globals.css` ✅

**Commits sugeridos (10+):**
1. "Crear componente Biography con estructura"
2. "Añadir sección de datos rápidos"
3. "Implementar timeline de eventos"
4. "Añadir animaciones a Biography"
5. "Crear componente Awards"
6. "Implementar grid de premios"
7. "Añadir sección de logros destacados"
8. "Añadir quote section a Awards"
9. "Configurar estilos globales de Tailwind"
10. "Añadir efectos de grano y textura"
11. "Optimizar responsive en Biography"
12. "Refinar animaciones de timeline"

### Persona 3: Discografía y Legado
**Archivos:**
- `components/Discography.tsx` ✅
- `components/Legacy.tsx` ✅
- `app/page.tsx` ✅

**Commits sugeridos (10+):**
1. "Crear componente Discography"
2. "Añadir grid de álbumes"
3. "Implementar hover effects en álbumes"
4. "Añadir sección de estadísticas"
5. "Crear componente Legacy"
6. "Implementar grid de impacto cultural"
7. "Añadir sección de canciones icónicas"
8. "Implementar declaración final en Legacy"
9. "Configurar página principal"
10. "Optimizar carga de componentes"
11. "Añadir efectos de scroll"
12. "Refinar responsive en Discography"

## 🐛 Resolución de Conflictos

### ¿Qué es un conflicto?

Cuando dos personas editan el mismo archivo en las mismas líneas.

### Ejemplo de conflicto:

```
<<<<<<< HEAD
<h1 className="text-5xl">EMINEM</h1>
=======
<h1 className="text-7xl">MARSHALL MATHERS</h1>
>>>>>>> feature/mi-rama
```

### Cómo resolverlo:

1. **Comunicarse con el equipo**
   - "¿Cuál versión dejamos?"
   - Decidir en conjunto

2. **Editar el archivo manualmente**
   ```jsx
   // Elegir una versión o combinar
   <h1 className="text-7xl">EMINEM</h1>
   ```

3. **Eliminar marcadores de conflicto**
   - Quita `<<<<<<< HEAD`
   - Quita `=======`
   - Quita `>>>>>>> rama`

4. **Hacer commit de la resolución**
   ```bash
   git add .
   git commit -m "Resolver conflicto en título del Hero"
   git push
   ```

## 🚀 Deployment en GitHub Pages

### Opción 1: Usando GitHub Actions (Automático)

1. Ve a Settings → Pages
2. Source: GitHub Actions
3. Se deployará automáticamente en cada push a main

### Opción 2: Manual

```bash
# Hacer build
npm run build

# Los archivos estarán en /out
# Subir esos archivos a la rama gh-pages
```

La URL será: `https://hackdevcol.github.io/NTD_Taller2/`

## ✅ Checklist de Verificación

### Antes de Entregar

- [ ] Todos los colaboradores tienen acceso al repo
- [ ] Cada persona tiene 10+ commits significativos
- [ ] No hay errores de ortografía en commits
- [ ] La página funciona en `npm run dev`
- [ ] El build funciona: `npm run build`
- [ ] La página está deployed en GitHub Pages
- [ ] README está completo
- [ ] Documento de entrega listo

### Verificar Commits

```bash
# Ver todos los commits
git log --oneline

# Ver commits por autor
git log --author="TuNombre"

# Contar commits por autor
git shortlog -s -n
```

## 🆘 Problemas Comunes y Soluciones

### "npm: command not found"
- Instala Node.js desde nodejs.org
- Reinicia la terminal

### "Permission denied" en GitHub
- Verifica que aceptaste la invitación
- Verifica tus credenciales de GitHub

### "Port 3000 is already in use"
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Página en blanco después del build
- Verifica el `next.config.js`
- Asegúrate que `output: 'export'` está configurado

### Merge conflict muy complejo
- Pide ayuda al equipo
- Usa una herramienta visual: VS Code tiene un excelente merge editor

## 📞 Comunicación del Equipo

### Buenas Prácticas

1. **Daily Standup (5 min diarios)**
   - ¿Qué hice ayer?
   - ¿Qué haré hoy?
   - ¿Tengo algún bloqueador?

2. **Grupo de WhatsApp/Discord**
   - Avisar cuando haces push
   - Pedir review de Pull Requests
   - Compartir errores y soluciones

3. **Documentar Decisiones**
   - Anotar en README
   - Dejar comentarios en código
   - Usar descripciones claras en PRs

## 🎓 Recursos Adicionales

- **Git:** https://git-scm.com/doc
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Markdown:** https://www.markdownguide.org/

## 💡 Tips Finales

1. **Commitea frecuentemente** - Mejor muchos commits pequeños que uno gigante
2. **Pull antes de push** - Evita conflictos
3. **Comunica** - Habla con tu equipo
4. **Haz backup** - Copia tu trabajo localmente
5. **Lee los errores** - La terminal te dice qué está mal
6. **Pide ayuda** - Todos estamos aprendiendo

---

¡Éxito con el taller! 🚀

**Recuerda:** "Success is my only option, failure's not" 🎤
