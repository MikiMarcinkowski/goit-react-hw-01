import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
