import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button/Button";

export default function Pagination() {
  const [post, setpost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((response) => setpost(response.data));
  }, [page]);

  //css in js for the delete button
  const nextButtonStyle1 = {
    color: "white",
    backgroundColor: "red",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "3px",
    paddingBottom: "3px",
    borderRadius: "8px",
    fontSize: "12px",
    width: "50px",
    fontWeight: 300,
  };
  const nextButtonStyle2 = {
    color: "white",
    backgroundColor: "black",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "2px",
    paddingBottom: "2px",
    borderRadius: "8px",
    fontSize: "12px",
    width: "50px",
    fontWeight: 300,
  };

  return (
    <div>
      <ul className="bg-white p-5 leading-[28px] w-full lg:w-1/2 shadow-sm">
        {post.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <span className="w-full lg:w-1/2 flex justify-between items-center my-5">
        <Button
          buttonStyle={nextButtonStyle1}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          buttonStyle={nextButtonStyle2}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </span>
    </div>
  );
}
