import { useNavigate } from "react-router-dom";
function NavBar({setUser}){
    const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
        navigate("/")
      }

    function goHome(){
        navigate("/")
    }
    function goBookings(){
        navigate("/mybookings")
    }

    return (
        <div className="header">
           <h1 className="title">All-Things-Active
            <div className="inline">
                <button className="padding" onClick={goHome}>
                    Home
                </button>
                <button className="padding" onClick={goBookings}>
                    My Bookings
                </button>

                <button className="padding" onClick={handleLogoutClick}>
                    Logout
                </button>
                
            </div>
            </h1>
            
        </div>
    )
}
export default NavBar;

