import { SocialMediaProfiles } from "../components/SocialMedia";

export const navigation = [
  // {
  //   title: "Work",
  //   links: [
  //     { title: "AH MANA3RAF", href: "/work/amazonclone" },
  //     { title: "AH MANA3RAF", href: "/work/bazar" },
  //     { title: "AH MANA3RAF", href: "/work/blog101" },
  //     {
  //       title: (
  //         <>
  //           See all <span aria-hidden="true">&rarr;</span>
  //         </>
  //       ),
  //       href: "/work",
  //     },
  //   ],
  // },
  {
    title: "Company",
    links: [
      { title: "About", href: "/" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blogs" },
      // { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
