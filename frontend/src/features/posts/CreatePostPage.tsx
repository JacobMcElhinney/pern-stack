import { SetStateAction, useState } from "react";
import { postPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { StyledForm } from "../../components/styles/Form.styled";
import { StyledButton } from "../../components/styles/Button.styled";

const CreatePostPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onSubjectChanged = (e: { target: { value: SetStateAction<string>; }; }) => setSubject(e.target.value);
  const onContentChanged = (e: { target: { value: SetStateAction<string>; }; }) => setContent(e.target.value);
  const onAuthorChanged = (e: { target: { value: SetStateAction<string>; }; }) => setAuthor(e.target.value);

  const enabled =
    [subject, content].every(Boolean) && addRequestStatus === "idle";

  const onCreatePostClicked = () => {
    if (enabled) {
      try {
        setAddRequestStatus("pending");
        if (author) {
          dispatch(postPost({ subject, content, author }));
        } else {
          dispatch(
            postPost({
              subject,
              content,
            })
          );
        }
        setSubject("");
        setContent("");
        setAuthor("");
        navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <StyledForm>
      <h3>New Post</h3>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={onSubjectChanged}
      />
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
      <StyledButton type="button" onClick={onCreatePostClicked} disabled={!enabled}>
        Create
      </StyledButton>
    </StyledForm>
  );
};

export default CreatePostPage;
