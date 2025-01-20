import React from "react";
import Card from "../components/Card";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className=" flex ">
      <SideBar />
      <div className="p-[30px] container mx-auto grid lg:grid-cols-3 gap-y-12 md:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;

//numune olaraq yazilmisdir dinamik data gediyde bu numunedeki kimi yazilmalidir
// const BlogsContainer = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getBlogs());
//   }, [dispatch]);

//   const { blogs } = useSelector((state) => state.home);

//   console.log(blogs);

//   return (
//     <div className="second_container blogs_container">
//       {blogs?.map((data, i) => {
//         return (
//           <Link to={`/blogs/${data.id}`}>
//             <BlogCard key={i} data={data} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
