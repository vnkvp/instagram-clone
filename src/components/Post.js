import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../assets/Post.css'

function Post({ username, imageUrl, caption }) {
    return (
        <div className='post'>
            {/* header */}
            <div className='post__header'>
                <Avatar alt={username}
                    className='post__avatar'
                    src='/static/images/avatar/1.jpg'
                />
                <h3>{username}</h3>
            </div>

            {/* image */}
            <img src={imageUrl} alt='' className='post__image' />

            {/* user caption */}
            <div className='post__caption'>
                <strong>{username}</strong>{" "}{caption}
            </div>
        </div>
    )
}

export default Post
