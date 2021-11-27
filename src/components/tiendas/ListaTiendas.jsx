import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Card } from 'react-bootstrap'
import shop from "../../assets/shop.jpg";

const ListaTiendas = (props) => {
    return (

        <Card className="mb-3" border="secondary">
            <Card.Header>{props.tienda.nombre_tienda}</Card.Header>
            <Card.Img variant="top" src={shop} />
            <Card.Body>
                <Card.Title>{props.tienda.nombre_tienda}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.tienda.direccion_tienda}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.tienda.ciudad}</Card.Subtitle>
                <hr />
                <Card.Text className="mt-4">
                    <FontAwesomeIcon icon={faAt} />
                    <span className="m-2">{props.tienda.email_tienda}</span>
                </Card.Text>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="m-2">{props.tienda.telefono_tienda}</span>
            </Card.Body>
        </Card>
    )
}

export default ListaTiendas

