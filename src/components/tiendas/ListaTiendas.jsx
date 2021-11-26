import React, { useEffect, useState } from 'react'
import obtenerTiendas from '../../services';

const ListaTiendas = () => {


    const [tiendas, setTiendas] = useState([]);



    useEffect(() => {
        async function cargarTiendas() {
            const response = await obtenerTiendas()

            if (response.status === 200) {
                setTiendas(response.data)
            }
        }
        cargarTiendas()
    }, [])

    return (
        <>
            {
                tiendas.map((tienda, key) => {
                    console.log(tienda._id);
                    return <ul key={key}>{tienda._id.nombre_tienda}-{tienda._id.email_tienda}</ul>
                })
            }
        </>
    )
}

export default ListaTiendas
