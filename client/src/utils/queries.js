import gql from "graphql-tag";

export const QUERY_ANIMAL = gql`
  query animal($title: String) {
    animals(title: $title) {
      _id
      createdAt
      username
      wildliferecord {
        _id
        createdAt
        username
        wildliferecordbody
      }
    }
  }
`;

// export const QUERY_WILDLIFERECORD = gql`
//   query wildliferecord($id: ID!) {
//     wildliferecord(_id: $id) {
//       _id
//       thoughtText
//       createdAt
//       username
//       reactionCount
//       reactions {
//         _id
//         createdAt
//         username
//         reactionBody
//       }
//     }
//   }
// `;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wildliferecord {
        _id
        content
        createdAt
        wildliferecordbody
        animal {
        _id
        wildliferecords
        createdAt
        wildliferecordbody
      }
    }
  }
`;
