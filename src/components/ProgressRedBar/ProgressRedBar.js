import "./ProgressRedBar.css";


function ProgressRedBar(props) {

  const styles = {
    width: props.progress + "%",
    backgroundColor: props.color,
  };


  return (
    <div className="ProgressRedBar">

      <div style={styles}></div>
    </div>
  );
}

export default ProgressRedBar;