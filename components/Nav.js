import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
