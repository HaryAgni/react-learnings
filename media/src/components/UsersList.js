import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./usersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUsers();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton className="h-10 w-full" times={6} />;
  }
  else if (loadingUsersError || creatingUserError) {
    content = <div>Error fetching data</div>;
  }
  else {
    content =  data.map((user) => {
        return <UsersListItem key={user.id} user={user} />
       
      });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
      
          <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
      </div>
      { content}
    </div>
  );
}

export default UsersList;
