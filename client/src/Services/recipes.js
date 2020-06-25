import api from './apiConfig'

export const getRecipes = async () => {
  try {
    const response = await api.get('/recipes')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getRecipe = async id => {
  try {
    const response = await api.get(`/recipes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createRecipe = async product => {
  try {
    const response = await api.post('/recipes', product)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateRecipe = async (id, product) => {
  try {
    const response = await api.put(`/recipes/${id}`, product)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteRecipe = async id => {
  try {
    const response = await api.delete(`/recipes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const filter = async (filter) => {
  try {
    const response = await api.get('/recipes/filtered', filter)
    return response.data
  } catch (error) {
    throw error
  }
}

<<<<<<< HEAD
export const addComment = async (id, comment) => {
=======
export const search = async (query) => {
  try {
    const response = await api.get('/recipes/search', { params: query })
    return response.data
  } catch (error) {
    throw error
  }
}

export const addCommentAPI = async (id, comment) => {
>>>>>>> 896dccb1f43ecb8d3542138e3ddd4d6b344ca6db
  try {
    const response = await api.post(`/recipes/${id}/comments`, comment)
    console.log(id, comment)
    console.log(response.data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateComment = async (recipeId, id, comment) => {
  try {
    const response = await api.put(`/recipes/${recipeId}/comments/${id}`, comment)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (recipeId, id) => {
  try {
    const response = await api.delete(`/recipes/${recipeId}/comments/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}