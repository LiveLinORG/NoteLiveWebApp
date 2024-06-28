import axios from 'axios';
//const BASE_URL = 'http://190.239.59.168:3000';
//const BASEDATABASE_URL = 'http://190.239.59.168:44353';
const BASEDATABASE_URLAPI = 'http://190.239.59.168:44353/api/v1';

export async function createRoom(roomData) {
    const response = await axios.post(`${BASEDATABASE_URLAPI}/room`, roomData);
    console.log(response.data);
    return response.data;
}

export async function getUserByUsername(username) {
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/user/getbyusername/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el usuario por nombre de usuario:', error.message);
        throw error;
    }
}
export async function getRoomById(roomId) {
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/room/${roomId}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error al obtener la sala por ID:', error.message);
        throw error;
    }
}

export async function uploadpdf(roomId, formData) {
    try {
        const response = await axios.put(`${BASEDATABASE_URLAPI}/room/upload-pdf/${roomId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading PDF:', error);
        return null;
    }
}
export async function getPDFbyId(pdfId){
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/pdf/getbyid/${pdfId}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error al obtener la sala por ID:', error.message);
        throw error;
    }
}
export async function addUserToRoom(userId, addUserToRoomData) {
    try {
        const response = await axios.post(`${BASEDATABASE_URLAPI}/room/${userId}`, addUserToRoomData);
        return response.data;
    } catch (error) {
        console.error('Error adding user to room:', error);
        throw error;
    }
}
export async function getRoomByName(roomName) {
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/room/byname/${roomName}`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener la sala por nombre "${roomName}":`, error.message);
        throw error;
    }
}
export async function postQuestion(createQuestionData) {
    try {
        const response = await axios.post(`${BASEDATABASE_URLAPI}/question/postquestion`, createQuestionData);
        return response.data;
    } catch (error) {
        console.error('Error posting question:', error);
        throw error;
    }
}
export async function getQuestionsInRoom(roomId) {
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/question/getquestionsinroom/${roomId}`);
        console.log('Room ID used for fetching:', roomId);

        return response.data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
}
export async function getUserById(userId) {
    try {
        const response = await axios.get(`${BASEDATABASE_URLAPI}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el usuario por ID:', error.message);
        throw error;
    }
}