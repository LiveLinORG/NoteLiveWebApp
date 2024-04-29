import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function generarPinAleatorio() {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    return pin;
}

async function enviarPinAlServicio(id) {
    try {

        const response = await axios.post(`${BASE_URL}/pins`, { id });

        console.log('PIN agregado con éxito:', response.data);
    } catch (error) {
        console.error('Error al agregar el PIN:', error.message);
    }
}

export { generarPinAleatorio, enviarPinAlServicio };