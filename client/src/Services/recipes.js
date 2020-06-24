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

export const search = async (query) => {
  try {
    const response = await api.get('/recipes/search', { params: query })
    return response.data
  } catch (error) {
    throw error
  }
}

export const addCommentAPI = async (id, comment) => {
  try {
    const response = await api.put(`/recipes/${id}/comments`, comment)
    return response.data
  } catch (error) {
    throw error
  }
}