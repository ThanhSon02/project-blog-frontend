function Post() {
    return (
        <div className="post">
            <img
                src="https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/11163712/tao-branch-trong-git-2.png"
                alt=""
            />
            <div className="content">
                <h2>Hướng dẫn cách tạo branch trong Git</h2>
                <p className="info">
                    <a href="" className="author">
                        David
                    </a>
                    <time>13-3-2023 9:37</time>
                </p>
                <p className="summary">
                    Làm việc trực tiếp trong branch (nhánh) chính của một
                    repository trên GitHub sẽ vô cùng nguy hiểm.
                </p>
            </div>
        </div>
    );
}

export default Post;
