import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

async function obtenerTiendas() {
    try {
        const response = await axios({
            url: baseUrl,
            method: 'GET'
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export default obtenerTiendas