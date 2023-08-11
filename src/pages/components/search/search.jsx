import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import './search.css'


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
const db = firebase.firestore();// Initialize Firebase in this file

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      db.collection('eventtickets')
        .where('concert', '==', searchTerm)
        .get()
        .then((querySnapshot) => {
          const results = querySnapshot.docs.map((doc) => doc.data());
          setSearchResults(results);
        })
        .catch((error) => {
          console.error('Error searching for items:', error);
        });
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

