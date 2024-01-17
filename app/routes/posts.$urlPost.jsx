import { getPost } from "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import styles from '../styles/blog.css'
import { formatearFecha } from "~/utils/helpers"

export async function loader({ params }) {
    const { urlPost } = params
    const post = await getPost(urlPost)

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }
    return post
}

export function meta({ data }) {

    if (!data) {
        return {
            title: 'Post No Encontrad',
            description: 'Guitarras, Venta de Guitarras, Guitarra no encontrada'
        }
    }
    return [{
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, Venta de Guitarras`
    }]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


const UrlPost = () => {

    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes
    return (
        <article className="contenedor post mt-3">
            <img className='imagen' src={imagen.data.attributes.url} />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>{contenido}</p>
            </div>
        </article>
    )
}

export default UrlPost