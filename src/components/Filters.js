import React from 'react'

function Filters() {
  return (
    <>
        <div className='filter-options'>
            <input className='searchbar' type='text' placeholder='Search by any data parameter...'/>
            <input className='filters' type='date' />
            <select className='filters'>
                <option>Status</option>
            </select>
            <select className='filters'>
                <option>Company</option>
            </select>
            <select className='filters'>
                <option>More Filters</option>
            </select>
            <button className='filters btn-neworder'>+ New Order</button>
        </div>
        <hr></hr>
    </>
  )
}

export default Filters