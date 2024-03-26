const { AUTHOR, PREVIEW_IMAGE_URL, ID_KEY } = require('../utils/constants')

const buildItem = (responseItem) => {
  const thumbnail = responseItem.thumbnail_id ? PREVIEW_IMAGE_URL.replace(ID_KEY, responseItem.thumbnail_id) : responseItem.thumbnail
  return {
    id: responseItem.id,
    title: responseItem.title,
    price: {
      currency: responseItem.currency_id,
      amount: Math.trunc(responseItem.price),
      decimals: (responseItem.price % 1).toFixed(2)
    },
    picture: thumbnail,
    link: responseItem.permalink,
    condition: responseItem.condition,
    free_shipping: responseItem.shipping?.free_shipping
  }
}

const getCategoryPath = (category = {}) => {
  return category?.path_from_root?.map(path => path.name)
}

const mapSearchResponseToItemList = ({ results }, category) => {
  const items = results?.map(responseItem => {
    return buildItem(responseItem)
  })

  return {
    author: AUTHOR,
    categories: getCategoryPath(category),
    items
  }
}

const mapDetailAndDescriptionToItem = (detail, description, category) => {
  return {
    author: AUTHOR,
    categories: getCategoryPath(category),
    item: {
      ...buildItem(detail),
      sold_quantity: detail.initial_quantity,
      description: description.plain_text
    }
  }
}

module.exports = { mapSearchResponseToItemList, mapDetailAndDescriptionToItem }
