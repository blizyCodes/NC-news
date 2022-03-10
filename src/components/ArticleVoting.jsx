import * as api from "../api";
import { useState } from "react";

export const ArticleVoting = ({ article_id, setArticle, setErr }) => {
  const [voted, setVoted] = useState(0);
  const handleVoting = (incVotes) => {
    setArticle((currArticle) => {
      const updatedArticle = {
        ...currArticle,
      };
      updatedArticle.votes += incVotes;
      return updatedArticle;
    });
    setVoted((currVoted) => {
      return currVoted + incVotes;
    });
    api
      .patchVotesOnArticleByArticleId(article_id, incVotes)
      .then(() => {
        setErr(null);
      })
      .catch((err) => {
        setArticle((currArticle) => {
          const updatedArticle = {
            ...currArticle,
          };
          updatedArticle.votes -= incVotes;
          return updatedArticle;
        });
        setVoted((currVoted) => {
          return currVoted + incVotes;
        });
        setErr("Something went wrong, please try again");
      });
  };

  return (
    <>
      <dt>
        <button
          disabled={voted === 1}
          onClick={() => {
            handleVoting(1);
          }}
        >
          Upvote
        </button>
      </dt>
      <dt>
        <button
          disabled={voted === -1}
          onClick={() => {
            handleVoting(-1);
          }}
        >
          Downvote
        </button>
      </dt>
    </>
  );
};
