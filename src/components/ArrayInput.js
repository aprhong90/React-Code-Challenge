import "./ArrayInput.css";

const ArrayInput = ({ input }) => {
  return (
    <ul className="ArrayInput">
      <h1>2. The prop is an array.</h1>
      {input.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ArrayInput;
