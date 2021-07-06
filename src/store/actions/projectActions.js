export const createProject = (project) => {
  // we are using thunk to return a function, and we get an extra argemnet  (withExtraArgument-- see index.js)
  // destructure the 3rd param
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { firstName, lastName } = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // .add() represebts the document that will be added
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstname: firstName,
        authorLastname: lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        //make async call to db
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
