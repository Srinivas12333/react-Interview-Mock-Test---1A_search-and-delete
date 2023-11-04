import './index.css'

const SongItem = props => {
  const {trackDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    deleteSong(id)
    console.log('triggered')
  }

  return (
    <li className="list-item">
      <div className="image-name-genre-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-and-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-and-delete-container">
        <p className="duration">{duration}</p>

        <button
          className="button"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          D
        </button>
      </div>
    </li>
  )
}

export default SongItem
