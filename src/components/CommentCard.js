const CommentCard = (props) => {
  return (
    <div className="comment-card-s">
      <img
        src="https://api.pepcorns.com/clientassets/defaultImg.png"
        alt="user-img"
      />
      <h3>{props.name}</h3>
      <span>{props.time}</span>
      <p>{props.text}</p>
      <button>reply</button>
      {props.reply != undefined ? (
        <>
          <hr />
          <h3>Replies (1) Found</h3>
          <i className="fa-solid fa-arrow-right" />
          <h3>{props.reply.name}</h3>
          <span>{props.reply.time}</span>
          <p>{props.reply.text}</p>
          <button>reply</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentCard;
