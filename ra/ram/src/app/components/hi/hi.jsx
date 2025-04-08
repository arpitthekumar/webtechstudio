"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const SocialMediaIntegration = ({ shareUrl = "https://yourwebsite.com/property/123" }) => {
  const title = "Check out this amazing property!";

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      {/* Share Buttons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Share This Listing</h2>
        <div className="flex space-x-4">
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={50} round className="shadow-md hover:scale-105 transition-transform" />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={50} round className="shadow-md hover:scale-105 transition-transform" />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={50} round className="shadow-md hover:scale-105 transition-transform" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIntegration;
