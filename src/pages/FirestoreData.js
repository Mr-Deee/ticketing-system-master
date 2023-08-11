import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import SearchBar from "./components/search/search";

const FirestoreData = () => {
  const [data, setData] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("eventtickets").get();
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    };

    fetchData();
  }, [db]);

  return (
    <div>
      <SearchBar data={data} setData={setData} />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.concert}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreData;
