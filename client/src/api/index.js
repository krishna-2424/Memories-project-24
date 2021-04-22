import axios from 'axios';

const url = 'https://memories-project-24.herokuapp.com/posts';


export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => {
//     console.log(newPost);
//     return axios.post(url,newPost);
// };
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id,updatedPost) =>{
    console.log(updatedPost);
    return axios.patch(`${url}/${id}`,updatedPost);

} 
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
