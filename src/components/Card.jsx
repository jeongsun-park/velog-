export default function Card({
  id,
  title,
  content,
  image,
  likes,
  userImage,
  comments,
  createdAt,
}) {
  const postData = new Date(createdAt);
  const curDate = Date.now();
  const diffDate = curDate - postData;
  const day = Math.floor(diffDate / 1000 / 60 / 60 / 24);

  return (
    <div className="card">
      <div className="card-top">
        <img src={image} alt="" id="card-main-img" />
        <div className="card-text">
          <h4>{title}</h4>
          <p>{content}</p>
          {day === 0 ? <span>오늘</span> : <span>{day}일전</span>}
          <span>·</span>
          <span>{`${comments}개의 댓글`}</span>
        </div>
      </div>
      <div className="card-footer">
        <span>
          <img src={userImage} alt="" id="card-user-img" />
          by <strong> {id}</strong>
        </span>
        <span>{likes}</span>
      </div>
    </div>
  );
}
