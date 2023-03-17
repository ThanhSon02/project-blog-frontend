import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

function Post({ _id, title, summary, cover, createdAt, author, content }) {
    return (
        <div className="post">
            <Link to={`/post/${_id}`}>
                <img src={"http://localhost:4000/" + cover} alt="" />
            </Link>
            <div className="content">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <a href="" className="author">
                        {author.username}
                    </a>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
}

export default Post;
