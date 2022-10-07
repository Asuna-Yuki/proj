import React from "react";
import { CommentCard } from "./CommentCard";

export const CommentsScreen = () => {
  const reply = {
    name: "Omkar Darde",
    time: "2022-09-24 14:45:52",
    text: "jhasdlkjfh",
  };
  return (
    <div className='comment-screen'>
      <div className='comment-screen-header'>
        <button className='btn btn-outline btn-comment'>Add Comment</button>
      </div>
      <div className='comment-screen-body'>
        <CommentCard
          name='Omkar Darde'
          time='2022-09-24 14:49:02'
          text='fbvefbebefbefbefbefbefbgfbebeefvbeffbevefvfevevefvfevfevvvfebvefbvefefvbefvefvevevefvefv'
        />
        <CommentCard
          name='palash'
          time='2022-08-28 06:54:14'
          text='tyyfgh'
          reply={reply}
        />
      </div>
      <div className='card comment-screen-footer'>
        <div>
          <div className='arrow'>
            <i className='fas fa-angle-left' />
          </div>
          <div>1</div>
          <div className='arrow'>
            <i className='fas fa-angle-right' />
          </div>
        </div>
      </div>
    </div>
  );
};
