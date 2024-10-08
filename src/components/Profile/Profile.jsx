import PropTypes from "prop-types";
import css from "./profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.profileBackground}>
        <div className={css.profile}>
          <div className={css.description}>
            <img src={image} alt="User avatar" className={css.avatar} />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
          </div>
          <ul className={css.stats}>
            <li>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>{" "}
        </div>
      </div>
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
