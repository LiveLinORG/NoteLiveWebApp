import axios from 'axios';
import {obtenerIdDelPinPorPin, obtenerPinPorId} from '../../services/pinService.';
import {User} from "@/notelive/userEntity/models/user.entity";
import {iduser} from "../../../../router/router";

export async function getUserInfoWR(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users?password=${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error obteniendo información para la contraseña ${id}: ${error.message}`);
    }
}

//const BASE_URL = 'https://66355711415f4e1a5e244cb2.mockapi.io';
const BASE_URL = 'http://190.239.59.223:3000';
function generateUniqueId() {
    const randomId = Math.random().toString(36).substr(2, 10);
    const timestamp = Date.now().toString(36);
    return timestamp + randomId;
}

export async function createTempUser(username, rol) {
    try {
        const password = generateUniqueId();
        const tempUser = new User(
            password,
            username,
            password,
            '',
            '',
            '',
            '',
            rol,
            ''
        );

        await axios.post(`${BASE_URL}/users`, tempUser);
        iduser.value=password;
        return password;
    } catch (error) {
        console.error('Error al crear usuario temporal:', error.message);
        throw error;
    }
}


async function getUserInfo(userId) {
    if (userId.length < 3) {
        throw new Error("El userId debe tener al menos 3 caracteres.");
    }

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

        console.log('pindata: ',pinData)
        console.log('pindata usersID: ',pinData.usersID)

        return pinData.usersID;
    } catch (error) {
        console.error('Error fetching users in waiting room:', error.message);
        throw error;
    }
}
