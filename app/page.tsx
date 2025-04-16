"use client"

import SUAuthForm from "@/components/SUAuthForm";
import SIAuthForm from "@/components/SIAuthForm";
import React from "react";
import { useState } from "react";

export default function Home() {
  

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>
      {!isRegister && <SIAuthForm setLogin={setIsRegister}/>}
      {isRegister && <SUAuthForm setLogin={setIsRegister}/>}
    </div>
  );
}
