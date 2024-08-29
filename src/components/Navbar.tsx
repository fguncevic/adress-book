import { Menu } from "antd";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu mode="horizontal">
        <Menu.Item key="addressbook">
          <Link to="/addressbook">Addressbook</Link>
        </Menu.Item>
        <Menu.Item key="contactlist">
          <Link to="/contact-list">Contact List</Link>
        </Menu.Item>
        <Menu.Item key="signout">
          <Link to="/signout">Sign Out</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};