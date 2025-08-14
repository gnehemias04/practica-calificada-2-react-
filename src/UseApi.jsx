import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api(props) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${props.search}}&per_page=12&client_id=SNnldJFusk5eaN0cXx3EHqbNv02XmjIYQxF2doboi_Q`
      )
      .then((res) => setImg(res.data.results));
  }, []);

  return img;
}
