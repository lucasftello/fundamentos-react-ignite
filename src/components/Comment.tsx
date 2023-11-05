import { useState } from 'react';
import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from '@phosphor-icons/react';
import styles from './Comment.module.css';

interface Props {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: Props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(oldValue => oldValue + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/maykbrito.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Tello</strong>
              <time
                title="03 de Novembro às 14:06"
                dateTime="2023-11-03 14:06:33"
              >
                Cerde de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
