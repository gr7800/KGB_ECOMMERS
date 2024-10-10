import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingScreen from "../component/LoadingScreen";
import { fetchBlogsById } from "../redux/slices/blogSlice";

const SingleBlog = () => {
  const { blogId } = useParams();
  const { singleblogData, isLoading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsById(blogId));
  }, [blogId]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-[100vh] bg-rose-200 w-full flex justify-center items-center py-10 px-5">
      {singleblogData && (
        <div className="flex flex-col gap-5 bg-rose-400 rounded-xl transition p-5 w-full max-w-md hover:bg-rose-300 hover:text-pink-700 shadow-lg shadow-pink-900">
          <p className="bg-rose-900 p-2 rounded-full w-10 text-center text-white font-bold">
            {singleblogData?.id}
          </p>
          <h2 className="font-bold text-xl text-rose-900 truncate">
            {singleblogData?.title}
          </h2>
          <p className="text-white font-semibold overflow-hidden text-ellipsis">
            {singleblogData?.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
