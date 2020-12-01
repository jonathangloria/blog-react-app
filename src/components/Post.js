import React from 'react';

const Post = (props) => {
    return (
        <div className="post" >
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc" dangerouslySetInnerHTML={{ __html: props.data.content }} />
                <div className="button">
                    <button className="btn-edit" onClick={() => props.update(props.data)}>Edit</button>
                    <button className="btn-delete" onClick={() => props.delete(props.data.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post;