import React, { useEffect } from "react";
import axios from "axios";

export default function Api(props) {
  return useEffect(() => {
    const image = props.search || "perro";
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${image}&per_page=12&client_id=SNnldJFusk5eaN0cXx3EHqbNv02XmjIYQxF2doboi_Q`
      )
      .then((res) => props.setImg(res.data.results));
  }, [props.search]);
}
