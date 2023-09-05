import React from 'react';

const contactoPage = (props) => {
    return (
        <main className='holder contacto'>
            <h2>Contacto Rápido</h2>
            <form action="" method='' className='formulario'>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <textarea name=""></textarea>
                </p>
                <p className='acciones'>
                    <input type="submit" value="Enviar" />
                </p>
            </form>

            <div className='datos'>
                <h2>Otras vías de comunicación</h2>
                <p>Contactenos por aquí</p>
                <ul>
                    <li>Telefono</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Discord</li>
                    <li>Email</li>
                </ul>
            </div>
        </main>
    );
}

export default contactoPage;