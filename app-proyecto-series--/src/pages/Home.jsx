import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [shows, setShows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter] = useState('all')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredShows = shows.filter(show => {
    if (categoryFilter === 'all') {
      return show.name.toLowerCase().includes(searchTerm.toLowerCase())
    } else {
      return (
        show.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        show.genres.includes(categoryFilter)
      )
    }
  })

  return (
    <div className='container'>
      <form className='form-inline justify-content-center mt-4'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Buscar series'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary ml-2'>
          Buscar
        </button>
      </form>
      <div className='row mt-4'>
        {filteredShows.map(show => (
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={show.id}>
            <div className='card'>
              <img
                className='card-img-top'
                src={show.image.medium}
                alt={show.name}
              />
              <div className='card-body'>
                <Link to={`/show/${show.id}`} className='card-link'>
                  <h5 className='card-title'>{show.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
