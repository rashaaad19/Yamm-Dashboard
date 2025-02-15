import { SwitchLabel } from "./Styled-Components/SwitchComponent";
const Switch = ({ checked, id, handleStatusChange }) => {
  return (
    <SwitchLabel>
      <input
        type="checkbox"
        onChange={(e) => handleStatusChange(id, e.target.checked)}
        checked={checked}
      />
      <span></span>
    </SwitchLabel>
  );
};

export default Switch;
