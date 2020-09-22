import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../assets/Post.css'

function Post() {
    return (
        <div className='post'>
            <div className='post__header'>
            <Avatar alt='Oswaldo Inacio'
            className='post__avatar'
            src='/static/images/avatar/1.jpg'
            />
            <h3>oswaldoinaciod</h3>
            </div>
            {/* header= avatar username */}
            <img src='https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png' alt='' className='post__image' />
            {/* post image */}
            <div className='post__caption'>
                <strong>oswaldoinaciod</strong>
                hey
            </div>
            {/* username caption */}
        </div>
    )
}

export default Post
