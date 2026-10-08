## Clonar el repositorio

```
git clone https://github.com/alejandroBao/Juego_paises.git
```

## Instalar las dependencias del proyecto

```
cd vite-project
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