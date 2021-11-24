import React, { useState, useEffect, useMemo } from "react";
import { Card, Container } from "react-bootstrap";
// import fruta from "../../assets/mango.png";
import "./CardProductos.css";

const CardPagProduct = () => {
  const productos = [
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d726",
      },
      nombre_tienda: "Tienda Bienaventurada",
      telefono_tienda: 3205148963,
      email_tienda: "tiendabienaventurada@gmail.com",
      direccion_tienda: "Cra. 36 # 34-03 ",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Banano",
      precio_kg: 1400,
      url_img: "https://bit.ly/Banano_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d727",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Banano",
      precio_kg: 1300,
      url_img: "https://bit.ly/Banano_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d728",
      },
      nombre_tienda: "Tienda la Cosecha",
      telefono_tienda: 3019857845,
      email_tienda: "lacosecha@gmail.com",
      direccion_tienda: "Santa Isabel Mz 32 Cs 7",
      ciudad: "Dosquebradas",
      tipo_producto: "Frutas",
      nombre_producto: "Coco",
      precio_kg: 2800,
      url_img: "https://bit.ly/Coco_coco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d729",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Coco",
      precio_kg: 3000,
      url_img: "https://bit.ly/Coco_coco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72a",
      },
      nombre_tienda: "Tienda Angelita",
      telefono_tienda: 3156983564,
      email_tienda: "tiendangelita@gmail.com",
      direccion_tienda: "Santa Isabel Mz 50 Cs 25",
      ciudad: "Dosquebradas",
      tipo_producto: "Frutas",
      nombre_producto: "Mango",
      precio_kg: 1200,
      url_img: "https://bit.ly/Mango_oneco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72b",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Mango",
      precio_kg: 1300,
      url_img: "https://bit.ly/Mango_oneco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72c",
      },
      nombre_tienda: "Tienda la Moneda",
      telefono_tienda: 3016938745,
      email_tienda: "lamoneda@gmail.com",
      direccion_tienda: "Manzana 29 Local 1, Bosques de la Acuarela",
      ciudad: "Dosquebradas",
      tipo_producto: "Frutas",
      nombre_producto: "Mango",
      precio_kg: 1400,
      url_img: "https://bit.ly/Mango_oneco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72d",
      },
      nombre_tienda: "Rapitienda El tesoro",
      telefono_tienda: 3226589632,
      email_tienda: "rapieltesoro@gmail.com",
      direccion_tienda: "Carrera 50 #49-29",
      ciudad: "Andes",
      tipo_producto: "Frutas",
      nombre_producto: "Mango",
      precio_kg: 1500,
      url_img: "https://bit.ly/Mango_oneco",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72e",
      },
      nombre_tienda: "Tienda Angelita",
      telefono_tienda: 3156983564,
      email_tienda: "tiendangelita@gmail.com",
      direccion_tienda: "Santa Isabel Mz 50 Cs 25",
      ciudad: "Dosquebradas",
      tipo_producto: "Frutas",
      nombre_producto: "Manzana Roja",
      precio_kg: 6400,
      url_img: "https://bit.ly/Manzana_Roja",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d72f",
      },
      nombre_tienda: "Rapitienda El tesoro",
      telefono_tienda: 3226589632,
      email_tienda: "rapieltesoro@gmail.com",
      direccion_tienda: "Carrera 50 #49-29",
      ciudad: "Andes",
      tipo_producto: "Frutas",
      nombre_producto: "Manzana Roja",
      precio_kg: 6500,
      url_img: "https://bit.ly/Manzana_Roja",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d730",
      },
      nombre_tienda: "Tienda Bienaventurada",
      telefono_tienda: 3205148963,
      email_tienda: "tiendabienaventurada@gmail.com",
      direccion_tienda: "Cra. 36 # 34-03 ",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Manzana Roja",
      precio_kg: 6300,
      url_img: "https://bit.ly/Manzana_Roja",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d731",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Frutas",
      nombre_producto: "Kiwi",
      precio_kg: 7500,
      url_img: "https://bit.ly/Kiwi_Kiwi",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d732",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Ajo",
      precio_kg: 6300,
      url_img: "https://bit.ly/Ajo_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d733",
      },
      nombre_tienda: "Tienda Angelita",
      telefono_tienda: 3156983564,
      email_tienda: "tiendangelita@gmail.com",
      direccion_tienda: "Santa Isabel Mz 50 Cs 25",
      ciudad: "Dosquebradas",
      tipo_producto: "Verduras",
      nombre_producto: "Ajo",
      precio_kg: 6200,
      url_img: "https://bit.ly/Ajo_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d734",
      },
      nombre_tienda: "Tienda la Cosecha",
      telefono_tienda: 3019857845,
      email_tienda: "lacosecha@gmail.com",
      direccion_tienda: "Santa Isabel Mz 32 Cs 7",
      ciudad: "Dosquebradas",
      tipo_producto: "Verduras",
      nombre_producto: "Ajo",
      precio_kg: 6100,
      url_img: "https://bit.ly/Ajo_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d735",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Pepino",
      precio_kg: 800,
      url_img: "https://bit.ly/Pepino_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d736",
      },
      nombre_tienda: "Rapitienda El tesoro",
      telefono_tienda: 3226589632,
      email_tienda: "rapieltesoro@gmail.com",
      direccion_tienda: "Carrera 50 #49-29",
      ciudad: "Andes",
      tipo_producto: "Verduras",
      nombre_producto: "Pepino",
      precio_kg: 900,
      url_img: "https://bit.ly/Pepino_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d737",
      },
      nombre_tienda: "Tienda Bienaventurada",
      telefono_tienda: 3205148963,
      email_tienda: "tiendabienaventurada@gmail.com",
      direccion_tienda: "Cra. 36 # 34-03 ",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Pepino",
      precio_kg: 850,
      url_img: "https://bit.ly/Pepino_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d738",
      },
      nombre_tienda: "Tienda Bienaventurada",
      telefono_tienda: 3205148963,
      email_tienda: "tiendabienaventurada@gmail.com",
      direccion_tienda: "Cra. 36 # 34-03 ",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Tomate",
      precio_kg: 1500,
      url_img: "https://bit.ly/Tomate_Tomate",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d739",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Tomate",
      precio_kg: 1600,
      url_img: "https://bit.ly/Tomate_Tomate",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73a",
      },
      nombre_tienda: "Tienda Angelita",
      telefono_tienda: 3156983564,
      email_tienda: "tiendangelita@gmail.com",
      direccion_tienda: "Santa Isabel Mz 50 Cs 25",
      ciudad: "Dosquebradas",
      tipo_producto: "Verduras",
      nombre_producto: "Tomate",
      precio_kg: 1550,
      url_img: "https://bit.ly/Tomate_Tomate",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73b",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Verduras",
      nombre_producto: "Zanahoria",
      precio_kg: 1900,
      url_img: "https://bit.ly/Zanahoria_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73c",
      },
      nombre_tienda: "Tienda la Moneda",
      telefono_tienda: 3016938745,
      email_tienda: "lamoneda@gmail.com",
      direccion_tienda: "Manzana 29 Local 1, Bosques de la Acuarela",
      ciudad: "Dosquebradas",
      tipo_producto: "Verduras",
      nombre_producto: "Zanahoria",
      precio_kg: 1950,
      url_img: "https://bit.ly/Zanahoria_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73d",
      },
      nombre_tienda: "Tienda la Cosecha",
      telefono_tienda: 3019857845,
      email_tienda: "lacosecha@gmail.com",
      direccion_tienda: "Santa Isabel Mz 32 Cs 7",
      ciudad: "Dosquebradas",
      tipo_producto: "Verduras",
      nombre_producto: "Zanahoria",
      precio_kg: 2050,
      url_img: "https://bit.ly/Zanahoria_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73e",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Carnes",
      nombre_producto: "Lomo",
      precio_kg: 28000,
      url_img: "https://bit.ly/Lomo_res",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d73f",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Carnes",
      nombre_producto: "Sobrebarriga",
      precio_kg: 20000,
      url_img: "https://bit.ly/Sobrebarriga_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d740",
      },
      nombre_tienda: "Rapitienda El tesoro",
      telefono_tienda: 3226589632,
      email_tienda: "rapieltesoro@gmail.com",
      direccion_tienda: "Carrera 50 #49-29",
      ciudad: "Andes",
      tipo_producto: "Carnes",
      nombre_producto: "Lomo",
      precio_kg: 30000,
      url_img: "https://bit.ly/Lomo_res",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d741",
      },
      nombre_tienda: "Rapitienda JP",
      telefono_tienda: 3185470364,
      email_tienda: "rapitiendajp@gmail.com",
      direccion_tienda: "Carrera 36 # 34-03",
      ciudad: "Pereira",
      tipo_producto: "Carnes",
      nombre_producto: "Pechuga",
      precio_kg: 15000,
      url_img: "https://bit.ly/Pechuga_",
    },
    {
      _id: {
        $oid: "618dca0bca600d86f5e4d742",
      },
      nombre_tienda: "Tienda Bienaventurada",
      telefono_tienda: 3205148963,
      email_tienda: "tiendabienaventurada@gmail.com",
      direccion_tienda: "Cra. 36 # 34-03 ",
      ciudad: "Pereira",
      tipo_producto: "Carnes",
      nombre_producto: "Pechuga",
      precio_kg: 18000,
      url_img: "https://bit.ly/Pechuga_",
    },
  ];
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setProduct(productos);
  }, []);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredProduct = useMemo(
    () =>
      product.filter((product) => {
        return product.nombre_producto
          .toLowerCase()
          .includes(search.toLowerCase());
      }),
    [product, search]
  );

  return (
    <Container>
      <h1 className="text-center my-5">PRODUCTOS</h1>
      <div className="search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      

      <div className="container-products">
        {filteredProduct.map((product) => (
          <Card className="container-cards">
            <Card.Img variant="top" src={product.url_img} width="10px" />
            <Card.Body>
              <Card.Title>{product.nombre_producto}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                {product.tipo_producto}
              </Card.Subtitle>
              <Card.Text>{product.nombre_tienda}</Card.Text>
              <hr />
              <span className="mx-2">{product.telefono_tienda}</span>
              <h3 className="mt-2">$ {product.precio_kg}</h3>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CardPagProduct;
