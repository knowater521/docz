import { useContext } from 'react'
import sort from 'array-sort'

import { doczState, Entry } from '../state'
import { compare } from '../utils/helpers'

export const useDocs = (): Entry[] | null => {
  const { entries, config } = useContext(doczState.context)
  if (!entries || !config) return null
  const arr = entries.map(({ value }) => value)
  return sort(arr, (a: Entry, b: Entry) => compare(a.name, b.name))
}
