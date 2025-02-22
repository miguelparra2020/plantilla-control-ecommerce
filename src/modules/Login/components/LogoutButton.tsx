import { IPropsLogoutButton } from "../interfaces/LogoutButton"

  const LogoutButton = ({ onLogout }: IPropsLogoutButton) => {
    return (
      <button
        onClick={onLogout}
        type="button"
        className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-red-700 bg-red-100 rounded-full hover:bg-red-200"
      >
        <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 me-3">Cerrar sesión</span>
        <svg
          className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
      </button>
    )
  }
  
  export default LogoutButton
  