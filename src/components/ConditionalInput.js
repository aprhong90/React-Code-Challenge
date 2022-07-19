import "./ConditionalInput.css";
import FalseInput from "./FalseInput";
import ArrayInput from "./ArrayInput";
import ElseInput from "./ElseInput";

const ConditionalInput = ({ input }) => {
  if (!input) {
    return <FalseInput input={input} />;
  } else if (Array.isArray(input)) {
    return <ArrayInput input={input} />;
  } else {
    return <ElseInput input={input} />;
  }
};

export default ConditionalInput;
