import axios from "axios";

export const GenerateContent = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return { data: response.data, err: null };
    } catch (error) {
        return { data: null, err: error };
    }
};