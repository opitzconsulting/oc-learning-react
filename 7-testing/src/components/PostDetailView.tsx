import {useEffect, useState} from "react";
import {getPlaceholderDataById, JSONPlaceholderPost} from "../services/PlaceholderFetch.ts";

function PostDetailView({postId}: { postId: number }) {
  const [post, setPost] = useState<JSONPlaceholderPost | undefined>(undefined)
  useEffect(() => {
    getPlaceholderDataById(postId).then(setPost);
  }, [postId])

  return (<div style={{border: "2px solid orange", padding: "8px"}}>
    The loaded post {postId} has the content
    <p>{post?.body}</p>
  </div>)
}

export default PostDetailView;