const Register = (props) => {
    return (
        <div class="container">
        <h1>Formulario de login</h1>

        <form action="/login/register" method="post">
            <div class="mb-3">
            <label for="username" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="inputUser" name="username" placeholder="Introduce tu usuario"/>
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Introduce tu contraseña"/>
            <input type="password" class="form-control" id="inputPassword2" name="password2" placeholder="Repita su contraseña"/>
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>

        </div>
    );
}

export default Register;