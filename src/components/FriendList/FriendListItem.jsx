import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const availability = isOnline ? "is Online" : "is Offline";
  return (
    <li key={id}>
      <img src={avatar} />
      <p>{name}</p>
      <p>{`${availability}`}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
