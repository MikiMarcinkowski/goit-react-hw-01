import PropTypes from "prop-types";
import css from "./friend-list.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const availability = isOnline ? "is Online" : "is Offline";

  return (
    <li key={id} className={css.itemFriends}>
      <img src={avatar} className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p
        
            className={
              isOnline
                ? `${css.status} ${css.online}`
                : `${css.status} ${css.offline}`
            }
          
        
      >{`${availability}`}</p>
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
