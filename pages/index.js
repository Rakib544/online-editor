import Navbar from "../src/components/navbar/navbar";
import RightSideBar from "../src/components/sidebar/rightSideBar/rightSideBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}
