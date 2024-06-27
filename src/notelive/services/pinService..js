import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {createTempUser, createTEMPUserJoin,} from '../userEntity/service/userservice';
//const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';
const BASE_URL = 'http://190.239.59.168:3000';
export async function obtenerIdDelPinPorPin(pin) {
    try {
        const response = await axios.get(`${BASE_URL}/pins?pins=${pin}`);
        const pinData = response.data.find(item => item.pins === pin);
        if (pinData) {
            console.log(`ID del PIN encontrado (obtenerIdDelPinPorPin): ${pinData.id}`);
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
    localStorage.setItem('PinConsultas',pin);
    return pin;
}

export async function enviarPinAlServicio(pin) {
    const uniqueId = uuidv4(); // Generate a unique ID
    const payload = {
        id: uniqueId,
        pins: pin,
        usersID: [],
        creator: {},
        sesionIniciada: false

    };

    try {
        const response = await axios.post(`${BASE_URL}/pins`, payload);
        console.log('PIN agregado con éxito:', response.data);
    } catch (error) {
        console.error('Error al agregar el PIN:', error.message);
    }
}


async function introducirUsuarioEnSalaAsync(piID, inputName) {
    try {
        const userId = await createTempUser(inputName, "Alumno");
        const userTODATABASE = await createTEMPUserJoin(inputName);
        console.log('User agregado a database: ', userTODATABASE)

        const pinData = await obtenerPinPorId(piID);

        if (pinData) {
            pinData.usersID.push({ id: userId });
            await axios.put(`${BASE_URL}/pins/${piID}`, pinData);
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
}export async function modificarSesionIniciadaDelPin(pinId) {
    console.log("------------------------------");
    console.log("MODIFICACION DE LA SESION INICIADA");
    console.log("------------------------------");

    try {
        // Obtener el ID del PIN
        const IDPIN = await obtenerIdDelPinPorPin(pinId);

        // Obtener los datos del PIN por su ID
        const pinData = await obtenerPinPorId(IDPIN);

        // Modificar solo el atributo sesionIniciada
        pinData.sesionIniciada = true;

        // Realizar la solicitud PUT con Axios para actualizar el PIN
        await axios.put(`${BASE_URL}/pins/${IDPIN}`, pinData);

        console.log(`Sesión iniciada para el PIN: ${pinId}`);
    } catch (error) {
        console.error('Error al modificar la sesión iniciada del PIN:', error.message);
    }
}

export async function verificarSesionIniciada(pinId) {
    try {
        const IDPIN = await obtenerIdDelPinPorPin(pinId);
        const pinData = await obtenerPinPorId(IDPIN);
        if (pinData) {
            console.log(`Estado de sesión iniciada para el PIN ${pinId}:`, pinData.sesionIniciada);
            console.log(pinId)
            return pinData.sesionIniciada;
        } else {
            console.log('No se pudo encontrar el PIN.');
            return false;
        }
    } catch (error) {
        console.error('Error al verificar la sesión iniciada del PIN:', error.message);
        return false;
    }
}

export { generarPinAleatorio, buscarPin,obtenerPinPorId };
