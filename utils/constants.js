const AUTHOR = {
  "name": "Matias",
  "lastname": "Mendoza"
};
const ITEM_SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLA/search';
const ITEM_DETAIL_ENDPOINT = 'https://api.mercadolibre.com/items/:id';
const ITEM_DESCRIPTION_ENDPOINT = 'https://api.mercadolibre.com/items/:id/description';
const CATEGORY_ENDPOINT = 'https://api.mercadolibre.com/categories/:id';
const PREVIEW_IMAGE_URL = 'https://http2.mlstatic.com/D_NQ_NP_:id-V.webp'
const ID_KEY = ':id';

const CATEGORY_KEY = 'category';

module.exports = {AUTHOR, ITEM_SEARCH_ENDPOINT, ITEM_DETAIL_ENDPOINT, ITEM_DESCRIPTION_ENDPOINT, CATEGORY_ENDPOINT, PREVIEW_IMAGE_URL, ID_KEY, CATEGORY_KEY};
