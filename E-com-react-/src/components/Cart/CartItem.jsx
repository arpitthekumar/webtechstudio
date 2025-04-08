import React from "react";
import { IconButton, Button, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const CartCard = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md shadow-md"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <Typography variant="h6" className="font-semibold text-gray-800">
          {item.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          Price: ${item.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </Typography>
      </div>

      {/* Quantity Controls */}
      <div className="flex   items-center gap-3">
        <Button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          variant="outlined"
          color="primary"
          disabled={item.quantity <= 1}
          size="small"
          className="w-8 h-8 rounded-full hover:bg-gray-100"
        >
          -
        </Button>
        <Typography variant="body1" className="text-lg font-semibold">
          {item.quantity}
        </Typography>
        <Button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          variant="outlined"
          color="primary"
          size="small"
          className="w-8 h-8 rounded-full hover:bg-gray-100"
        >
          +
        </Button>
      </div>

      {/* Remove Button */}
      <div className="ml-4 ">
        <IconButton
          onClick={() => onRemove(item.id)}
          color="error"
          size="large"
          className="hover:text-red-700 transition-colors block sm:inline-block"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartCard;
