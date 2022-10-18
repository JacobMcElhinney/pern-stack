import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CommentItem from "./CommentItem";
import {
  commentsSelectors,
  getComments,
} from "./commentsSlice";

const CommentsList = () => {
  const id = useParams().postId;
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) =>
    commentsSelectors.selectAll(state)
  );
  const relatedComments = comments.filter((comment) => comment.postId === postId);
  useEffect(() => {
    dispatch(getComments());
    console.log(comments);
  }, [comments, dispatch]);

  console.log("hello from comment list: ", postId);
  return (
      <ul>
          {relatedComments &&
            relatedComments.map((comment) => (
              <li>
                <CommentItem key={comment.id} comment={comment} />
              </li>
            ))}
          {!relatedComments && <p>No comments found...</p>}

      </ul>
  );
};
export default CommentsList;
