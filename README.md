## Clonar el repositorio

```
git clone https://github.com/alejandroBao/Juego_paises.git
```

## Instalar las dependencias del proyecto

```
npm install
```

## Crear mi rama de trabajo

```
git switch -c nombreRama
```

## Traer los cambios del compañero

```
git pull origin main
```

## Comprobar el linter (ESLint)

```
npm run lint
```

## Comprobar el formato (Prettier)

```
npm run format:check
```

## Formatear un archivo con Prettier

```
npx prettier --write package.json
```

## Ignorar archivos en Prettier

```
Set-Content .prettierignore "package-lock.json","dist"
```

## Ver el estado de los cambios

```
git status
```

## Dejar de subir un archivo al repo sin borrarlo (.env)

```
git rm --cached .env
```

## Ignorar archivos en Git (.gitignore)

```
Set-Content .gitignore ".env",".idea/"
```

## Crear un archivo de ejemplo de variables de entorno

```
Set-Content .env.example "BD_password=","VITE_VERSION=1.1"
```

## Guardar los cambios (commit)

```
git add .
git commit -m "Mensaje del commit"
```

## Subir mi rama a GitHub

```
git push -u origin feature/Alejandro
```

Para los siguientes pushes basta con `git push`.

## Actualizar mi rama después de un merge en main

```
git switch feature/Alejandro
git pull origin main
```

El `git pull`, el `commit` y el `push` se repiten cada vez que hay cambios. La Pull Request y el merge se hacen en GitHub, no con comandos.

## Ejecutar la aplicación

```
npm run dev
```

## Crear la versión de producción

```
npm run build
npm run preview
```

## Crear el archivo de variables de entorno

```
copy .env.example .env
```

En Linux o macOS: `cp .env.example .env`

## Arreglar errores de ESLint y Prettier automáticamente

```
npx eslint . --fix
npx prettier --write .
```

Se ejecutan en ese orden. Lo que ESLint no pueda arreglar solo (por ejemplo, variables sin usar) hay que corregirlo a mano.

## Ver en qué rama estoy

```
git branch
```

## Cambiar de rama

```
git switch main
git switch feature/Alejandro
```

## Descargar los cambios sin aplicarlos

```
git fetch origin
```

## Ver el historial de commits

```
git log --oneline --graph --all -n 15
```

## Ver qué ha cambiado en los archivos

```
git diff
git --no-pager diff --stat
```

## Descartar los cambios de un archivo

```
git restore package-lock.json
```

## Mover un archivo conservando su historial

```
git mv origen destino
```

## Comprobar la conexión con GitHub

```
git remote -v
```

## Descargar una dependencia desarrollo (eslint)

```
npm i -D eslint
```

## Descargar una dependencia producción (dayjs)

```
npm i dayjs
```

## Comprobar y actualizar una dependencia (vite)

```
npm outdated vite
npm update vite
```
