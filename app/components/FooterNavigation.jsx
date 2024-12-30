import { navigation } from "../constants/index";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const FooterNavigation = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-white">
              {item.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-white">
              {item.links.map((link) => (
                <li key={link.title} className="mt-4 flex items-center">
                  <IconRenderer title={link.title} />
                  <Link
                    href={link.href}
                    className="ml-2 transition-all hover:text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const IconRenderer = ({ title }) => {
  switch (title.toLowerCase()) {
    case "youtube":
      return <FaYoutube />;
    case "twitter":
      return <FaTwitter />;
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    default:
      return null;
  }
};

export default FooterNavigation;
