import React from "react";
import "./CommentDetail.css";

function CommentDetail(props) {
  console.log(props.date);
  return (
    <div className="com">
      <div className="ui comments">
        <div className="comment">
          <a className="avatar">
            <img src={props.img} />
          </a>
          <div className="content">
            <a className="author">{props.name}</a>
            <div className="metadata">
              <div className="date">
                {new Date(props.date).toString().slice(0, 25)}
              </div>
            </div>
            <div className="text">{props.commentText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
