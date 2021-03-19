import React from 'react';
import './article-footer.css'
import { Avatar } from "../../../components/If-Design-System/Avatar";

export const ArticleFooter = () => {

    return (
    <div className="if block">
      <div className="if container">
        <hr className="if" style={{marginBottom: "2rem" }}/>
          <footer className="api-article-footer">
            <Avatar />
            <div className="if meta">
                <h6 className="if title heading smallest" style={{marginBottom: "0px"}}>Author</h6>
                <small className="if author text meta">Alexander Vassbotn Røyne-Helgesen</small>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default ArticleFooter;

