import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Card = ({ src, alt, name, species, created, onFavoriteClick }) => {
  const dispatch = useDispatch();
  const favoriteIconColor = useSelector(
    (state) => state.favoriteIconColor[name] || 'gray',
  );

  const handleFavoriteClick = () => {
    const newColor = favoriteIconColor === 'gray' ? 'yellow' : 'gray';
    dispatch({
      type: 'SET_FAVORITE_ICON_COLOR',
      payload: { cardName: name, color: newColor },
    });
    onFavoriteClick(newColor === 'yellow');
  };
  return (
    <div className="Card-box">
      <div className="Card-inside">
        <Image
          className="Card-img"
          width={325}
          height={330}
          src={src}
          alt={alt}
        />
        <div className="Card-favorites">
          add to your favorites:{' '}
          <span
            className="Card-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleFavoriteClick();
            }}
          >
            <FaStar color={favoriteIconColor} />
          </span>
        </div>
        <h3 className="Card-title">{name}</h3>
        {species}
        <div className="Card-text">
          <div>{created}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default Card;
