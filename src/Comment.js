import React from "react";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import "./Comment.css";
import ApprovalCard from "./ApprovalCard";

function Comment() {
  return (
    <div className="CommentBox">
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default Comment;
