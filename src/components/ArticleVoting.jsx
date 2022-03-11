import * as api from "../api";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

export const ArticleVoting = ({ article_id, setArticle, setErr }) => {
  const [voted, setVoted] = useState(0);
  const { loggedInUser } = useContext(UserContext);
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
      <dt className="votingBtn">
        <button
          disabled={voted === 1 || loggedInUser === null}
          onClick={() => {
            handleVoting(1);
          }}
        >
          Upvote
        </button>
      </dt>
      <dt className="votingBtn">
        <button
          disabled={voted === -1 || loggedInUser === null}
          onClick={() => {
            handleVoting(-1);
          }}
        >
          Downvote
        </button>
      </dt>
      <p className="votingBtn" id="votingNeedLogIn">{loggedInUser ? " " : "Please log in to vote"}</p>
    </>
  );
};
