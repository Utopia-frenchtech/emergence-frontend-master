import Vue from 'vue'

const filters = {
}

Object.keys(filters).map(filterKey => Vue.filter(
    filterKey,
    filters[filterKey]
))
