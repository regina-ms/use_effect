import React from 'react'
import { ListProps, dataEl } from '../types'

export default function List({ list, onclick }: ListProps) {
  return (
    <ul className=' list list-group'>
      {
        list.map((el: dataEl) => <li className='list-group-item' key={el.id} onClick={() => onclick(el)}>{el.name}</li>)
      }
    </ul>
  )
}
