import { gql } from '@apollo/client';

// GET_ME NEEDS UPDATING!!!!!!!
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
          bookId
          authors
          description
          title
          image
          link
      }
    }
  }
`;

export const GET_DB_QUIZZES = gql`
  query dbQuizzes {
    dbQuizzes {
      _id
      quizAuthor
      description
      title
      imageURL
      leaderboard {
        playerID
        points
      }
    }
  }
`;

export const GET_QUIZ_QUESTIONS = gql`
  query getQuizQuestions ($quizId: ID!) {
    getQuizQuestions (quizId: $quizId) {
      _id
      questionText
      questionType
      timeLimit
      correctAnswer
      answers {
        answerText
      }
    }
  }`;

  export const GET_PLAYED_QUIZZES = gql`
  query getPlayedQuizzes {
    getPlayedQuizzes {
      _id
      quizAuthor
      description
      title
      imageURL
      leaderboard {
        playerID
        points
      }
    }
  }`;