import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import './cards.css';
import { Link } from "react-router-dom";


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

const Cards = () => {
  const [items, setItems] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imageRef = storage.ref().child('images/1691682090359.JPG');
  
    imageRef.getDownloadURL().then(url => {
      setImageUrl(url);
    });
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection("eventtickets").get();
        const fetchedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetchedItems);
        setIsPending(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
    };

    fetchData();
  }, []);



  return (
    <section>
      {isPending && <div className="loading">Loading...</div>}
    <div className="cards-container">
      <div className="card-container">
        {items.map((ticket) => (
          <Link to={`/purchase/${ticket.id}/${encodeURIComponent(ticket.concert)}/${encodeURIComponent(ticket.category)}/${encodeURIComponent(ticket.price)}/${encodeURIComponent(ticket.date)}/${encodeURIComponent(ticket.time)}/${encodeURIComponent(ticket.location)}/${encodeURIComponent(ticket.number)}`} className="link1">
          <div className="card" key={ticket.id}>
            <div className="cardcontent"> 
            
            <strong>{ticket.concert}</strong>
            <br />
            <strong>{ticket.price}</strong> 
            <br />
            <strong>{ticket.date}</strong> 
            <br />
            <strong>{ticket.category}</strong> 
            <br />
            <strong className="undefined">{ticket.time}</strong> 
            <br />
            <strong className="undefined">{ticket.location}</strong> 
            <br />
            <strong className="undefined">{ticket.number}</strong> 
            <br />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Cards;
