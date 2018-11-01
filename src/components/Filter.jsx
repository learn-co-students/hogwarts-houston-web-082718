import React from 'react'

const Filter = ({ handleChange }) => {
    return (
        <div>
            <select onChange={handleChange}>
                <option value="all" default>All</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
                <option value="greased">Greased?</option>
            </select>
        </div>
    )
}

export default Filter
