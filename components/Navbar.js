import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/logo.png" height={128} width={77} />
      </div>
      <div>
        <Link href="/">
          <a>About</a>
        </Link>

        <Link href="/project">
          <a>Project</a>
        </Link>

        <Link href="/lists">
          <a>Lists</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
