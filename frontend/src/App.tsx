import { Routes, Route, Navigate } from "react-router-dom";
import ReadPostPage from "./features/posts/ReadPostPage";
import PostIndexPage from "./features/posts/PostIndexPage";
import Layout from "./components/Layout";
import CreateCommentPage from "./features/comments/CreateCommentPage";
import CreatePostPage from "./features/posts/CreatePostPage";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<PostIndexPage />} /> {/* http://localhost:3000/ */}
          
          <Route path="post">
            <Route index element={<CreatePostPage />} /> {/* http://localhost:3001/post */}
            <Route path=":postId" element={<ReadPostPage />} /> {/* http://localhost:3001/post/1 */}
            <Route path=":postId/comment" element={<CreateCommentPage />} /> {/* http://localhost:3001/post/1/comment */}
          </Route>
 
          <Route path="*" element={<Navigate to="/" replace />} /> 

        </Route>
      </Routes>
  );
}

export default App; 
