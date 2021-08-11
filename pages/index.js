import Navbar from '../src/components/navbar/navbar';
import LeftSideBar from '../src/components/sidebar/leftSideBar/leftSideBar';
import RightSideBar from '../src/components/sidebar/rightSideBar/rightSideBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
    </>
  );
}
