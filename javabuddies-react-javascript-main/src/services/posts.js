import { posts as data } from "../data/posts";

//private
let posts = [...data];

function getPosts() {
  //get all posts
  return [...posts];
}

function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  //get a single post by id
  return posts.find(post => post.id === id);
}

// additional function to create unique ID for new posts
function generatePostId(postsArray) {
  const maxId = postsArray.reduce((max, post) => (post.id > max ? post.id : max), 0);
  return maxId + 1;
}
function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const newId = generatePostId(posts);
  const newPost = {
    id: newId,
    ...post
  };
  posts.unshift(newPost);
  return posts;
}

function updatePostTitle(id, title) {
  //update post title
}

function updatePostBody(id, body) {
  //update post body
  // get index of post
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts[postIndex].title = title;
    return "post body update successful"; 
  }
}

function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    if (updatedPost.title) {
      posts[postIndex].title = updatedPost.title;
    }
    if (updatedPost.body) {
      posts[postIndex].body = updatedPost.body;
    }
    return "update post succefull";}
}

function deletePostBy(id) {
  //delete post by id
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    return "deletion of post successful"; 
  }
}

function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  getPostsByUser(userId);
  const postIndex = getPostsByUser(userId).userId;
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  return "user not found";
}
