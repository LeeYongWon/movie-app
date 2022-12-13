import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Movie=({id,title,coverImg,summary ,genres })=>{
    return(
              <div >
                <img src={coverImg} alt={title} />
                <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
                <hr/>
              </div>
    )
}

Movie.propTypes = {
  coverImg:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  id:PropTypes.number.isRequired

}


export default Movie