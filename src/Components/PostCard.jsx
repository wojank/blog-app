import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/scss/components/post-card.scss";

const PostCard = ({ post, style, imgsize }) => {
  return (
    <article className="post-card" style={style}>
      <Link to={`/posts/${post._id}`}>
        <div className="post-card__wrapper">
          <div className="post-card__main-content">
            <img
              className="post-card__image"
              src={`http://localhost:8080/images/${post.image}`}
              alt="screenshot"
              style={{ height: `${imgsize}px` }}
            />
            <div className="post-card__text">
              <div className="post-card__meta">
                <p className="post-card__author">{!post ? "" : post.author}</p>
                <span className="post-card__separator"></span>
                <time
                  className="post-card__date"
                  dateTime={
                    !post
                      ? ""
                      : new Date(post.createdAt).toLocaleDateString("en-GB")
                  }
                >
                  {!post
                    ? ""
                    : new Date(post.createdAt).toLocaleDateString("pl-PL", {
                        month: "long",
                        year: "numeric",
                        day: "numeric",
                      })}
                </time>
              </div>
              <h2 className="post-card__title">{!post ? "" : post.title}</h2>
              <p className="post-card__subtitle">
                {!post ? "" : `${post.lead.substring(1, 200)}...`}
              </p>
            </div>
          </div>
          <div className="post-card__tags">
            <span className="post-card__tag">
              <a href="">Film</a>
            </span>
            <span className="post-card__tag">
              <a href="">Złota palma</a>
            </span>
            <span className="post-card__tag">
              <a href="">Dramat</a>
            </span>
            <span className="post-card__tag">
              <a href="">Antonioni</a>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
  style: PropTypes.object,
  imgsize: PropTypes.number,
};

export default PostCard;
