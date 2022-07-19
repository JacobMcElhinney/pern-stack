import { StyledArticle } from "../../components/styles/Article.styled";
import { Comment as IComment } from "./commentsSlice";

const Comment = ({ comment }: any) => {
  // use app selector to get the comment

  return (
      <StyledArticle>
        <h3>{comment?.author} <span>({comment.updatedAt.substring(0, 10)})</span></h3>
        <p>{comment?.content}</p>
        
      </StyledArticle>
  );
};

export default Comment;

//  id: number;
// content: string;
// author: string;
// postId: number;
// createdAt: string;
// updatedAt: string;
