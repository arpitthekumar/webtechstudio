// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   IconButton,
//   Avatar,
//   Divider,
// } from "@mui/material";
// import { Add, Remove, Delete } from "@mui/icons-material";
// import RazorpayButton from "./PlaceOrderButton";

// // Dummy Razorpay API function (replace with actual Razorpay integration later)
// const initiateRazorpayPayment = (totalAmount) => {
//   const options = {
//     key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
//     amount: totalAmount * 100, // Convert to paise
//     currency: "INR",
//     name: "Your Shop",
//     description: "Order Payment",
//     image: "/logo.png", // Add your logo here
//     handler: function (response) {
//       alert("Payment Successful!");
//     },
//     prefill: {
//       name: "Customer",
//       email: "customer@example.com",
//       contact: "9999999999",
//     },
//     notes: {
//       address: "Some address",
//     },
//     theme: {
//       color: "#F37254", // Customize Razorpay button color
//     },
//   };

//   const rzp = new window.Razorpay(options);
//   rzp.open();
// };

// const Checkout = () => {
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);

//     // Calculate total price
//     const total = storedCart.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, []);

//   const handleQuantityChange = (id, operation) => {
//     const updatedCart = [...cart];
//     const itemIndex = updatedCart.findIndex((item) => item.id === id);

//     if (itemIndex !== -1) {
//       const item = updatedCart[itemIndex];

//       // Increase or decrease quantity
//       if (operation === "increase" && item.quantity < 10) {
//         item.quantity += 1;
//       } else if (operation === "decrease" && item.quantity > 1) {
//         item.quantity -= 1;
//       }

//       // Update the cart in local storage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setCart(updatedCart);
//     }
//   };

//   const handleDeleteItem = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//   };

//   const handleOrder = () => {
//     // Initiate Razorpay payment
//     initiateRazorpayPayment(totalPrice);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #fdfbfb, #ebedee)",
//         py: 6,
//         px: 3,
//       }}
//     >
//       <Typography
//         variant="h3"
//         align="center"
//         sx={{
//           fontWeight: "bold",
//           mb: 4,
//           color: "#5A5D9C",
//           textShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         Checkout
//       </Typography>

//       {/* Cart Items */}
//       <Box sx={{ mb: 6 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: "600",
//             color: "#7D8CC4",
//             mb: 3,
//           }}
//         >
//           Your Cart
//         </Typography>

//         {cart.length > 0 ? (
//           cart.map((item) => (
//             <Paper
//               key={item.id}
//               elevation={3}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 p: 2,
//                 mb: 2,
//                 background: "rgba(255, 255, 255, 0.8)",
//                 backdropFilter: "blur(10px)",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                 <Avatar
//                   src={item.image}
//                   alt={item.name}
//                   sx={{ width: 64, height: 64, border: "2px solid #D3D8F8" }}
//                 />
//                 <Box>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: ${item.price} | Quantity: {item.quantity}
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <IconButton
//                   onClick={() => handleQuantityChange(item.id, "decrease")}
//                   sx={{
//                     background: "#E3EAFD",
//                     "&:hover": { background: "#D3D8F8" },
//                   }}
//                 >
//                   <Remove />
//                 </IconButton>
//                 <IconButton
//                   onClick={() => handleQuantityChange(item.id, "increase")}
//                   sx={{
//                     background: "#E3EAFD",
//                     "&:hover": { background: "#D3D8F8" },
//                   }}
//                 >
//                   <Add />
//                 </IconButton>
//                 <IconButton
//                   onClick={() => handleDeleteItem(item.id)}
//                   sx={{
//                     background: "#FFD7D7",
//                     "&:hover": { background: "#FFBFBF" },
//                   }}
//                 >
//                   <Delete />
//                 </IconButton>
//               </Box>
//               <Typography variant="body1" fontWeight="bold">
//                 ${item.price * item.quantity}
//               </Typography>
//             </Paper>
//           ))
//         ) : (
//           <Typography color="text.secondary">Your cart is empty.</Typography>
//         )}
//       </Box>

//       {/* Total Price */}
//       <Divider />
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           py: 3,
//         }}
//       >
//         <Typography variant="h5" fontWeight="600">
//           Total:
//         </Typography>
//         <Typography variant="h4" fontWeight="bold" color="#5A5D9C">
//           ${totalPrice.toFixed(2)}
//         </Typography>
//       </Box>

//       {/* Payment Button */}
//       <Box sx={{ textAlign: "center", mt: 4 }}>
//         <RazorpayButton/>
//         {/* <Button
//           onClick={handleOrder}
//           variant="contained"
//           sx={{
//             background: "linear-gradient(to right, #89F7FE, #66A6FF)",
//             color: "#fff",
//             px: 4,
//             py: 2,
//             borderRadius: "20px",
//             fontWeight: "bold",
//             boxShadow: "0 6px 12px rgba(102, 166, 255, 0.4)",
//             "&:hover": {
//               background: "linear-gradient(to right, #66A6FF, #89F7FE)",
//               boxShadow: "0 8px 16px rgba(102, 166, 255, 0.6)",
//             },
//           }}
//         >
//           Pay Now
//         </Button> */}
//       </Box>
//     </Box>
//   );
// };

// export default Checkout;
