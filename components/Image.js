import { useState, useEffect } from "react";
import axios from "axios";

export default function Image(props) {
  const [images, setImages] = useState([]);

  const URL =
    "https://api.unsplash.com/photos/?client_id=MymZhv89rGBK1SCzB4F7O02ZkZW3Muzj_IsI4gmyplc";

  const getPhotos = async () => {
    await axios.get(URL).then((res) => {
      console.log(res);
    });
  };
  getPhotos();

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <div>aflkbjmğaknfb</div>
    </div>
  );
}
