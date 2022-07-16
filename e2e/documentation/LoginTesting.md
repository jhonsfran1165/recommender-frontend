# Test End to End para Login 


## Casos de Uso 


### Casos de Fracaso

- Ingresar credenciales no registradas.
- Ingresar tipeando solo el nombre de usuario.
- Ingresar tipeando solo el password.
- Ingresar sin tipear nombre de usuario ni password.


### Casos de Éxito 

- Acceder con credenciales válidas.


## Estrucutura para los test 


### Mocks

En mocks se tiene información que se usará en los test, como por 
ejemplo los datos de un usuario.

_loginData.js_ en este mock encontramos dos objetos javascript con los 
atributos 'username' y 'password' que seran los datos de ingreso para
el formulario de login.


### View

Se trata de tener la lógica de la interfaz de usuario, para ello en el 
archivo _selectors.js_ se crean funciones con los diferentes selectores 
de la UI que serán usados. 

A continuación se listan los selectores empleados para el login: 

- form: Selecciona el formulario del login.
- nameField: Selecciona el campo de nombre de usuario del login.
- passwordField: Selecciona el campo de contraseña de usuario del login.
- navbar: Selecciona el navbar de la página de inicio de un usuario logeado correctamente.
- navLogout: Selecciona en el navbar el item de log out.


### Triggers

Los triggers son funciones de acciones que comunmente realiza un usuario como enviar un formulario o hacer click en algún campo o boton.

- submitForm: Este trigger envía el formulario de login. 

- typeUsername: Escribe el nombre de usuario en el formulario de login. Esta función recibe como parámetro un string con el nombre del usuario.

- typePassword: Escribe la contraseña del usuario en el formulario de login. Esta función recibe como parámetro un string con la contraseña.

- clearUsername: Resetea o limpia el campo de nombre de usuario del formulario de login.

- clearPassword: Resetea o limpia el campo de contraseña de usuario del formulario de login.

- onNavbar: Realiza click sobre el navbar del página de inicio de usuario.

- outHome: Realiza click sobre el item de log out. Para emplear este trigger debe asegurarse que se ha hecho click primero en el navbar, para ello se emplea el trigger _onNavbar_ explicado anteriormente. 


### Modules

En lo modules tenemos métodos auxiliares que implican una complejidad mayor.

Acontinución se explican los métodos auxiliares empleados para realizar los test del login, que se encuentran _modules/login.js_.

- login: Realiza el login partir de los parámetros de entrada nombre y contraseña de usuario que deben ser de tipo string. 

*Modo de uso*

```javascript
import {login} from "../modules/login";

login("nombre de usuario", "contraseña1234");

```

- logout: Realiza el logout desde la página de home del usuario.

*Modo de uso*

```javascript
import {logout} from "../modules/login";

logout();

```

- resetForm: Limpia los campos de nombre de usuario y contraseña del formulario de login.

*Modo de uso*

```javascript
import {resetForm} from "../modules/login";

resetForm();

```

- closeError: Cierra la ventana de error de usuario contraseña incorrectos.

*Modo de uso*

```javascript
import {closeError} from "../modules/login";

closeError();

```
### Scenarios

Se realizan los escenarios necesarios para validar los casos de uso, para ello se crea una clase _LoginPage.js_ con los métodos que implementan las validaciones para cada caso. 

*Métodos*

- validActiveField: Valida que el botón de iniciar sesión se encuentre inactivo.
- checkErrorMsg: Revisa si el mensaje de erro se ha renderizado. 
- validateErrorMsg: Valida que el contenido del mensaje sea el esperado ("Usuario o la contraseña son incorrectos").
- InHomeExpect: Válida que el usuario se encuentra en home.

### Test

Aquí se encuentra la implementación de los casos de usos, lo cual se realiza en el archivo _login.spec.js_.

### Aclaraciones finales 

Para correr un test se debe instanciar en el archivo _cypress/e2e/index.sep.js_ así por ejemplo para correr el test para el login se debe importar e instanciarlo de la siguiente manera.

```javascript
import {loginUser} from "../pages/login/test/login.spec"

// run login test 
loginUser();

```

Finalmente para que esto funcione se debe agregar la ruta _integrationFolder_ en la configuración de Cypress, ya que por defecto Cypress ejecuta los test que se encuentra en la carpeta _integration_. 

*Tipo de ejecución* 

Se puede controlar el tipo de ejecución de los test, con Cypress estos se pueden correr desde su interfaz gráfica, o por su consola en cuyo caso se generan snapshot y un video de la ejecución de los test en el browser. 

Para controlar el tipo de ejecución de Cypress se realiza a través del parámetro _entrypoint_  del contenedor _oceana-platform-cypress_ desde el archivo _docker-compose.override.yaml_ de la siguiente manera: 

Para ejecutar test desde GUI de Cypress

```
# ... 
entrypoint: cypress open --project /app
# ... 

```

Para ver ejecución solo por consola

```
# ... 
entrypoint: cypress run --project /app
# ... 

```