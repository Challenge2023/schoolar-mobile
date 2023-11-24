import axios from "axios";
import base64 from "react-native-base64";
import { baseUrl } from "../../services/api";

export const getAxios = async (CallBack, url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        CallBack(data);
    } catch (error) {
        console.error(error);
    }
};

export const getInfo = async (CallBack, url) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrl}/${url}`

    axios
        .get(completeUrl, { headers })
        .then((response) => {
            console.log("Dados requisitados com sucesso!")
            CallBack(response.data)
        }).catch(function (error) {
            console.log(error);
        })
};

export const getInfoById = async (CallBack, url, id) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrl}/${url}/${id}`

    axios
        .get(completeUrl, { headers })
        .then((response) => {
            console.log("Dados requisitados com sucesso!")
            CallBack(response.data)
        }).catch(function (error) {
            console.log(error);
        })
};

export const deleteInfoById = async (CallBack, url, id) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrl}/${url}/${id}`;

    axios
        .delete(completeUrl, { headers })
        .then((response) => {
            console.log("Dados excluídos com sucesso!");
            CallBack(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const postAxios = async (CallBack, url, data) => {
    const username = 'vitor';
    const password = '12345';
    const basicAuth = base64.encode(`${username}:${password}`);

    const headers = {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
    };

    const completeUrl = `${baseUrl}/${url}`

    axios
        .post(completeUrl, data, { headers })
        .then((response) => {
            console.log("Inserido no banco de dados!")
            CallBack(response.status)
        }).catch(function (error) {
            console.log(error);
            CallBack(error)
        })
};