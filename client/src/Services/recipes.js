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
        const response = await api.get(`/recipe/${id}`)
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

export const filter = async () => {
    try {
        const response = await api.get('/recipes/filtered')
        return response.data
    } catch (error) {
        throw error
    }
}