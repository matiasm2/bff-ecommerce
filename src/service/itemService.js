const ItemRestAdapter = require('../restAdapter/itemRestAdapter')
const CategoryRestAdapter = require('../restAdapter/categoryRestAdapter')
const { mapSearchResponseToItemList, mapDetailAndDescriptionToItem } = require('../mapper/ItemAdapter')
const { CATEGORY_KEY } = require('../utils/constants')

class ItemService {
  itemRepository
  categoryRepository
  constructor () {
    this.itemRepository = new ItemRestAdapter()
    this.categoryRepository = new CategoryRestAdapter()
  }

  #getMaxCategoryId = ({ results, available_filters: filters }) => {
    const categories = filters?.find(filter => filter.id === CATEGORY_KEY)?.values
    return categories?.reduce((max, current) => (max.results > current.results ? max : current)).id || results[0]?.category_id
  }

  getItemPage = async (searchInput) => {
    const response = await this.itemRepository.getItemPage(searchInput)
    const maxCategoryId = this.#getMaxCategoryId(response)
    const category = maxCategoryId ? await this.categoryRepository.getCategoryById(maxCategoryId) : {}
    return mapSearchResponseToItemList(response, category)
  }

  getItemDetail = async (id) => {
    const detail = await this.itemRepository.getItemById(id)
    const description = await this.itemRepository.getItemDescriptionById(id)
    const category = await this.categoryRepository.getCategoryById(detail.category_id)
    return mapDetailAndDescriptionToItem(detail, description, category)
  }
}

module.exports = ItemService
