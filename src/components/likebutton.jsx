import { useState } from "react";

const LikeButton = (initialLiked, onToggle) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleClick = () => {
    setLiked(!liked);
    onToggle(!liked);
  };

  return (
    <button onClick={handleClick}>{liked ? "🤍 Like" : "❤️ Liked"}</button>
  );
};

export default LikeButton;
