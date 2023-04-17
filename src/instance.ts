import axios from "axios";

const InstanceMainApp =
    axios.create({
        baseURL: 'https://dummyjson.com'
    });

export default InstanceMainApp;

// InstanceMainApp.defaults.headers.common['Authorization'] =