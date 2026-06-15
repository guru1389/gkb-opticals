"use client";

import { useState } from "react";
import { galleryImages } from "./galleryData";
import MainImage from "./MainImage";
import ThumbnailRail from "./ThumbnailRail";

export default function ProductGallery() {

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0].image
  );

  return (
    <div className="flex gap-4 lg:sticky lg:top-[120px] self-start">

      {/* Thumbnail Column */}

      <ThumbnailRail
        images={galleryImages.map((image) => image.image)}
        selectedImage={selectedImage}
        onSelect={setSelectedImage}
      />

      {/* Main Image */}

      <MainImage image={selectedImage} />

    </div>
  );
}
