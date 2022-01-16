import {useEffect, useState} from "react";

export default function BookCard() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    data();
  },[]);
  const data = async () => {
    await fetch("http://localhost:8086/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  };
  return <div> {console.log(data(),books)} </div>;

}