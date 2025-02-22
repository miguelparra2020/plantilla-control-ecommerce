// components/UserProfile.tsx
import LogoutButton from "./LogoutButton"
import { IPropsUserProfile } from "../interfaces/User"



const UserProfile = ({ user, onLogout }: IPropsUserProfile) => {
  return (
    <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center lg:py-16 z-10 relative">
        <img className="w-10 h-10 rounded-full" src={user.picture} alt="User Avatar" />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          {user.name}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">{user.email}</p>
        <LogoutButton onLogout={onLogout} />
      </div>
    </section>
  )
}

export default UserProfile
