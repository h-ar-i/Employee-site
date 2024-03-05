import { SERVER_URL } from "./SERVER_URL";
import { commonAPI } from "./commonAPI";

// add component call-upload mail
export const uploadEmailAPI = async(email)=>{
    //send response to add component
   return await commonAPI("POST",`${SERVER_URL}/email`,email)
}

//get email api called by view
export const getAllEmailAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/email`,"")
}

//store watch history
export const saveHistoryAPI =async ()=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component
export const  getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history
export const  removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//remove card
export const  removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/email/${id}`,{})
}

//save category
export const  addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/password`,categoryDetails)
}

//get category to category component
export const  getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/password`,"")
}

//remove category api
export const  removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/password/${id}`,{})
}

//get single video api
export const  getAVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/password/${id}`,"")
}

//update category
export const  updateCategoryAPI = async (categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/password/${categoryId}`,updatedCategoryDetails)
}