import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavigation from "./side-nav";
import ProfileModal from '../modal/profilemodal';

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [user] = useState({
    name: "Prathamesh More",
    company: "Bugs and Glitches",
    profilePicture:
      "https://photos.wellfound.com/users/18320732-medium_jpg?1723330532",
  });

  // Function to toggle the sidebar
  const toggleSwitch = () => {
    setOpen(!open);
  };

  // Function to close the sidebar when clicking outside
  const handleClose = () => {
    setOpen(false);
  };

  // Toggle profile modal visibility
  const toggleProfileModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full p-5 bg-zinc-50 border-b-2">
      <div className="w-full flex justify-between items-center">
        {/* Left section with profile and navigation links */}
        <div className="flex gap-4 items-center">
          {/* Mobile Menu Button */}
          <div className="lg:hidden block">
            <button onClick={toggleSwitch}>
              <div className="flex gap-2 items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/176706430?s=200&v=4"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <p className="text-xl font-semibold">Im Rabo</p>
              </div>
            </button>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden lg:block">
            <ul className="flex gap-4">
              {["Dashboard", "Devices", "Network", "Logs", "Settings"].map(
                (item, index) => (
                  <li key={index}>
                    <Link to={`/${item.toLowerCase()}`}>
                      <div className="text-zinc-500 hover:text-black">
                        {item}
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Right section with user profile */}
        <div
          className="flex gap-2 items-center cursor-pointer hover:bg-zinc-200 p-2 rounded-lg transition duration-300"
          onClick={toggleProfileModal}
        >
          <img
            src={user.profilePicture}
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <div className="hidden lg:block">
            <p className="text-xs font-semibold">{user.name}</p>
            <p className="text-xs">{user.company}</p>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {open && (
        <>
          {/* Overlay for closing sidebar */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            onClick={handleClose}
          ></div>

          {/* Sidebar Drawer */}
          <div className="fixed top-0 left-0 h-screen w-72 bg-gray-200 z-50 lg:hidden transform translate-x-0 transition-transform duration-300 ease-in-out">
            <SideNavigation />
            <button
              onClick={toggleSwitch}
              className="absolute top-2 right-2 text-black mt-4 mr-3"
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Profile Modal */}
      <ProfileModal
        open={isModalOpen}
        handleClose={toggleProfileModal}
        user={user} handleUpdateProfile={undefined}      />
    </div>
  );
}

export default NavigationBar;
