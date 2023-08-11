import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
import "firebase/compat/storage";
import "./ticketinfo.css";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnNW06rCRrmuscM4IJZveVLuhQgcyGMJU",
  authDomain: "ticketing-system-adc5b.firebaseapp.com",
  projectId: "ticketing-system-adc5b",
  storageBucket: "ticketing-system-adc5b.appspot.com",
  messagingSenderId: "814092958752",
  appId: "1:814092958752:web:1d501b0549dfdf26d81045",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

const Ticketinfo = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [seat, setSeats] = useState("");
  const [concert, setConcert] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");

  const categories = [
    "Sport",
    "Cinema",
    "Seminar",
    "Theatre and Arts",
    "Musical Concert",
  ]; // List of categories for the dropdown

  const handleCategorySelected = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firebase
      await db.collection("eventtickets").add({
        concert,
        price,
        seat,
        date,
        time,
        Category,
        location,
        number,
        selectedImage,
        category: selectedCategory,
        seatsAvailable,
      });

      // Reset form fields

      setConcert("");
      setPrice("");
      setDate("");
      setTime("");
      setLocation("");
      setSeats("");
      setNumber("");
      setSelectedImage("");
      setSelectedCategory("");
      setSeatsAvailable("");

      setShowPopup(true);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    // Redirect to the homepage
    navigate("/");
  };

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];

    // Upload the image to Firebase Storage
    const storageRef = storage.ref(`images/${imageFile.name}`);
    await storageRef.put(imageFile);

    const downloadUrl = await storageRef.getDownloadURL();
    await db.collection("images").add({ downloadUrl });

    console.log("Image uploaded and URL written to Firestore.");
  };

  return (
    <div className="info">
      <form onSubmit={handleSubmit} className="info-box">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          value={selectedImage}
        />
        {selectedImage && (
          <div>
            <h3>Selected Image:</h3>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        )}
        <label>
          <input
            type="text"
            value={concert}
            onChange={(e) => setConcert(e.target.value)}
            required
            placeholder="ticket name"
          />
        </label>



        <label>
          <input
            type="number"
            value={seat}
            onChange={(e) => setSeats(e.target.value)}
            required
            placeholder="No. Seats"
          />
        </label>



        <label>
          Event Category:
          <select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select an event category</option>
            <option value="Concert">Sport</option>
            <option value="Conference">Seminar</option>
            <option value="Party">Theatre</option>
            <option value="Workshop">Music concert</option>
          </select>
        </label>
        {/* <label>
          Select a category:
          <select
            value={selectedCategory}
            onChange={handleCategorySelected}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label> */}
        <label>
          <input
            type=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price, add currency"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date, eg.1 jan 2023"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={seatsAvailable}
            onChange={(e) => setSeatsAvailable(e.target.value)}
            placeholder="Tickets Available, 50 tickets"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time, eg.11pm to 12pm"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location, eg.Accra, National Theatre"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Mobile Number eg.0244657242"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={handleFetchData}>Fetch Data</button> */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Submission Successful!</h2>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticketinfo;
