import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from '../action'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={'SHOW_ALL'}>
      All
    </FilterLink>
    <FilterLink filter={'SHOW_COMPLETED'}>
      Active
    </FilterLink>
    <FilterLink filter={'SHOW_ACTIVE'}>
      Completed
    </FilterLink>
  </div>
)

export default Footer
