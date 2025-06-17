"use client";

import { MenuProvider } from "@/app/components/Context/MenuContext";
import Layout from "../../../components/Layout";
import PortaConhecimento from "../../../components/PortaConhecimento";
import { videosPortalConhecimento } from "../../../utils/const";
import React, { useState } from "react";

export default function PortalConhecimento() {
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(videosPortalConhecimento[0]); 

  return (
    <MenuProvider>
    <Layout>
      <PortaConhecimento />
    </Layout>
    </MenuProvider>
  );
}
