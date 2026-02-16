import React, { useEffect, useState } from "react";
import "./DualSlider.css";

const BACKEND_URL = "http://localhost:3000"; // change if needed

const HomeSlider = () => {
  const [events, setEvents] = useState([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  // ========================================
  // CUSTOMIZE RIGHT SIDE HERE
  // ========================================
  const rightSliderData = [
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      title: "Academic Excellence",
      subtitle: "Top Performers 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      title: "Innovation Award",
      subtitle: "Best Project Winner"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      title: "Leadership Recognition",
      subtitle: "Student Council 2024"
    },
    // Add more items here as needed
    // {
    //   image: "YOUR_IMAGE_URL_HERE",
    //   title: "YOUR_TITLE_HERE",
    //   subtitle: "YOUR_SUBTITLE_HERE"
    // },
  ];
  // ========================================

  // Fetch Data for Left Slider
  useEffect(() => {
    fetch(`${BACKEND_URL}/gly-updpi`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.events) {
          setEvents(data.events);
        }
      })
      .catch((err) => console.log("Fetch Error:", err));
  }, []);

  // Filter Categories for Left Slider
  const meetups = events.filter((item) => item.category === "meetups");

  console.log("Meetups count:", meetups.length);

  // Auto Slide Left (Meetups - Photos change)
  useEffect(() => {
    if (meetups.length <= 1) return;

    const interval = setInterval(() => {
      setLeftIndex((prev) => {
        const newIndex = prev === meetups.length - 1 ? 0 : prev + 1;
        console.log("Left slider moving to:", newIndex);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [meetups.length]);

  // Auto Slide Right (Custom data - Image and Text change)
  useEffect(() => {
    if (rightSliderData.length <= 1) return;

    const interval = setInterval(() => {
      setRightIndex((prev) => {
        const newIndex = prev === rightSliderData.length - 1 ? 0 : prev + 1;
        console.log("Right slider moving to:", newIndex);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [rightSliderData.length]);

  return (
    <div className="slider-container">

      {/* LEFT BIG SLIDER - Photos Change */}
      <div className="big-slider">
        {meetups.length > 0 ? (
          <>
            <img
              key={`meetup-${leftIndex}`}
              src={`${BACKEND_URL}/people/${meetups[leftIndex].imageUrl}`}
              alt={meetups[leftIndex].caption}
              onError={(e) => {
                console.error("Image load error:", e.target.src);
                if (!e.target.src.includes('default-image')) {
                  e.target.src = "/default-image.jpg";
                }
              }}
            />
            <div className="caption">
              {meetups[leftIndex].caption}
            </div>

            {meetups.length > 1 && (
              <div className="dots">
                {meetups.map((_, index) => (
                  <span
                    key={index}
                    className={leftIndex === index ? "active" : ""}
                    onClick={() => setLeftIndex(index)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="no-data">No meetups available</div>
        )}
      </div>

      {/* RIGHT SMALL SLIDER - Custom Image with Custom Text */}
      <div className="small-slider">
        {rightSliderData.length > 0 ? (
          <>
            {/* Changing background image */}
            <img
              key={`right-image-${rightIndex}`}
              src={rightSliderData[rightIndex].image}
              alt={rightSliderData[rightIndex].title}
              className="fixed-background"
              onError={(e) => {
                console.error("Right image load error:", e.target.src);
                if (!e.target.src.includes('default-image')) {
                  e.target.src = "/default-image.jpg";
                }
              }}
            />
            
            {/* Overlay for better text visibility */}
            <div className="text-overlay"></div>
            
            {/* Changing text content */}
            <div className="text-content" key={`right-text-${rightIndex}`}>
              <h3>{rightSliderData[rightIndex].title}</h3>
              <p>{rightSliderData[rightIndex].subtitle}</p>
            </div>

            {rightSliderData.length > 1 && (
              <div className="dots">
                {rightSliderData.map((_, index) => (
                  <span
                    key={index}
                    className={rightIndex === index ? "active" : ""}
                    onClick={() => setRightIndex(index)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="no-data">No data available</div>  
        )}
      </div>

    </div>
  );
};

export default HomeSlider;