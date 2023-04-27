import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useUser } from '../../components/hooks/useUser';
import UserProfile from '../../components/modules/user/UserProfile';

const UserProfilePage = () => {

  const {user} = useUser();
  const router = useRouter;
  useEffect(() => {
    if (!user) router.push("/")
  }, [])


  return (
    <div className="h-screen">
      <div className="flex h-screen justify-center pt-16 items-center">
        <UserProfile/>
      </div>
    </div>
  );
}
export default UserProfilePage;