# NC News App

This is a frontend application which is designed for users to interact with my News API via a user-friendly interface.

## Link to deployed version

---

https://dbnews.netlify.app/

## Features

---

The NC News App contains the below features and functionality:

### Articles

- Home page displays article cards containing the title, topic, author, date, number of comments, and number of votes through the use of a collapser.
- When article cards are selected, users will be redirected to the article page, displaying the article body, and a list of comments.
- Topics are displayed in a navigator bar that is constantly present. A user can view articles of a selected topic by clicking on it.
- Users can sort articles based on the following criteria:
  - date (default)
  - comment count
  - votes
  - order (ascending or descending)
- The list of articles displayed is initially limited to 10 - this can be increased by selecting the 'Load More Articles' button at the bottom of the page. The button disappears when all articles of the selected topic (if any) have been displayed.

### Comments

- Comments are displayed in the related article's page through the use of a collapser.
- Users are able to post comments in a text box below the article if they are logged in.
- Users are able to delete comments that they have posted themselves.

### Votes

- Votes are displayed for each article and comment.
- Users are able to increase or decrease the votes of articles by 1 once.
- Functionality to upvote/downvote comments will be added in the future.

## Link to repository

---

https://github.com/donblizy/news-frontend

## Installation Instructions

---

Minimum version of Node supported - v16.14.0

Clone the repository by inputting the following in your command line terminal

```
git clone https://github.com/donblizy/news-frontend.git
```

Once cloned, navigate to that directory in your terminal and run the below command to install all of the dependencies needed as found in the package.json file. The command is:

```
npm i
```

Launch the app in your browser:

```
npm start
```

## Link to back-end API repository

---

https://github.com/donblizy/News-API
