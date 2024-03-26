const axios = require('axios')
const {
  ITEM_SEARCH_ENDPOINT, ITEM_DETAIL_ENDPOINT,
  ITEM_DESCRIPTION_ENDPOINT, ID_KEY
} = require('../utils/constants')

class ItemRestAdapter {
  async getItemPage (searchInput) {
    try {
      const url = `${ITEM_SEARCH_ENDPOINT}?q=${searchInput}&limit=4`
      console.log('Obteniendo los items desde: ' + url)
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error('Error al obtener la página de búsqueda')
    }
  }

  async getItemById (id) {
    try {
      const url = ITEM_DETAIL_ENDPOINT.replace(ID_KEY, id)
      console.log('Obteniendo el item con id: ' + id)
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error('Error al obtener el item por ID')
    }
  }

  async getItemDescriptionById (id) {
    try {
      const url = ITEM_DESCRIPTION_ENDPOINT.replace(ID_KEY, id)
      console.log('Se realiza llamado para obtencion de la descripcion del item ' + id)
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      throw new Error('Error al obtener la descripcion del item por ID')
    }
  }
}

module.exports = ItemRestAdapter
