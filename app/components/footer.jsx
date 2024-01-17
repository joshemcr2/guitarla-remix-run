import React from 'react'
import Navegacion from './navegacion.jsx'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='contenedor contenido'>
                    <Navegacion />
                    <p className='copyright'>GuitarLA, {''}Hecho Por Jose A Munoz Cardozo {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer