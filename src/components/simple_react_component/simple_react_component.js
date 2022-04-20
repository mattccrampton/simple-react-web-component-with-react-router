'use strict'

import React, { useState, useEffect } from 'react'
import { HashRouter, Link, Routes, Route } from "react-router-dom"
import { Button } from '@material-ui/core'
import LoginIcon from '@material-ui/icons/AccountCircle';



const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchExternalDataFromAPI = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // const [user] = data.results
    // setData(user)
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchExternalDataFromAPI()
  }, [])

  return { data, loading }
}

const Expenses = function() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}

const Invoices = function() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
    </main>
  );
}

const SimpleReactComponent = function(props) {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

  // We don't have data yet, so we'll render a placeholder
  if (loading) {
    return (
      <div>
          <div>Loading data from API...</div>
      </div>
    )
  }

  // We hava data, lets display it
  const listStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    background: "rgb(215, 215, 230)",
  }

  const listItemStyle = {
    padding: "5px",
  }

  return(
    <HashRouter>
      <Button startIcon={<LoginIcon />} color="primary" variant="contained">
        Click Me
      </Button>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
      <Routes>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
      <ul style={listStyle}>
        { data.map((data_item) =>
          <li key={data_item.id} style={listItemStyle}>
            BADASS!!! #{data_item.id}: {data_item.title}
          </li>
        )}
      </ul>
    </HashRouter>
  )

  // return (
  //   <ul style={listStyle}>
  //     { data.map((data_item) =>
  //       <li key={data_item.id} style={listItemStyle}>
  //         OK THIS WORKED #{data_item.id}: {data_item.title}
  //       </li>
  //     )}
  //   </ul>
  // )

}

export default SimpleReactComponent
