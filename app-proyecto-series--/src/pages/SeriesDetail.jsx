import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SeriesDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.log(error))
  }, [id])

  if (!show) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={show?.image?.medium} alt={show?.name} className='img-fluid' style={{ width: '100%' }} />
        </div>
        <div className='col-md-8'>
          <h3>{show?.name}</h3>
          <table className='table'>
            <tbody>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Language</td>
                <td>{show?.language}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>{show?.genres.join(', ')}</td>
              </tr>
              <tr>
                <td>Premiered</td>
                <td>{show?.premiered}</td>
              </tr>
              <tr>
                <td>Summary</td>
                <td dangerouslySetInnerHTML={{ __html: show?.summary }} />
              </tr>
              <tr>
                <td>Episodes</td>
                <td>
                  {show?.episodes && show.episodes.length > 0
                    ? (
                      <ul>
                        {show.episodes.map(episode => (
                          <li key={episode.id}>
                            Episode {episode.number}: {episode.name}
                          </li>
                        ))}
                      </ul>
                      )
                    : (
                        'No episodes found'
                      )}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <h5>Ver la serie en línea:</h5>
            <a href={show?.officialSite} target='_blank' rel='noopener noreferrer'>
              {show?.officialSite}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeriesDetail
