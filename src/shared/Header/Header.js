import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(userContext);
  const navigate = useNavigate();

  // console.log(user?.uid);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Log out successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => console.error(error));
  };
  //md:mb-80 lg:mb-5 sm:mb-28
  return (
    <div className="bg-gray-900 ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img src={"logo.jpg"} className="w-12 h-12" alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Travel zone
              </span>
            </Link>
          </div>

          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Service
              </Link>
            </li>

            {user?.uid && (
              <>
                <li>
                  <Link
                    to="/booking"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Booking
                  </Link>
                </li>

                <li>
                  <Link
                    to="/add-service"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Add Service
                  </Link>
                </li>

                <li>
                  <Link
                    to="/my-review"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Review
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/blog"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </Link>
            </li>

            {!user?.uid ? (
              <div className="flex">
                <li>
                  {" "}
                  <Link
                    to="/login"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Log In
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 ml-7"
                  >
                    Register
                  </Link>
                </li>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <img src={user?.photoURL} className="rounded-full" alt="" />
                </div>

                <div className="dropdown dropdown-end text-white">
                  <label
                    tabIndex={0}
                    className="btn btn-circle btn-ghost btn-xs text-info"
                  >
                    <p className="text-xl text-white">
                      <FaCaretDown />{" "}
                    </p>
                  </label>
                  <div
                    tabIndex={0}
                    className="card compact dropdown-content shadow bg-base-100 rounded-box w-28 mt-5 ml-5"
                  >
                    <div className="card-body ">
                      <p className="dark:text-white text-black">
                        welcome {user?.displayName}
                      </p>

                      <button className="text-black">
                        <Link to="/profile"> Profile </Link>
                      </button>
                      <button onClick={handleLogOut} className="text-black">
                        Sing out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ul>
          <div className="lg:hidden md:block sm:block">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="mb-80">
                <div className="absolute top-0 left-0 w-full text-black ">
                  <div className="p-5 bg-gray-900 text-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <img src={"logo.jpg"} className="w-12 h-12" alt="" />
                          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                            Travel Zone
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/home"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 text-black"
                          >
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/services"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                            Service
                          </Link>
                        </li>

                        {user?.uid && (
                          <>
                            <li>
                              <Link
                                to="/booking"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                              >
                                Booking
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/add-service"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                              >
                                Add Service
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/my-review"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                              >
                                Review
                              </Link>
                            </li>
                          </>
                        )}

                        <li>
                          <Link
                            to="/blog"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                          >
                            Blog
                          </Link>
                        </li>

                        {!user?.uid ? (
                          <div className="">
                            <li>
                              {" "}
                              <Link
                                to="/login"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                              >
                                Log In
                              </Link>
                            </li>

                            <li>
                              <Link
                                to="/register"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 mt-2"
                              >
                                Register
                              </Link>
                            </li>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <div className="w-10 h-10">
                              <img
                                src={user?.photoURL}
                                className="rounded-full"
                                alt=""
                              />
                            </div>

                            <div className="dropdown dropdown-end text-white">
                              <label
                                tabIndex={0}
                                className="btn btn-circle btn-ghost btn-xs text-info"
                              >
                                <p className="text-xl text-white">
                                  <FaCaretDown />{" "}
                                </p>
                              </label>
                              <div
                                tabIndex={0}
                                className="card compact dropdown-content shadow bg-base-100 rounded-box w-28 mt-5 ml-5"
                              >
                                <div className="card-body ">
                                  <p className="dark:text-white text-black">
                                    welcome {user?.displayName}
                                  </p>

                                  <button className="text-black">
                                    <Link to="/profile"> Profile </Link>
                                  </button>
                                  <button
                                    onClick={handleLogOut}
                                    className="text-black"
                                  >
                                    Sing out
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
