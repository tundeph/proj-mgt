import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  //   const navigate = useNavigate();
  // console.log(params);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Tunde </div>
          <div>4th January, 2022</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
