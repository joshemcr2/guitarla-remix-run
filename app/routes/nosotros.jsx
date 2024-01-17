import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'


export function meta() {
    return ([
        {
            title: 'GuitarLA - Sobre Nosotros',
            description: 'Venta de guitarras, blog de musica'
        }
    ])
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {

    return (
        <>
            <main className="contenedor nosotros">
                <h2 className="heading">Nosotros</h2>

                <div className="contenido">
                    <img src={imagen} alt='imagen nosotros' />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae dolor tincidunt, feugiat lacus eget, dapibus urna. Nulla facilisi.
                            Donec tincidunt libero non mauris iaculis vestibulum. Pellentesque accumsan sollicitudin justo sit amet euismod. Mauris rutrum iaculis porta.
                            Mauris consequat non dolor nec ultricies. Donec laoreet elementum augue ac placerat. Curabitur a bibendum mi. Aliquam ultrices, metus nec eleifend cursus,
                            lectus sem ullamcorper augue, sed lobortis massa velit nec est. Aliquam velit quam, ultricies sit amet viverra non, vulputate vitae nibh. In hac habitasse platea dictumst.
                            Nulla bibendum sapien molestie nunc viverra, id luctus lectus rhoncus
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae dolor tincidunt, feugiat lacus eget, dapibus urna. Nulla facilisi.
                            Donec tincidunt libero non mauris iaculis vestibulum. Pellentesque accumsan sollicitudin justo sit amet euismod. Mauris rutrum iaculis porta.
                            Mauris consequat non dolor nec ultricies. Donec laoreet elementum augue ac placerat. Curabitur a bibendum mi. Aliquam ultrices, metus nec eleifend cursus,
                            lectus sem ullamcorper augue, sed lobortis massa velit nec est. Aliquam velit quam, ultricies sit amet viverra non, vulputate vitae nibh. In hac habitasse platea dictumst.
                            Nulla bibendum sapien molestie nunc viverra, id luctus lectus rhoncus.
                        </p>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Nosotros