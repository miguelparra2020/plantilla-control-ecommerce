// interfaces/User.ts
export interface User {
    name: string;
    email: string;
    picture: string;
  }
  
export interface IPropsUserProfile {
    user: User
    onLogout: () => void
  }