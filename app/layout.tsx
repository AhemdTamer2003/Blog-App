import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const socialMediaLinks = [
  {
    href: "https://twitter.com/ahmedtamer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-2v-3a1 1 0 011-1h3a5 5 0 015 5v3z"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/ahmedtamer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 002.12 8.12c-.35 3.14-.54 6.44-.54 6.44v3.87zM16 16.5a2.5 2.5 0 01-2.5 2.5h-.5a2.5 2.5 0 01-2.5-2.5V14.5a2.5 2.5 0 012.5-2.5h.5a2.5 2.5 0 012.5 2.5v2z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/ahmedtamer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ahmedtamer/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-pink-500 hover:text-pink-700 transition duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ahmedtamer/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-blue-800 hover:text-blue-900 transition duration-300 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default function RootLayout({ children }: RootLayoutProps) {
  const header = (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 py-8 mb-6 rounded-md shadow-md">
      <Link href="/">
        <div className="flex items-center justify-center space-x-2 cursor-pointer">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            className="mx-auto rounded-full border-2 border-white"
            alt={"logo"}
          />
          <h2 className="text-3xl font-bold text-white text-center">Ahmed Blog</h2>
        </div>
      </Link>
      <p className="text-gray-200 mt-2">🤟 Welcome to my News blog. 💻
      Choose from one of the most popular tech blogs. Subscribe to your favorite tech blogs for free.</p>
    </header>
  );

  const footer = (
    <footer className="bg-gray-100 py-6 text-center text-gray-600 shadow-md">
      <h3 className="text-xl font-semibold">Designed by Ahmed Tamer</h3>
      <p className="text-sm">© 2023 Ahmed Blog. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );

  return (
    <div className="mx-auto max-w-2xl px-6">
      {header}
      <main className="py-12">{children}</main>
      {footer}
    </div>
  );
}