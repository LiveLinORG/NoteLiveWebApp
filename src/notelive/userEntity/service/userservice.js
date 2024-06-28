import axios from 'axios';
import {obtenerIdDelPinPorPin, obtenerPinPorId} from '../../services/pinService.';
import {User} from "@/notelive/userEntity/models/user.entity";
import {iduser} from "../../../../router/router";
const BASE_URL = 'http://190.239.59.168:3000';
const BASEDATABASE_URL = 'http://190.239.59.168:44353';
//const BASEDATABASE_URLAPI = 'http://190.239.59.168:44353api/v1/';

/**
 * @summary
 * Get user info using a Get request to the API
 * @param id
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export async function getUserInfoWR(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users?password=${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error obteniendo información para la contraseña ${id}: ${error.message}`);
    }
}

/**
 * @summary
 * Generate a random id
 * @returns {string}
 */
function generateUniqueId() {
    const randomId = Math.random().toString(36).substr(2, 10);
    const timestamp = Date.now().toString(36);
    return timestamp + randomId;
}

/**
 * @summary
 * Create a user with a name and rol
 * @param username
 * @param rol
 * @returns {string}
 * @throws {Error}
 */
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

/**
 * @summary
 * Get user information by userId
 * @param userId
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
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


/**
 * @summary
 * Verify if the user is a "Profesor"
 * @param userData
 * @returns {boolean}
 */
function isProfessor(userData) {
    return userData && userData.usertype === 'Profesor';
}

export { getUserInfo, isProfessor };

/**
 * @summary
 * Create a user "Profesor" in the Database
 * @param userData
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export async function createTEMPUser(userData) {
    const url = `${BASEDATABASE_URL}/sign-up`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,
                role: 'Profesor',
                name: userData.name,
                lastName: userData.lastName,
                correo: userData.correo,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        return response.json();
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

/**
 * @summary
 * Create a user "Alumno" in the database
 * @param userData
 * @returns {Promise<Object>}
 * @throws {Error}
 */
export async function createTEMPUserJoin(userData) {
    const url = `${BASEDATABASE_URL}/sign-up`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData,
                password: userData,
                role: 'Alumno',
                name: userData,
                lastName: userData,
                correo: userData,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        return response.json();
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
}

/**
 * @summary
 * Get the users in the waiting room by Pin
 * @param PIN
 * @returns {Promise<string[]>}
 * @throws {Error}
 */
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