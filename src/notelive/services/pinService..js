import axios from 'axios';
import { createTempUser } from '../userEntity/service/userservice';

const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';
export async function obtenerIdDelPinPorPin(pin) {
    try {
        const response = await axios.get(`${BASE_URL}/pins?pins=${pin}`);
        const pinData = response.data.find(item => item.pins === pin);
        if (pinData) {
            console.log(`ID del PIN encontrado: ${pinData.id}`);
            return pinData.id;
        } else {
            console.log('El PIN no fue encontrado.');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener el ID del PIN:', error.message);
        return null;
    }
}
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
            pinData.usersID.push({ id: userId });
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
    const pinData = response.data.find(item => item.pins === pin);
    if (!pinData) {
        console.log('PIN no encontrado');
        return false;
    }
    const pinId = pinData.id;
    console.log(`PIN encontrado: ${pinId}, Nombre del usuario: ${inputName}`);
    await introducirUsuarioEnSalaAsync(pinId, inputName);
    return true;

}


async function obtenerPinPorId(id) {
    try {
        const response  = await axios.get(`${BASE_URL}/pins/${id}`);
        console.log('responsedata de obtener pinporid: ', response.data)
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
