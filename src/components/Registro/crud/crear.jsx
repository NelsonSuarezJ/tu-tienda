import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            loading: false,
            producto: {
                nombre_tienda: '',
                telefono_tienda: '',
                email_tienda: '',
                direccion_tienda: '',
                ciudad: '',
                nombre_producto: '',
                tipo_producto:'',
                precio:'',
                url_img:'',

            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            producto: {
                ...this.state.empleado,
                [index]: value,
            },
        });
    }

    guardarProductos() {
        this.setState({ loading: true });
        request
            .post('/registro_productos', this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="productos-crear-container">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h1>Crear Productos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('nombre', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('apellido_p', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>E-mail Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('apellido_m', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección Tienda</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('apellido_m', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('apellido_m', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre Producto</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('telefono', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Tipo Producto</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('mail', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Imágen</Form.Label>
                            <Form.Control
                                onChange={(e) => this.setValue('direccion', e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() => console.log(this.guardarProductos())}
                        >
                            Guardar Producto
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
