import Navbar from "../src/components/navbar/navbar";
import RightSideBar from "../src/components/sidebar/rightSideBar/rightSideBar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <RightSideBar/>
      <h1>Hello</h1>
    </div>
  );
}
