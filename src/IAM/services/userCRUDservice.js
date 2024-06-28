import axios from 'axios';
import {obtenerIdDelPinPorPin, obtenerPinPorId} from "../../notelive/services/pinService.";
import {User} from "@/notelive/userEntity/models/user.entity";
import {iduser} from "../../../router/router";
const BASE_URL = '';
//const BASEDATABASE_URL = 'http://190.239.59.168:44353';
const BASEDATABASE_URL = 'http://localhost:5228';

//const BASEDATABASE_URLAPI = 'http://190.239.59.168:44353api/v1/';

export async function getUserInfoWR(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users?password=${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error obteniendo información para la contraseña ${id}: ${error.message}`);
    }
}

function generateUniqueId() {
    const randomId = Math.random().toString(36).substr(2, 10);
    const timestamp = Date.now().toString(36);
    return timestamp + randomId;
}


export async function registerUser(userData) {

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

export async function loginUser(userData) {


    const url = `${BASEDATABASE_URL}/sign-in`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,

            }),
        });

        if (!response.ok) {
            throw new Error('Error al iniciar sesion');
        }

        return response.json();
    } catch (error) {
        console.error('Error al iniciar sesion:', error);
        throw error;
    }
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


export async function getUserInformation(username) {
    console.log("este es el parámetro recibido por getUserInfo", username);
    try {
        const response = await axios.get(`${BASEDATABASE_URL}/api/v1/user/getinformationbyusername/${username}`);
        console.log("Respuesta de la solicitud HTTP:", response.data);
        return response;
    } catch (error) {
        console.error('Error fetching user information:', error);
        throw error;
    }
}

export async function getRoomsInformation(){
    try {
        const response = await axios.get(`${BASEDATABASE_URL}/api/v1/room`);
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

export {isProfessor };
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