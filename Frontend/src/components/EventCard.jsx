import React from "react";

const EventCard = ({ event }) => {
  const { name, datetime, location, description, image } = event;

  const date = new Date(datetime);
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="event-card">
      <img
        src={image}
        alt={name}
        className="event-image"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x160?text=No+Image";
        }}
      />
      <h3>{name}</h3>
      <p>
        <strong>Date & Time:</strong> {formattedDate}, {formattedTime}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>{description}</p>
      <button>Register</button>
    </div>
  );
};

export default EventCard;
