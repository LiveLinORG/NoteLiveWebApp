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
        const id = generateUniqueId();

        const tempUser = new User(
            '',
            username,
            id,
            '',
            '',
            '',
            '',
            rol,
            ''
        );

        // Realizar POST a users para agregar al usuario temporalmente creado
        await axios.post(`${BASE_URL}/users`, tempUser);

        return id;
    } catch (error) {
        console.error('Error al crear usuario temporal:', error.message);
        throw error;
    }
}


async function getUserInfo(userId) {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user information:', error);
        throw error;
    }
}

function isProfessor(userData) {
    return userData && userData.usertype === 'Profesor';
}

export { getUserInfo, isProfessor };

export async function getUsersInWaitingRoom (roomId) {
    try {
        console.log(roomId)

        const pinID = obtenerIdDelPinPorPin(roomId);
        console.log(pinID);

        const pinData = await obtenerPinPorId(pinID);

        if (!pinData) {
            console.log('No se encontró la sala.');
            return [];
        }

        const usersInWaitingRoom = [];

        for (const userId of pinData.usersID) {
            const userData = await getUserInfo(userId);
            if (userData) {
                usersInWaitingRoom.push(userData);
            }
        }

        return usersInWaitingRoom;
    } catch (error) {
        console.error('Error fetching users in waiting room:', error.message);
        throw error;
    }
}
