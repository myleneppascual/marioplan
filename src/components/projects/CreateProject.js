import { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CreateProject = ({ createProject, auth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ title, content });
    history.push("/");
  };
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink ligthen-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};
const mapDispathToProps = (dispath) => {
  return {
    // dispatch an action creator(createProject) from projectAction.js
    // proj is a param passed upon call
    createProject: (proj) => dispath(createProject(proj)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CreateProject);
