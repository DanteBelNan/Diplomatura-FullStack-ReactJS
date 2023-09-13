import React from 'react';
import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="Holder">
                <img src="img/logo.pgn" width="100" alt="Ecommerce Shop"/>
                <h1>Ecommerce Shop</h1>
            </div>
        </header>
    );
}

export default Header;