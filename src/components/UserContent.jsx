import React, { useState } from "react";
import "../styles/layout.css"; // Import CSS styles
import Modal from "./Modal"; // Import the Modal component

// Import images from the assets folder
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

const UserContent = () => {
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showSidebarModal, setShowSidebarModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalTimeout, setModalTimeout] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if the user is logged in

  // Handlers for header profile modal
  const handleHeaderMouseEnter = (e) => {
    setShowHeaderModal(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 99,
      left: rect.left + window.scrollX,
    });
  };

  const handleHeaderMouseLeave = () => {
    setShowHeaderModal(false);
  };

  // Handlers for sidebar profile modal
  const handleSidebarMouseEnter = (e) => {
    setShowSidebarModal(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 70,
      left: rect.left - 205,
    });
  };

  const handleSidebarMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSidebarModal(false);
    }, 100); // Delay for sidebar modal close
    setModalTimeout(timeout);
  };

  const handleModalMouseEnter = () => {
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
  };

  const handleModalMouseLeave = () => {
    setShowSidebarModal(false);
  };

  return (
    <section className="user-section">
      <div className="p-container">
        <main className="main-content">
          {/* Header Section */}
          <div className="p-header">
            <div
              className="h-profile"
              onMouseEnter={handleHeaderMouseEnter}
              onMouseLeave={handleHeaderMouseLeave}
            >
              <button className="btn">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                  alt="Profile"
                />
              </button>
              <div className="profile-text">
                <h2>Harley-Davidson UX/UI</h2>
                <span className="tonic-black">Tonic Black</span>
                <span className="follow">Follow</span>
              </div>

              {/* Modal for header profile */}
              {showHeaderModal && (
                <Modal
                  showModal={showHeaderModal}
                  closeModal={handleHeaderMouseLeave}
                  position={modalPosition}
                  customClass="header-modal" // Optional for different modal styles
                />
              )}
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="image-grid">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          {/* Likes, Views, Comments Section */}
          <div className="pro-info-container">
            <div className="pro-like-blue">
              <button className="pro-button">
                <i className="fa-solid fa-thumbs-up"></i>
              </button>
              <h2 className="pro-like-heading">Harley-Davidson UX/UI</h2>
            </div>
            <div className="pro-stats">
              <button className="pro-button">
                <i className="fa-solid fa-thumbs-up"></i> 711k
              </button>
              <button className="pro-button">
                <i className="fa-solid fa-eye"></i> 3.9k
              </button>
              <button className="pro-button">
                <i className="fa-solid fa-message"></i> 1.2k
              </button>
            </div>
            <div className="pro-publish">
              <p>Published: March 17th 2023</p>
            </div>
          </div>

          {/* New Comments and Project Information Section */}
          <div className="comments-project-container">
            {/* First Column: User Comments Section */}
            <div className="comments-column">
              {!isLoggedIn ? (
                <>
                  <h3>Join the Conversation</h3>
                  <p>Add your feedback for Tonic Black’s project by signing in or signing up</p>
                  <button className="sign-up-button">Sign Up with Email</button>
                  <div className="social-login-buttons">
                    <button>
                      <i className="fa-brands fa-google"></i>
                    </button>
                    <button>
                      <i className="fa-brands fa-apple"></i>
                    </button>
                    <button>
                      <i className="fa-brands fa-facebook-f"></i>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <textarea placeholder="Write a comment..." rows="4"></textarea>
                  <button className="post-button">Post</button>
                </>
              )}

              {/* User Comments */}
              <div className="user-comments">
                {/* Placeholder for user comments */}
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="user-comment">
                    <div className="user-comment-image"></div>
                    <p>User comment {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Column: Project Information Section */}
            <div className="project-info-column">
              {/* Owner Card */}
              <div className="info-card">
                <h4 className="info-card-heading">Owner</h4>
                <div className="owner-info">
                  <button className="owner-profile-pic">
                    <img src="https://mir-s3-cdn-cf.behance.net/user/100/bae8791272723445.66a2223992876.jpg" alt="" />
                  </button>
                  <div className="owner-name-loc">
                    <p>Tonic Black</p>
                    <p><i class="fa-solid fa-location-dot"></i> Minsk, Belarus</p>
                  </div>
                </div>
                <div className="owner-info-btn">
                <button className="owner-info-follow-button">
                  <i className="fa-solid fa-plus"></i> Follow
                </button>
                <button className="owner-info-hire-button">
                  <i className="fa-sharp fa-solid fa-envelope"></i> Hire
                </button>
                </div>
              </div>

              {/* Project Made For Card */}
              <div className="info-card">
                <h4 className="info-card-heading">Project Made For</h4>
                <div className="company-info">
                  <button className="company-profile-pic"><img src="https://mir-s3-cdn-cf.behance.net/team/138/5b8e19234673.5de6626521103.png" alt="" /></button>
                  <p>UPROCK.DESIGN</p>
                </div>
              </div>

              {/* Project Description Card */}
              <div className="info-card project-card">
                <h4 className="info-card-heading">Project Name</h4>
                <p>Harley-Davidson UX/UI</p>
                <p>
                  This project is educational. Task: To redesign the website of
                  the American company Harley—Davidson's online store. 9 unique
                  pages were developed.
                </p>
                <div className="info-project-stats">
                  <span>
                    <i className="fa-solid fa-thumbs-up"></i> 711k
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i> 3.9k
                  </span>
                  <span>
                    <i className="fa-solid fa-message"></i> 1.2k
                  </span>
                </div>
                <p>Published: March 17th 2023</p>
              </div>

              {/* Tools Card */}
              <div className="info-card">
                <h4>Tools</h4>
                <div className="creative-buttons">
                  <button className="creative-button">Web Design</button>
                  <button className="creative-button">UI/UX</button>
                  <button className="creative-button">Graphic Design</button>
                  <button className="creative-button">Figma</button>
                  <button className="creative-button">Adobe Photoshop</button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <nav className="sidebar">
          <div
            className="n-profile"
            onMouseEnter={handleSidebarMouseEnter}
            onMouseLeave={handleSidebarMouseLeave}
          >
            <button>
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                alt="Profile"
              />
            </button>
            <div className="plus-icon">
              <i className="fa-solid fa-plus"></i>
            </div>

            <span>Follow</span>
          </div>
          <div>
            <button>
              <i className="fa-sharp fa-solid fa-envelope"></i>
            </button>
            <span>Hire</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </button>
            <span>Tools</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <span>Save</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-share-from-square"></i>
            </button>
            <span>Share</span>
          </div>
          <div>
            <button className="btn-black">
              <i className="fa-solid fa-thumbs-up"></i>
              <p className="btn-text">711</p>
            </button>
          </div>
        </nav>

        {/* Sidebar Modal */}
        {showSidebarModal && (
          <Modal
            showModal={showSidebarModal}
            closeModal={handleSidebarMouseLeave}
            position={modalPosition}
            customClass="sidebar-modal" // Optional for different modal styles
            onMouseEnter={handleModalMouseEnter}
            onMouseLeave={handleModalMouseLeave}
          />
        )}
      </div>
    </section>
  );
};

export default UserContent;
