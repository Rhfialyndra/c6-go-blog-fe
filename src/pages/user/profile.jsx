import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useUser } from '../../components/hooks/useUser';
import UserProfile from '../../components/modules/user/UserProfile';
import BackButton from '../../components/elements/BackButton';

const UserProfilePage = () => {

  const {user} = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.replace("/")
  }, [])

  if(!user) return <></>
  
  return (
    <div className="h-screen">
      <div className="flex h-screen justify-center pt-16 items-center">
        <main className=' w-3/5 flex flex-col justify-start items-start gap-y-10'>
          <BackButton/>

          <UserProfile/>
        </main>
      </div>
    </div>
  );
}
export default UserProfilePage;