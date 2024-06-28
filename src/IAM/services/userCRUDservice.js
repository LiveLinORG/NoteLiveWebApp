import axios from 'axios';
import {obtenerIdDelPinPorPin, obtenerPinPorId} from "../../notelive/services/pinService.";
import {User} from "@/notelive/userEntity/models/user.entity";
import {iduser} from "../../../router/router";
const BASE_URL = '';
const BASEDATABASE_URL = 'http://190.239.59.168:44353';
//const BASEDATABASE_URL = 'http://localhost:5228';

//const BASEDATABASE_URLAPI = 'http://190.239.59.168:44353api/v1/';



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