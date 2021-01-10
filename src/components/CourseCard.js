const CourseCard = (props) => {
  return (
    <>
    <p>
    <div className="bg-red-900 hover:bg-green-900 rounded-3xl text-yellow-50" id="courseCard">
      <br></br>
      <p>-  Course name : {props.name}</p>
      <p>-  Credit : {props.crd}</p>
      <p>-  Grade : {props.grd}</p>
      <p id="deleteButton"><button onClick = {() =>props.del(props.name)}> ----- Delete this course ----- </button></p>
      <br></br>
    </div>
    <br></br>
    </p>
    </>
  );
};

export default CourseCard;
