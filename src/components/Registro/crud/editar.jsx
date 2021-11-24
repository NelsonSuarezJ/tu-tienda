import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromprs from '../../prompts/confirmation';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdProducto(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation: {
                title: 'Modificar Productos',
                text: '¿Deseas modificar el registro de los productos?',
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
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getProducto();
    }

    getProducto() {
        this.setState({ loading: true });
        request
            .get(`/registro_productos/${this.state.idProducto}`)
            .then((response) => {
                this.setState({
                    producto: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    setValue(index, value) {
        this.setState({
            producto: {
                ...this.state.producto,
                [index]: value,
            },
        });
    }

    guardarProductos() {
        this.setState({ loading: true });
        request
            .put(`/registro_productos/${this.state.idProducto}`, this.state.producto)
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

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarProductos()
        );
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

                <ConfirmationPromprs
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h1>Editar Productos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre Tienda</Form.Label>
                            <Form.Control
                                value={this.state.producto.nombre_tienda}
                                onChange={(e) => this.setValue('nombre_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Teléfono Tienda</Form.Label>
                            <Form.Control
                                value={this.state.producto.telefono_tienda}
                                onChange={(e) => this.setValue('telefono_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Dirección Tienda</Form.Label>
                            <Form.Control
                                value={this.state.producto.direccion_tienda}
                                onChange={(e) => this.setValue('direccion_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>E-mail Tienda</Form.Label>
                            <Form.Control
                                value={this.state.producto.email_tienda}
                                onChange={(e) => this.setValue('direccion_tienda', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                value={this.state.producto.ciudad}
                                onChange={(e) => this.setValue('ciudad', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre Producto</Form.Label>
                            <Form.Control
                                value={this.state.producto.nombre_producto}
                                onChange={(e) => this.setValue('nombre_producto', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Tipo Producto</Form.Label>
                            <Form.Control
                                value={this.state.producto.nombre_producto}
                                onChange={(e) => this.setValue('tipo_producto', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Precio por Kilo</Form.Label>
                            <Form.Control
                                value={this.state.producto.precio}
                                onChange={(e) => this.setValue('precio', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                value={this.state.producto.url_img}
                                onChange={(e) => this.setValue('url_img', e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            Guardar Producto
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
