import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://12-assignment-server-smoky.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;