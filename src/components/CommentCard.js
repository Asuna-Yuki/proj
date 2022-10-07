export const CommentCard = (props) => {
  return (
    <div className=' card comment-card'>
      <section>
        <div className='image-container'>
          <img
            src='https://api.pepcorns.com/clientassets/defaultImg.png'
            alt='user-img'
          />
        </div>

        <h3>{props.name}</h3>
        <span>{props.time}</span>
      </section>

      <p>{props.text}</p>
      <section>
        <button className='btn btn-outline btn-reply'>reply</button>
      </section>
      {props.reply != undefined ? (
        <div className='reply'>
          <hr />
          <p>Replies (1) Found</p>
          <section>
            <i className='fa-solid fa-arrow-right' />
            <h3>{props.reply.name}</h3>
            <span>{props.reply.time}</span>
          </section>

          <p>{props.reply.text}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
