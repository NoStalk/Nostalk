import { MdHome, MdLeaderboard,MdLogin, MdAccountCircle, MdSportsScore, MdArchive } from "react-icons/md"
import { AiFillProfile } from "react-icons/ai"
import { GiArchiveRegister } from "react-icons/gi"
import { FaUserFriends } from "react-icons/fa"

export const routes = [
  {
    path: "/profile",
    name: "Profile",
    icon: <AiFillProfile />
  },
    {
    path: "/submissions",
    name: "Submissions",
    icon: <MdArchive />
  },
  {
    path: "/friends",
    name: "Friends",
    icon: <FaUserFriends />
  },
  
  {
    path: "/contests",
    name: "Contests",
    icon: <MdSportsScore />
  },
 
  {
    path: "/leaderboard",
    name: "LeaderBoards",
    icon: <MdLeaderboard />
  },


  {
    path: "/accountinfo",
    name: "Account Info",
    icon: <MdAccountCircle />
  },
]