import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import "./Comment.css";
import ApprovalCard from "./ApprovalCard";

function Comment() {
  return (
    <div className="CommentBox">
      <div>
        <h1>Comment Box</h1>
        <br></br>
      </div>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          commentText={faker.hacker.phrase()}
          date={faker.date.past()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          commentText={faker.hacker.phrase()}
          date={faker.date.past()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
          commentText={faker.hacker.phrase()}
          date={faker.date.past()}
        />
      </ApprovalCard>
    </div>
  );
}

export default Comment;
