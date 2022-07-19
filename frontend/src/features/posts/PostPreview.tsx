import { Link } from "react-router-dom";
import { postsSelectors } from "./postsSlice";
import { useAppSelector } from "../../app/hooks";
import { StyledArticle } from "../../components/styles/Article.styled";

const PostPreview = ({postId}:any) => {
  const id = Number(postId);
  const post = useAppSelector((state) => postsSelectors.selectById(state, id));
  console.log("postExcerpt: ", post)

  const postContentPreview = !post?.content || post?.content.length > 50? (post?.content.substring(0,70) + "...") : post?.content;

  return ( 
    <StyledArticle>
      <h3>{post?.subject}</h3>
      <p>{postContentPreview}</p>
      <p><span><Link to={`post/${post?.id}`}> ...Read full post</Link></span></p>
    </StyledArticle>
  );
}; 

export default PostPreview;