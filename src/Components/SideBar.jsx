import {
  NavListContainer,
  SideBarContainer,
  SideBarHeader,
  SideBarsubHeader,
  ToggleButton,
} from "./Styled-Components/SideBarComponent";
import { MdOutlineDashboard, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const handleToggle = () => {
    setSideBarToggle(!sideBarToggle);
  };
  console.log(sideBarToggle);

  return (
    <SideBarContainer $isOpen={sideBarToggle}>
      <NavListContainer>
        <li>
          <SideBarHeader>
            <a href="https://yamm.sa/" target="_blank">
              <svg
                width="120"
                height="36"
                viewBox="0 0 361 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M204.913 28.5131C193.613 28.5131 186.013 33.8131 183.113 42.4131C182.813 43.3131 183.313 44.2131 184.213 44.4131L192.713 46.7131C193.513 46.9131 194.313 46.5131 194.613 45.7131C196.113 41.5131 199.613 38.9131 204.913 38.9131C211.013 38.9131 215.013 42.2131 215.013 47.7131C215.013 49.3131 213.513 50.5131 211.913 50.1131L210.613 49.8131C207.913 49.1131 205.113 48.8131 202.213 48.8131C190.613 48.8131 183.013 54.1131 183.013 64.6131C183.013 74.1131 190.713 79.9131 199.213 79.9131C205.313 79.9131 209.813 78.2131 213.013 74.8131C213.913 73.8131 215.513 74.5131 215.513 75.8131V77.3131C215.513 78.2131 216.213 78.9131 217.113 78.9131H226.113C227.013 78.9131 227.713 78.2131 227.713 77.3131V48.4131C227.613 35.6131 219.913 28.5131 204.913 28.5131ZM214.913 60.6131C214.913 66.3131 210.513 69.7131 204.413 69.7131C199.113 69.7131 196.413 67.4131 196.413 63.8131C196.413 59.9131 199.313 57.9131 204.213 57.9131C206.213 57.9131 208.813 58.4131 211.913 59.4131L214.913 60.3131V60.6131Z"
                  fill="#9e6cff"
                ></path>
                <path
                  d="M343.213 28.5131C338.913 28.5131 335.213 29.9131 332.313 32.9131C330.613 34.7131 327.713 34.5131 326.113 32.7131C323.613 30.0131 320.213 28.6131 316.213 28.6131C311.113 28.6131 307.313 30.6131 304.813 34.4131C304.313 35.2131 304.013 36.0131 303.813 37.0131L303.213 40.2131C303.113 40.6131 302.513 40.6131 302.413 40.2131C300.613 31.5131 294.413 28.7131 287.513 28.7131C283.213 28.7131 279.513 30.1131 276.613 33.1131C274.913 34.9131 272.013 34.7131 270.313 32.9131C267.813 30.2131 264.413 28.8131 260.413 28.8131C256.413 28.8131 253.213 30.0131 250.713 32.5131C249.813 33.4131 248.213 32.8131 248.213 31.5131C248.213 30.6131 247.513 29.9131 246.613 29.9131H236.413C235.513 29.9131 234.813 30.6131 234.813 31.5131V77.6131C234.813 78.5131 235.513 79.2131 236.413 79.2131H246.613C247.513 79.2131 248.213 78.5131 248.213 77.6131V49.1131C248.213 43.2131 251.213 39.9131 255.513 39.9131C259.813 39.9131 262.813 42.8131 262.813 48.1131V77.3131C262.813 78.2131 263.513 78.9131 264.413 78.9131H274.513C275.413 78.9131 276.113 78.2131 276.113 77.3131V48.6131C276.113 42.9131 278.913 39.5131 283.413 39.5131C287.613 39.5131 290.713 42.6131 290.713 48.0131V77.2131C290.713 78.1131 291.413 78.8131 292.313 78.8131H302.513C303.413 78.8131 304.113 78.1131 304.113 77.2131V49.1131C304.113 43.2131 307.113 39.9131 311.413 39.9131C315.713 39.9131 318.713 42.8131 318.713 48.1131V77.3131C318.713 78.2131 319.413 78.9131 320.313 78.9131H330.413C331.313 78.9131 332.013 78.2131 332.013 77.3131V48.6131C332.013 42.9131 334.813 39.5131 339.313 39.5131C343.613 39.5131 346.613 42.6131 346.613 48.0131V77.2131C346.613 78.1131 347.313 78.8131 348.213 78.8131H358.413C359.313 78.8131 360.013 78.1131 360.013 77.2131V45.5131C359.613 34.7131 353.313 28.5131 343.213 28.5131Z"
                  fill="#9e6cff"
                ></path>
                <path
                  d="M170.213 30.4131L159.413 52.8131C158.513 54.7131 155.813 54.7131 154.913 52.7131L144.813 30.4131C144.513 29.8131 144.013 29.5131 143.413 29.5131H132.913C131.813 29.5131 131.013 30.7131 131.513 31.7131L149.913 71.1131C150.113 71.5131 150.113 72.0131 149.913 72.4131L141.113 90.9131C140.613 91.9131 141.413 93.1131 142.513 93.1131H152.513C153.113 93.1131 153.613 92.8131 153.913 92.2131L183.013 31.7131C183.513 30.7131 182.713 29.5131 181.613 29.5131H171.613C171.013 29.5131 170.413 29.9131 170.213 30.4131Z"
                  fill="#9e6cff"
                ></path>
                <path
                  d="M112.513 35.1131L95.5132 90.4131C91.7132 102.713 78.5133 109.713 66.2133 106.013L54.6132 102.413C44.5132 99.3131 38.0132 89.9131 38.0132 79.8131C40.7132 79.7131 43.3132 78.9131 45.8132 77.6131L60.2133 69.9131C69.5133 65.0131 73.0132 53.5131 68.1132 44.2131L55.4132 20.0131L56.1132 17.8131C59.9132 5.51306 73.1132 -1.48693 85.4132 2.21307L97.0132 5.81306C109.313 9.61306 116.313 22.8131 112.513 35.1131Z"
                  fill="#9e6cff"
                ></path>
                <path
                  d="M60.4131 69.9131L46.0131 77.6131C43.5131 78.9131 40.8131 79.6131 38.2131 79.8131C38.2131 77.6131 38.5131 75.3131 39.2131 73.1131L55.5131 20.0131L68.4131 44.2131C73.2131 53.5131 69.6131 65.0131 60.4131 69.9131Z"
                  fill="#FF8389"
                ></path>
                <path
                  d="M55.413 20.0131L39.113 73.1131C38.413 75.3131 38.113 77.6131 38.113 79.8131C30.913 80.2131 23.8131 76.5131 20.3131 69.7131L2.21309 35.6131C-2.68691 26.3131 0.812994 14.8131 10.113 9.91307L24.513 2.21307C33.813 -2.68693 45.3131 0.813068 50.2131 10.1131L55.413 20.0131Z"
                  fill="#FFCD2E"
                ></path>
                <path
                  d="M11.8131 97.9131C10.9131 97.4131 10.3131 96.713 9.71313 95.813C9.21313 94.913 8.91309 94.013 8.91309 93.013C8.91309 92.013 9.21313 91.013 9.71313 90.213C10.2131 89.313 10.9131 88.7131 11.8131 88.1131C12.7131 87.5131 13.613 87.313 14.613 87.313C15.613 87.313 16.6131 87.6131 17.4131 88.1131C18.3131 88.6131 18.9131 89.313 19.5131 90.213C20.0131 91.113 20.3131 92.013 20.3131 93.013C20.3131 94.313 19.913 95.513 19.113 96.513C18.813 96.913 18.5131 97.2131 18.2131 97.4131C17.2131 98.2131 16.0131 98.6131 14.7131 98.6131C13.6131 98.7131 12.7131 98.4131 11.8131 97.9131ZM17.0131 97.213C17.7131 96.813 18.3131 96.213 18.7131 95.513C19.1131 94.813 19.3131 94.0131 19.3131 93.1131C19.3131 92.2131 19.1131 91.513 18.7131 90.713C18.3131 90.013 17.7131 89.413 17.0131 89.013C16.3131 88.613 15.5131 88.4131 14.7131 88.4131C13.9131 88.4131 13.1131 88.613 12.4131 89.013C11.7131 89.413 11.1131 90.013 10.7131 90.713C10.3131 91.413 10.113 92.2131 10.113 93.1131C10.113 94.0131 10.3131 94.713 10.7131 95.513C11.1131 96.213 11.7131 96.813 12.4131 97.213C13.1131 97.613 13.9131 97.813 14.7131 97.813C15.5131 97.813 16.3131 97.613 17.0131 97.213ZM12.8131 95.6131C12.7131 95.5131 12.7131 95.5131 12.7131 95.4131V90.713C12.7131 90.613 12.7131 90.513 12.8131 90.513C12.9131 90.413 12.9131 90.4131 13.0131 90.4131H14.9131C15.5131 90.4131 16.0131 90.513 16.3131 90.813C16.7131 91.113 16.8131 91.5131 16.8131 92.1131C16.8131 92.5131 16.7131 92.8131 16.5131 93.1131C16.3131 93.4131 16.1131 93.613 15.7131 93.713L16.7131 95.313C16.7131 95.413 16.8131 95.413 16.8131 95.513C16.8131 95.613 16.8131 95.713 16.7131 95.713C16.6131 95.813 16.6131 95.813 16.5131 95.813H16.3131C16.1131 95.813 16.0131 95.713 15.9131 95.513L14.8131 93.813H13.5131V95.4131C13.5131 95.5131 13.5131 95.6131 13.4131 95.6131C13.3131 95.7131 13.3131 95.713 13.2131 95.713H13.0131C12.9131 95.713 12.8131 95.7131 12.8131 95.6131ZM14.8131 92.9131C15.6131 92.9131 15.9131 92.6131 15.9131 92.1131C15.9131 91.5131 15.5131 91.313 14.8131 91.313H13.5131V93.013H14.8131V92.9131Z"
                  fill="white"
                ></path>
              </svg>
            </a>

            <ToggleButton onClick={handleToggle} $isOpen={sideBarToggle}>
              <MdKeyboardDoubleArrowLeft size={20} />
            </ToggleButton>
          </SideBarHeader>
        </li>
        <li>
          <Link className="sidebar-item" to={"/"}>
            <MdOutlineDashboard size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-item" to={"/profile"}>
            <CgProfile size={20} />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-item" to={"/reports"}>
            <TbReportSearch size={20} />
            <span>Reports</span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-item" to={"/settings"}>
            <CiSettings size={20} />
            <span>Settings</span>
          </Link>
        </li>
      </NavListContainer>
    </SideBarContainer>
  );
};

export default SideBar;
