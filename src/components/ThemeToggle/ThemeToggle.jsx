import useTheme from "../../useTheme.js";
import "./ThemeToggle.css";
import Form from "react-bootstrap/Form";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Go Birds?"
        checked={theme === "birds"}
        onChange={toggleTheme}
      />
    </Form>
  );
}

export default ThemeToggle;
