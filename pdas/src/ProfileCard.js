function ProfileCard({ title, handle, image, description }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p className="title is-4">Title is {title}</p>
          <p className="subtitle is-6">Handle is {handle} </p>
        </div>
        <div className="content"> {description} </div>
      </div>
    </div>
  );
}

export default ProfileCard;
