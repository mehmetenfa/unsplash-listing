import axios from "axios";
import React from "react";
import { useState} from 'react'
import Image from "../components/Image";

export default function Home() {
  const [photo, setPhoto] = useState(null);

 
  return (
    <div>
      <Image />
    </div>
  );
}
