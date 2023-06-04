import { Link } from "react-router-dom";

const Card = ({post}) => {
    let mxTitle = 15, mxBody = 30;
    
    return (
        <div className="card" key={post.id}>
          <Link to={`/item/${post.id}`}>
            <div className="content">
              
              <img className="feedImage" src={`https://picsum.photos/200?random=${post.id}`}></img>
              
              <p>User ID : {post.userId}</p>

              {post.title.length > mxTitle ? (
              <p>Title: {post.title.slice(0, mxTitle)}...</p>
              ) : (
              <p>Title: {post.title}</p>
              )}

              {post.body.length > mxBody ? (
                <p>Body: {post.body.slice(0, mxBody)}Read More...</p>
              ) : (
                <p>{post.body}</p>
              )}

            </div>
          </Link>
        </div>
      );
}

export default Card;