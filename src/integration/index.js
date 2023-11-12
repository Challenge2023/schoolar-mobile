import axios from "axios";

export const GenerateContent = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return { data: response.data, err: null };
    } catch (error) {
        return { data: null, err: error };
    }
};

export const GetStudentList = async (url) => {
    try {
        const response = await axios.get(url);
        return { data: response.data, err: null };
    } catch (error) {
        return { data: null, err: error };
    }
};

export const DeleteStudentData = async (url, headers) => {
    try {
        const response = await axios.delete(url, { headers });
        return { data: response.data, err: null };
    } catch (error) {
        return { data: null, err: error };
    }
};