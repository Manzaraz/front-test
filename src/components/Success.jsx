import React from "react";

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        alt="Manzi Shop"
        src="https://i.ibb.co/0nHf3nW/Manzi-Avatar.jpg"
        height={"100px"}
      />
      <h3
        style={{
          border: "none",
          width: 120,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "#1f9f9f",
          color: "whitesmoke",
          fontWeight: "600",
        }}
      >
        Successfull.
      </h3>
      <span>Your order is being prepared. Thanks for choosign Manzi Shop.</span>
    </div>
  );
};

export default Success;
