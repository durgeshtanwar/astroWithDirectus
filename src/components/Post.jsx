import React from 'react';

const Post = ({ content }) => {
    // console.log(content.data[0].image);
    let url = `${import.meta.env.PUBLIC_API_URL}`;
    return <section>
        <div className="container">
            <img src={`${url}/assets/${content.data[0].image}`} alt="name" />
        </div>
    </section>;
};

export default Post;
