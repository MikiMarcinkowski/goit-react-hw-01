;

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(({id,  avatar, name, isOnline}) => (
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
