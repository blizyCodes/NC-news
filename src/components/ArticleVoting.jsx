import * as api from "../api";
import { useState } from "react";

export const ArticleVoting = ({
  article_id,
  setArticle,
  setErr,
  loggedInUser,
}) => {
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
    api.patchVotesOnArticleByArticleId(article_id, incVotes).catch((err) => {
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
          className="singleArticle--button--voting"
          disabled={voted === 1 || loggedInUser === null}
          onClick={() => {
            handleVoting(1);
          }}
        >
          Upvote
        </button>
      </dt>
      <dt className="singleArticle--button--voting">
        <button
          disabled={voted === -1 || loggedInUser === null}
          onClick={() => {
            handleVoting(-1);
          }}
        >
          Downvote
        </button>
      </dt>
      {!loggedInUser && (
        <p className="singleArticle--text--votingWarning" id="votingNeedLogIn">
          {" "}
          "Please log in to vote"{" "}
        </p>
      )}
    </>
  );
};
