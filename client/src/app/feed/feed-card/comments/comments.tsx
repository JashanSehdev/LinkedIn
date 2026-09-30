import Image from "next/image";
import styles from "./comments.module.css";
import type { Comment } from "@/types/feed";

interface CommentProps {
  comment: Comment;
  depth?: number;
}

export default function CommentItem({
  comment,
  depth = 0
}: CommentProps) {
  return (
    <div
      className={styles.commentWrapper}
      style={{
        marginLeft: depth > 0 ? 50 : 0
      }}
    >
      <div className={styles.comment}>
        <Image
          src={comment.author.profileImage}
          alt={comment.author.name}
          width={40}
          height={40}
          className={styles.avatar}
        />

        <div className={styles.commentBody}>
          <div className={styles.commentHeader}>
            <div>
              <span className={styles.name}>
                {comment.author.name}
              </span>

              <span className={styles.degree}>
                • 3rd+
              </span>

              <p className={styles.headline}>
                {comment.author.headline}
              </p>
            </div>

            <span className={styles.time}>
              1w
            </span>
          </div>

          <p className={styles.text}>
            {comment.text}
          </p>

          <div className={styles.actions}>
            <button>
              👍 {comment.likes}
            </button>

            <button>
              💬
            </button>

            <button>
              Reply
            </button>
          </div>
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}