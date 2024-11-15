import os

def create_directory_structure(base_path):
  # Estructura completa de directorios
  directories = [
    # app structure
    'src/app/core/guards',
    'src/app/core/interceptors',
    'src/app/core/services',
    'src/app/shared/components',
    'src/app/shared/directives',
    'src/app/shared/pipes',
    'src/app/features/auth/pages',
    'src/app/features/auth/components',
    'src/app/features/auth/services',
    'src/app/layouts/main-layout',
    'src/app/layouts/auth-layout',
    'src/app/models/interfaces',
    'src/app/models/enums',
    # assets structure
    'src/assets/images',
    'src/assets/icons',
    'src/assets/styles',
    # environments
    'src/environments',
    # styles
    'src/styles'
  ]

  # Crear directorios
  for dir_path in directories:
    full_path = os.path.join(base_path, dir_path)
    os.makedirs(full_path, exist_ok=True)
    print(f"Created directory: {full_path}")

  # Lista de archivos a crear
  files = [
    'src/app/core/guards/auth.guard.ts',
    'src/app/core/interceptors/token.interceptor.ts',
    'src/app/core/interceptors/error.interceptor.ts',
    'src/app/core/services/auth.service.ts',
    'src/app/core/services/http.service.ts',
    'src/app/core/core.module.ts',
    'src/app/shared/shared.module.ts',
    'src/app/features/auth/auth.module.ts',
    'src/environments/environment.ts',
    'src/environments/environment.prod.ts',
    'src/styles/_variables.scss',
    'src/styles/styles.scss'
  ]

  # Crear archivos vacíos
  for file_path in files:
    full_path = os.path.join(base_path, file_path)
    with open(full_path, 'w') as f:
      pass  # Crear archivo vacío
    print(f"Created file: {full_path}")

if __name__ == "__main__":
  # Puedes cambiar esta ruta base según donde quieras crear la estructura
  base_path = "."  # El directorio actual
  create_directory_structure(base_path)
  print("Directory structure created successfully!")
