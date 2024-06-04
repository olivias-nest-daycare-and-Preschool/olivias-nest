export const NavItems = [
    {
      isProfile: true,
    },
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/AboutUs",
      text: "About Us",
    },
    {
      href: "/Facilities",
      text: "Facilities",
      subItems: [
        {
          href: "/Facilities/Outdoor",
          text: "Outdoor",
          sectionId: "outdoor-facility",
        },
        {
          href: "/Facilities/Indoor",
          text: "Indoor",
          sectionId: "indoor-facility",
        },
      ],
    },
    {
      href: "/Co-curricular",
      text: "Co-curricular",
    },
    {
      href: "/Transport",
      text: "Transport",
    },
    {
      href: "/Gallery",
      text: "Gallery",
    },
    {
      href: "/News",
      text: "News",
    },
    {
      hasSocialIcons: true,
    },
    {
      hasCTA: true,
    },
  ];
  