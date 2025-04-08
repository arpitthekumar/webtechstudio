import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import Cart from "../../../Cart/Cart";

const Navbar = ({ cartCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          top: 0,
          zIndex: 1100,
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
          transition: "background-color 0.3s ease",
        }}
      >
        <Toolbar className="flex justify-between items-center px-4">
          <a href="/">
            <img
              src={isScrolled ? "/logo1.png" : "/logo.png"} // Change logo based on scroll
              alt="EtawahEcommerce"
              className={`h-16 ${isScrolled ? "text-white" : "text-gray-800"}`}
            />
          </a>

          {isDesktop ? (
            <div className="flex gap-6">
              <a
                href="/"
                className={
                  isScrolled
                    ? "text-white hover:no-underline"
                    : "text-gray-600 hover:text-white"
                }
              >
                Home
              </a>
              <a
                href="/about"
                className={
                  isScrolled
                    ? "text-white hover:no-underline"
                    : "text-gray-600 hover:text-white"
                }
              >
                About
              </a>
              <a
                href="/product"
                className={
                  isScrolled
                    ? "text-white hover:no-underline"
                    : "text-gray-600 hover:text-white"
                }
              >
                Products
              </a>
              <a
                href="/contact"
                className={
                  isScrolled
                    ? "text-white hover:no-underline"
                    : "text-gray-600 hover:text-white"
                }
              >
                Contact
              </a>
            </div>
          ) : (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon
                className={isScrolled ? "text-white" : "text-gray-800"}
              />
            </IconButton>
          )}

          <div className="flex items-center gap-4">
            <a href="/#search">
              <IconButton>
                <SearchIcon
                  className={isScrolled ? "text-white" : "text-gray-800"}
                />
              </IconButton>
            </a>
            <IconButton onClick={handleCartOpen}>
              <ShoppingCartIcon
                className={isScrolled ? "text-white" : "text-gray-800"}
              />
              <span
                className={`ml-2 text-sm ${
                  isScrolled ? "text-red-400" : "text-red-900"
                }`}
              >
                ({cartCount})
              </span>
            </IconButton>
          </div>
        </Toolbar>

        <Menu
          anchorEl={anchorEl}
          open={!isDesktop && Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <a href="/" className="text-gray-800">
              Home
            </a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/about" className="text-gray-800">
              About
            </a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/products" className="text-gray-800">
              Products
            </a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/contact" className="text-gray-800">
              Contact
            </a>
          </MenuItem>
        </Menu>
      </AppBar>

      <Cart isOpen={isCartOpen} onClose={handleCartClose} />
    </>
  );
};

export default Navbar;
