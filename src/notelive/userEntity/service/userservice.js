import axios from 'axios';
import {obtenerIdDelPinPorPin, obtenerPinPorId} from '../../services/pinService.';
import {User} from "@/notelive/userEntity/models/user.entity";
const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';

function generateUniqueId() {
    const randomId = Math.random().toString(36).substr(2, 10);
    const timestamp = Date.now().toString(36);
    return timestamp + randomId;
}

export async function createTempUser(username, rol) {
    try {
        const password = generateUniqueId();
        const tempUser = new User(
            '',
            username,
            password,
            '',
            '',
            '',
            '',
            rol,
            ''
        );

        // Realizar POST a users para agregar al usuario temporalmente creado
        await axios.post(`${BASE_URL}/users`, tempUser);
        return password;
    } catch (error) {
        console.error('Error al crear usuario temporal:', error.message);
        throw error;
    }
}


async function getUserInfo(userId) {
    console.log("este es el parámetro recibido por getUserInfo", userId);
    try {
        const response = await axios.get(`${BASE_URL}/users?password=${userId}`);
        console.log("Respuesta de la solicitud HTTP:", response.data);
        return response;

    } catch (error) {
        console.error('Error fetching user information:', error);
        throw error;
    }
}


function isProfessor(userData) {
    return userData && userData.usertype === 'Profesor';
}

export { getUserInfo, isProfessor };

export async function getUsersInWaitingRoom(PIN) {
    try {
        const pinID = await obtenerIdDelPinPorPin(PIN);
        console.log('ID del PIN:', pinID);

        const pinData = await obtenerPinPorId(pinID);
        if (!pinData) {
            console.log('No se encontró la sala.');
            return [];
        }



        return pinData;
    } catch (error) {
        console.error('Error fetching users in waiting room:', error.message);
        throw error;
    }
}
