import axios from 'axios';
require('dotenv').config();

const baseurl = process.env.REACT_APP_API_URL + "/api"

export async function AddFigure(props) {
    let res = await axios.post(baseurl + "/figures", props);
    return res;
}

export async function ViewFigures() {
    let figures = [];
    await axios
        .get(baseurl + "/figures")
        .then((res) => {
            console.log(res.data);
            figures = res.data; 
        })
        .catch((e) => console.log(e));
    return figures;
}

export async function UpdateFigure(id, props) {
    let res = await axios.put(baseurl + "/figures/" + id, props).catch((e) => console.log(e));
    return res;
}

export async function DeleteFigure(id) {
    let res = await axios.delete(baseurl + "/figures/" + id).catch((e) => console.log(e));
    return res;
}

export default { AddFigure, ViewFigures };