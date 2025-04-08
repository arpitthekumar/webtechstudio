import React from "react";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineTransaction,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineTeam,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";

const Sidebar = () => {
  // Navigation menu items
  const menuItems = [
    {
      title: "Pages",
      items: [
        { icon: <AiOutlineDashboard />, label: "Dashboard", link: "/dashboard" },
        { icon: <AiOutlineUser />, label: "Users", link: "/users" },
        { icon: <AiOutlineShoppingCart />, label: "Products", link: "/products" },
        { icon: <AiOutlineTransaction />, label: "Transactions", link: "/transactions" },
      ],
    },
    {
      title: "Analytics",
      items: [
        { icon: <AiOutlineBarChart />, label: "Revenue", link: "/analytics/revenue" },
        { icon: <AiOutlineFileText />, label: "Reports", link: "/analytics/reports" },
        { icon: <AiOutlineTeam />, label: "Teams", link: "/analytics/teams" },
      ],
    },
    {
      title: "User",
      items: [
        { icon: <AiOutlineSetting />, label: "Settings", link: "/settings" },
        { icon: <AiOutlineQuestionCircle />, label: "Help", link: "/help" },
        { icon: <AiOutlineLogout />, label: "Logout", link: "/logout", className: "text-error" },
      ],
    },
  ];

  return (
    <div className="h-screen bg-base-200 text-base-content w-64">
      <div className="p-2">
        {/* User Info */}
        <div className="flex items-center gap-6 mb-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">user1</h3>
            <span className="text-sm text-gray-500">Administrator</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <ul className="menu menu-compact ml-0 text-sm">
          {menuItems.map((section, index) => (
            <React.Fragment key={index}>
              {/* Section Title */}
              <li className="menu-title text-xs">
                <span>{section.title}</span>
              </li>
              {/* Section Items */}
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link className={`flex items-center gap-2 ${item.className || ""}`} href={item.link}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
