import { postsSelectors, getPosts } from "./postsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLayoutEffect } from "react";
import PostPreview from "./PostPreview";
import { store } from "../../app/store";
import { StyledArticle } from "../../components/styles/Article.styled";

const PostIndexPage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => postsSelectors.selectAll(state));

  useLayoutEffect(() => {
    dispatch(getPosts());
    const status = store.getState().posts.status;
    console.log("status: ", status);
  }, [dispatch]);

  const validatedPosts =
    (posts.length < 1) === true ? (
      <div className="error">
        <span>
          No posts found...{" "}
        </span>
      </div>
    ) : (
      <ul>
        {posts.map((post) => (
          <li>
            <PostPreview key={post.id} postId={post.id} />
          </li>
        ))}
      </ul>
    );

  return <StyledArticle><h2>Posts</h2>{validatedPosts}</StyledArticle>;
};
export default PostIndexPage;
