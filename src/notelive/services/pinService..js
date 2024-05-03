import axios from 'axios';

const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';

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

async function buscarPin(pin, inputName) {
    if (pin.trim().length < 4 || inputName.trim().length <= 3) {
        console.log(pin.trim().length <= 3 ? 'El PIN no existe.' : 'El nombre debe ser mayor a 4 caracteres');
        return false;
    }

    const response = await axios.get(`${BASE_URL}/pins?pins=${pin}`).catch(error => {
        console.error('Error al buscar el PIN:', error.message);
        return { data: null };
    });

    console.log(response.data ? `PIN encontrado: ${response.data}, Nombre del usuario: ${inputName}` : 'El PIN no existe.');
    return !!response.data;
}


export { generarPinAleatorio, enviarPinAlServicio, buscarPin };
