import { Menu } from "antd";
import { Link } from "react-router-dom";

interface NavbarProps {
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
    >
      <Menu mode="horizontal">
        <Menu.Item key="addressbook">
          <Link to="/addressbook">Add new contact</Link>
        </Menu.Item>
        <Menu.Item key="contactlist">
          <Link to="/contact-list">Contact List</Link>
        </Menu.Item>
        <Menu.Item key="signout">
          <Link to="/login" onClick={onLogout}>
            Sign Out
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
