import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <Outlet />
      <h1>I am Home</h1>
    </>
  );
}
