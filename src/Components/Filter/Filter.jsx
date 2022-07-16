import React from 'react'
import "./Filter.css";

export default function Filter() {
  return (
    <div>
        <select className="form-select border-0 py-3 rounded shadow" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Filter by region</option>
            <option value="1">Africa</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="3">Europe</option>
            <option value="3">Oceania</option>
        </select>
    </div>
  )
}
