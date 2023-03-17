import { formatISO9075 } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response) => {
            response.json().then((postInfo) => {
                setPostInfo(postInfo);
            });
        });
    }, []);
    if (!postInfo) {
        return "";
    }
    return (
        <div className="post-page">
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
            </div>
            <h1 className="title">{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by {postInfo.author.username}</div>
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}

export default PostPage;