import { useAppDispatch, useAppSelector } from "../../app/hooks"; // publish & subscribe to state changes
import { getPosts, postsSelectors } from "./postsSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CommentsList from "../comments/CommentsList";
import { StyledButton } from "../../components/styles/Button.styled";
import { StyledArticle } from "../../components/styles/Article.styled";

const ReadPostPage = () => {
  const id = useParams().postId;
  const postId = Number(id);
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) =>
    postsSelectors.selectById(state, postId)
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <StyledArticle>
        <h2>{post?.subject}</h2>
        {!post && <span className="error">Post not found!</span>}
        <section>{post?.content}</section>
        <StyledButton>
          <Link to={`/post/${postId}/comment`}>Comment</Link>
        </StyledButton>
        <CommentsList />
      </StyledArticle>
    </>
  );
};

export default ReadPostPage;
