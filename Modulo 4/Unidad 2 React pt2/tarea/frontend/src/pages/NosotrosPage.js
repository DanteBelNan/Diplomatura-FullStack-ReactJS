import React from 'react';
import '../styles/components/pages/NosotrosPage.css';
const nosotrosPage = (props) => {
    return (
        <main className='holder'>
            <div className='historia'>
                <h2>Historia</h2>
                <p>Lorem</p>
                <p>Lorem</p>
            </div>

            <div className='staff'>
                <h2>Staff</h2>
                <div className='personas'>
                    <div className='persona'>
                        <img src="img/nosotros/nosotros1.jpg" alt="persona"/>
                        <h5>Juan</h5>
                        <h6>Cargo</h6>
                        <p>Lorem</p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default nosotrosPage;