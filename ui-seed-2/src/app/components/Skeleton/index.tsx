import PropTypes from 'prop-types'
import './Skeleton.scss'

const Skeleton = ({ multiply }: { multiply: unknown }) => {
  return (
    <div className='skeleton'>
      {Array(multiply).map((index) => (
        <div key={`skeleton_${index}`} className='skeleton__content' />
      ))}
    </div>
  )
}

Skeleton.defaultProps = {
  multiply: 1,
}

Skeleton.propTypes = {
  multiply: PropTypes.number,
}

export default Skeleton
