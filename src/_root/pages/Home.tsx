import { Loader } from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";



const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  const {
    data: creaters,
    isLoading: isUserLoading,
    isError: isErrorCreaters,
  } = useGetUsers(10);


 
  if (isErrorPosts || isErrorCreaters) {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          {isPostLoading && !posts? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} key={post.caption} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creaters ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creaters?.documents.map((creater) => (
              <li key={creater?.$id}>
                <UserCard user={creater} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
}


export default Home;