import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <img src={image} />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>

      <ul>
        <li>{stats.followers}</li>
        <li>{stats.views}</li>
        <li>{stats.likes}</li>
      </ul>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    folowers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
