import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromprs from '../../prompts/confirmation';

export default class ProductosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProducto: this.props.getIdProducto(),
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
                tipo_producto: '',
                precio: '',
                url_img: '',
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
            .put(`/productos${this.state.idProducto}`, this.state.producto)
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
                    <h2>Editar Productos</h2>
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
                        
                        <Form.Label>Nombre Producto</Form.Label>
                        <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                            value={this.state.producto.nombre_producto}
                            onChange={(e) => this.setValue('nombre_producto', e.target.value)}>
                                <option value="0">Seleccione una opción</option>
                                <option value="1">Ajo</option>
                                <option value="2">Banano</option>
                                <option value="3">Coco</option>
                                <option value="4">Kiwi</option>
                                <option value="5">Lomo de res</option>
                                <option value="6">Mango</option>
                                <option value="7">Manzana Roja</option>
                                <option value="8">Naranja</option>
                                <option value="9">Pechuga</option>
                                <option value="10">Pepino</option>
                                <option value="11">Piña</option>
                                <option value="12">Sobrebarriga</option>
                                <option value="13">Tomate</option>
                                <option value="13">Zanahoria</option>
                            </Form.Select>

                        
                            <Form.Label>Tipo Producto</Form.Label>
                            <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                            value={this.state.producto.tipo_producto}
                            onChange={(e) => this.setValue('tipo_producto', e.target.value)}>
                                <option value="1">Seleccione una opción</option>
                                <option value="1">Frutas</option>
                                <option value="2">Verduras</option>
                                <option value="3">Carnes</option>
                            </Form.Select>
                            

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Precio por Kilo</Form.Label>
                            <Form.Control
                                value={this.state.producto.precio}
                                onChange={(e) => this.setValue('precio_kg', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Select className="mb-3" 
                            controlId="formBasic"
                            aria-label="Default select example"
                            value={this.state.producto.url_img}
                            onChange={(e) => this.setValue('url_img', e.target.value)}>
                                <option value="0">Seleccione una opción</option>
                                <option value="1">https://bit.ly/Ajo_</option>
                                <option value="2">https://bit.ly/Banano_</option>
                                <option value="3">https://bit.ly/Coco_coco</option>
                                <option value="4">https://bit.ly/Kiwi_Kiwi</option>
                                <option value="5">https://bit.ly/Lomo_res</option>
                                <option value="6">https://bit.ly/Mango_oneco</option>
                                <option value="7">https://bit.ly/Manzana_Roja</option>
                                <option value="8">https://bit.ly/Naranja_Naranja</option>
                                <option value="9">https://bit.ly/Pechuga_</option>
                                <option value="10">https://bit.ly/Pepino_</option>
                                <option value="11">https://bit.ly/Piña_</option>
                                <option value="12">https://bit.ly/Sobrebarriga_</option>
                                <option value="13">https://bit.ly/Tomate_Tomate</option>
                                <option value="13">https://bit.ly/Zanahoria_</option>
                            </Form.Select>

                        <Button
                            variant="success"
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
