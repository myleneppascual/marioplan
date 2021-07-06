import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
import { useFirestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const Dashboard = ({ proj, auth, notifications }) => {
  // useFirestoreConnect(["projects"]); // sync projects collection from Firestore into redux store
  useFirestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ]);
  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={proj} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    proj: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default connect(mapStateToProps)(Dashboard);

//use compose to chain  ultiple high order functions
// export default compose(
//   firestoreConnect(() => ["projects"]),
//   connect(mapStateToProps)
// )(Dashboard);
