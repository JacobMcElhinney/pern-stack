import { StyledArticle } from "../../components/styles/Article.styled";
import { Comment } from "./commentsSlice";

interface Props {
  comment: Comment
}

const CommentItem: React.FC<Props> = ({ comment }) => {

  return (
      <StyledArticle>
        <h3>{comment?.author} <span>({comment.updatedAt.substring(0, 10)})</span></h3>
        <p>{comment?.content}</p>
        
      </StyledArticle>
  );
};

export default CommentItem;