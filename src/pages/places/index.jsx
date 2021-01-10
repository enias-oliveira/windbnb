import Banner from "../../components/organisms/banner";
import Credits from "../../components/molecules/credits";
import List from "../../components/organisms/list";

const Places = () => {
  return (
    <>
      <div className="absolute min-h-screen h-auto w-screen flex flex-col justify-between  ">
        <Banner />
        <List />
        <Credits className=" bottom-0 h-10 " />
      </div>
    </>
  );
};

export default Places;
