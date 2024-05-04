import axios from 'axios';
import { createTempUser } from '../userEntity/service/userservice';

const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';

function generarPinAleatorio() {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    return pin;
}

async function enviarPinAlServicio(pins) {
    try {
        const response = await axios.post(`${BASE_URL}/pins`, { pins });
        console.log('PIN agregado con éxito:', response.data);
    } catch (error) {
        console.error('Error al agregar el PIN:', error.message);
    }
}

async function introducirUsuarioEnSalaAsync(pin, inputName) {
    try {
        const userId = await createTempUser(inputName, "Alumno");
        const pinData = await obtenerPinPorId(pin);

        if (pinData) {
            pinData.userIds.push({ id: userId });
            await axios.put(`${BASE_URL}/pins/${pin}`, pinData);
            console.log('ID de usuario agregada con éxito al PIN:', userId);
        } else {
            console.log('No se pudo encontrar el PIN.');
        }
    } catch (error) {
        console.error('Error al introducir usuario en sala:', error.message);
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

    if (response.data) {
        console.log(`PIN encontrado: ${response.data}, Nombre del usuario: ${inputName}`);
        await introducirUsuarioEnSalaAsync(pin, inputName);
        return true;
    } else {
        console.log('El PIN no existe.');
        return false;
    }
}

async function obtenerPinPorId(id) {
    try {
        const response  = await axios.get(`${BASE_URL}/pins/${id}`);
        if (response.data) {
            console.log('Datos del PIN:', response.data);
            return response.data;
        } else {
            console.log('El PIN no existe.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el PIN:', error.message);
        return null;
    }
}


export { generarPinAleatorio, enviarPinAlServicio, buscarPin,obtenerPinPorId };
