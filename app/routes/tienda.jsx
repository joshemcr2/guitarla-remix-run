import { useLoaderData, useOutletContext } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import styles from "~/styles/guitarras.css"


export function meta() {
    return [
        {
            title: 'GuitarLA - Tienda De Guitarras',
            description: 'GuitarLA - Nuestra Coleccion'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }

    ]
}

export async function loader() {
    const guitarras = await getGuitarras()
    return guitarras.data
}

const Tienda = () => {

    const guitarras = useLoaderData()


    return (
        <>
            <main className="contenedor">
                <ListadoGuitarras
                    guitarras={guitarras}
                    context={useOutletContext}
                />
            </main>
        </>

    )
}

export default Tienda
