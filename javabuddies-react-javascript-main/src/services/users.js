import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}
// additional function to create user ID for new users
function generateId(data) {
  const maxId = data.reduce((max, user) => (user.id > max ? user.id : max), 0);
  return maxId + 1;
}
function addUser(userInfo) {
  // add user (userInfo is an object which can optionally contain properties of a user)
  // use generateId function and pass users array as the argument to generate a unique id.
  // Generate a unique ID for the new user
  const newId = generateId(users);

  // Create a new user with the ID and userInfo
  const newUser = {
    id: newId,
    ...userInfo
  };

  // Add to the users list
  users.push(newUser);

  // Return the updated users array
  return users;
}

