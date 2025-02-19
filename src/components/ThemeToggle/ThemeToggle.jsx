import './ThemeToggle.css';
import Form from "react-bootstrap/Form";

function ThemeToggle() {
  return (
    <Form>
    <Form.Check type="switch" id="custom-switch" label="Go Birds?" />
  </Form>
  )
}

export default ThemeToggle;
