'use strict'

const API = require('static-api-generator')
const booksApi = new API({
  addIdToFiles: true,
  blueprint: 'data/:page/:category',
  outputPath: 'temp/api/',
  pluralise: false
});
booksapi.generate({
  endpoints: ['page', 'category']
});
