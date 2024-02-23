import { Loader } from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";


const AllUsers = () => {
  const { toast } = useToast();

  const { data: creaters, isLoading, isError: isErrorCreaters } = useGetUsers();

  if (isErrorCreaters) {
    toast({ title: "Something went wrong." });
    
    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
       
        {isLoading && !creaters ?(
          <Loader />
        ) : (
          <ul className="user-grid">
            {creaters?.documents.map((creater) => (
              <li key={creater?.$id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creater} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;