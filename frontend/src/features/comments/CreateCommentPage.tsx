import { SetStateAction, useState } from "react";
import { postComment } from "./commentsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { StyledForm } from "../../components/styles/Form.styled";
import { StyledButton } from "../../components/styles/Button.styled";

const CreateCommentPage = () => {
  const id = useParams().postId;
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("from create comment form" + typeof postId + " " + postId); //! remove

  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onContentChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setAuthor(e.target.value);

  const enabled = content && addRequestStatus === "idle";

  const onCreateCommentClicked = () => {
    if (enabled) {
      try {
        setAddRequestStatus("pending");

        content && author
          ? dispatch(postComment({ content, author, postId }))
          : dispatch(postComment({ content, postId }));
        setContent("");
        setAuthor("");

        if (author) {
          dispatch(postComment({ content, author }));
        } else {
          dispatch(
            postComment({
              content,
            })
          );
        }

        setContent("");
        setAuthor("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
        console.log("request sent")
      }
    }
  };

  return (
    <StyledForm>
      <h3>New Comment</h3>
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={onContentChanged}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={onAuthorChanged}
      />{" "}
      <StyledButton
        type="button"
        onClick={onCreateCommentClicked}
        disabled={!enabled}
      >
        Create
      </StyledButton>
    </StyledForm>
  );
};
export default CreateCommentPage;
