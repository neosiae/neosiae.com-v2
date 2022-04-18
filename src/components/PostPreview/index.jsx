import './postPreview.css';

const PostPreview = ({ post }) => {
  return (
    <div className="post">
      <span className="date">{post.date}</span>
      <a href={`/posts/${post.url}`}><h1 className="title">{post.title}</h1></a>
    </div>
  );
}

export default PostPreview;
