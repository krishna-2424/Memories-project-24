import * as api from '../api';
import { FETCH_ALL,CREATE,UPDATE,DELETE,LIKE} from '../constants/actionTypes';

//Actiion Creators

export const getPosts = () => async(dispatch) => {
    try {
        
        const {data}=await api.fetchPosts();
        //const action={type:'FETCH_ALL',payload:[]}
        dispatch({type:FETCH_ALL,payload:data});

    } catch (error) {
        console.log(error);
    }

}

export const createPost = (post) => async(dispatch) => {
        try{
            console.log(post);
            const {data} = await api.createPost(post);
         //   console.log(post);
            dispatch({type:CREATE,payload:data});
        }
        catch(error){
            console.log(error);
        }
        
        
        
}

export const updatePost = (id,post) => async(dispatch) => {
    try{
        const {data}=await api.updatePost(id,post);
        console.log(data);
        dispatch({type:UPDATE,payload:data});
        
    }
    catch(error){
        console.log(error);
    }

}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        console.log('deleting');
        dispatch({type:DELETE,payload:id});
        
        
    } catch (error) {
        console.log(error);
    }

}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data}=await api.likePost(id);
        dispatch({type:LIKE,payload:data});
    } catch (error) {
        console.log(error);
    }
}