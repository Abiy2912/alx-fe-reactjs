import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId, id } = useParams();
  return <div>Blog Post ID: {postId || id}</div>;
}

export default BlogPost;
