import React from "react";
import "./CommentDetail.css";

function CommentDetail(props) {
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
              <div className="date">2 days ago</div>
              <div className="rating">
                <i className="star icon"></i>5 Faves
              </div>
            </div>
            <div className="text">
              Hey guys, I hope this example documentation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
