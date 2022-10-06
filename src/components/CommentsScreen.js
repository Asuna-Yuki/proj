import React from "react";
import CommentCard from "./CommentCard";

const CommentsScreen = () => {
  const reply = {
    name: "Omkar Darde",
    time: "2022-09-24 14:45:52",
    text: "hello",
  };
  return (
    <div className="comment-card">
      <div className="comment-card-header">
        <button>Add Comment</button>
      </div>
      <div className="comment-card-body">
        <CommentCard
          name="Omkar Darde"
          time="2022-09-24 14:49:02"
          text="fbvefbebefbefbefbefbefbgfbebeefvbeffbevefvfevevefvfevfevvvfebvefbvefefvbefvefvevevefvefv"
        />
        <CommentCard
          name="palash"
          time="2022-08-28 06:54:14"
          text="tyyfgh"
          reply={reply}
        />
      </div>
      <div className="comment-card-footer">
        <div>
          <i className="fas fa-angle-left" />
        </div>
        <a href="#!">1</a>
        <div>
          <i className="fas fa-angle-right" />
        </div>
      </div>
    </div>
  );
};

export default CommentsScreen;
