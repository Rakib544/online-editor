import Navbar from "../src/components/navbar/navbar";
import LeftSideBar from "../src/components/sidebar/leftSideBar/leftSideBar";
import RightSideBar from "../src/components/sidebar/rightSideBar/rightSideBar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>
        <div className="col-6">
          <div className="col-7 mx-auto vh-100 bg-white my-5 rounded-3"></div>
        </div>
        <div className="col-3">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
