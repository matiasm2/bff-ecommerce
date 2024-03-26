const axios = require('axios')
const {
  CATEGORY_ENDPOINT, ID_KEY
} = require('../utils/constants')

class CategoryRestAdapter {
  async getCategoryById (id) {
    try {
      const url = CATEGORY_ENDPOINT.replace(ID_KEY, id)
      console.log('Obteniendo la categoria con id: ' + id)
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error('Error al obtener la categoria ID')
    }
  }
}

module.exports = CategoryRestAdapter
