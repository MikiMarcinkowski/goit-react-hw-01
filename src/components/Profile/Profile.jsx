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
