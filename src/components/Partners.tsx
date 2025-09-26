import React from "react";

const Partners: React.FC = () => {
  const logos = [
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/hapvida-logo-2_iba1hs.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890979/life_a7ehx5.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/sulamerica-saude-logo-2_ft6tpp.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/blue_lponmf.webp",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/mediservice_afsn0v.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/bradesco-saude-logo-3-1_m5frl6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/SelectSaude_vxgik6.png",
    "https://res.cloudinary.com/dg7yrvjwu/image/upload/v1758890978/brasil-saude_grafre.png",
  ];

  // Triplicate the logos for a seamless 3-run loop
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="marquee">
        <div className="marquee-content">
          {extendedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-12 mx-4 sm:mx-8 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
