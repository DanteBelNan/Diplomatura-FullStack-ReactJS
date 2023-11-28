const LoginPage = (props) => {
    return (
        <div class="container">
        <h1>Formulario de login</h1>
  
        <form action="/login" method="post">
          <div class="mb-3">
            <label for="username" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="inputUser" name="username" placeholder="Introduce tu usuario"/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Introduce tu contraseña"/>
          </div>
          <button type="submit" class="btn btn-primary">Iniciar sesión</button>
          <a href="/login/register" class="btn btn-secondary">Registrate</a>
          <a href="/login/forgotPassword">Olvide mi contraseña</a>
          
        </form>
          
              <p>Usuario o clave incorrecto.</p>
          
  
          
            <p></p>
          
      </div>
    );
} 

export default LoginPage