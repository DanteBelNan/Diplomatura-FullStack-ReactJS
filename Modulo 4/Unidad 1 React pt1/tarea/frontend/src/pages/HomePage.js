import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/logo.png" alt="logo" />
            </div>

            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                </div>
                <div className='testimonio'>
                    <span className='cita'>Excelente</span>
                    <span className='autor'>Pepe Juarez</span>
                </div>
            </div>
        </main>
    );
}

export default HomePage;