import { formatISO9075 } from "date-fns";

function Post({ title, summary, cover, createdAt, author, content }) {
    return (
        <div className="post">
            <img src={"http://localhost:4000/" + cover} alt="" />
            <div className="content">
                <h2>{title}</h2>
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
