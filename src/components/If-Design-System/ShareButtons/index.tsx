import React  from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {
    const size = 40;
    return (
        <div>
            <FacebookShareButton url={url} >
                <FacebookIcon  size={size} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={size} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} >
                <LinkedinIcon  size={size} round={true}/>
            </LinkedinShareButton>
        </div>
    );
}

export default ShareButtons;