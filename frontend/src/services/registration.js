import axios from 'axios'

const getAllUser = async (baseURL) => {
    const response = await axios.get(baseURL)
    return response.data
}

const createNewUser = async (baseURL, newUser) => {
    const response = await axios.post(baseURL, newUser)
    return response.data
}

export default {
    getAllUser,
    createNewUser
}

