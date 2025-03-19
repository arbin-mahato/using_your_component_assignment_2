import LikeButton from "./likebutton";
import styles from "./PostCard.module.css";
import PropTypes from "prop-types";

const PostCard = ({ postDetails, onLikeToggle }) => {
  return (
    <>
      {postDetails &&
        postDetails.map((postDetail) => (
          <div key={postDetail.id} className={styles.postContainer}>
            <div className={styles.post}>
              <img
                src={postDetail.profileImage}
                alt={postDetail.username}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "1rem",
                }}
              />
              <strong>{postDetail.username}</strong>
            </div>
            <p className={styles.content}>{postDetail.content}</p>
            <LikeButton
              initialLiked={postDetail.isLiked}
              onToggle={(newStatus) => onLikeToggle(postDetail.id, newStatus)}
            />
          </div>
        ))}
    </>
  );
};

PostCard.propTypes = {
  postDetails: PropTypes.array.isRequired,
  onLikeToggle: PropTypes.bool.isRequired,
};

export default PostCard;
