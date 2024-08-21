import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

import css from "./friend-list.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
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
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
