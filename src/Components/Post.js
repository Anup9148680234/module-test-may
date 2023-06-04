import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = ({ data }) => {

    const { id } = useParams();
    const post = data.find((item) => item.id == id )

    console.log("post details" ,post);

    if (!data || data.length === 0) {
        return <div>No posts available</div>;
      }

    if(!post){
        return(
            <div>Posts not found</div>
        )
    }

    return(
        <div className="mainCont">
        <h1 className="postHead">Details page for for posts with ID {id}</h1>
        <img
                className="postImage"
                src={`https://picsum.photos/200?random=${post.id}`}
                alt={post.body}
        ></img>
        <p className="postText">User ID : {id}</p >
        <p className="postText">Title : {post.title}</p >
        <p className="postText">Body : {post.body}</p >
        </div>
    )
}

export default PostDetails;