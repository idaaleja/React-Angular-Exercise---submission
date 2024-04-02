import { comments as data } from "../data/comments";

//private
let comments = [...data];

function getCommentById(id) {
  //get comment by id
  const comment = comments.find(comment => comment.id === id);
  return comment;
}

function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.filter(comment => comment.postId === postId)
}

function updateCommentBody(id, body) {
  //update comment body
  const index = getCommentById(id).id;
  // const commentFound = getCommentById(id).body = body;
  if (index !== -1) {
    comments[index].text = body;
}
  return "comment not found";
}

function deleteCommentById(id) {
  //delete comment by id
  const index = getCommentById(id).id;
  if (index !== -1) {
    comments.splice(index, 1);
  }
  return "comment not found";
}

// additonal function to create unique ID for new comment

function generateCommentId(commentsArray) {
  const maxId = commentsArray.reduce((max, comment) => (comment.id > max ? comment.id : max), 0);
  return maxId + 1;
}

function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const newId = generateCommentId(comments);
  // new comment creation
  const newComment = {
    id: newId,
    ...comment
  };

  // add new comments
  comments.push(newComment);
  return comments;

}
