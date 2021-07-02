import Link from 'next/link';
import { useEffect } from 'react'; //this is a React method. Remember that React is a dependency of NextJS
import { useRouter } from 'next/router'; //this is a next/router method
const notFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //router.go(1) if negative value => go back 1 step and if postive go forward 1 step
      router.push('/'); // .push is a method to redirect
    }, 3000);
  }, []); //the empty [] means once the it mounts don't use that again unless you put a dependency

  return (
    <div className="not-found">
      <h1>Oooopsss...</h1>
      <h2>This page does not exist</h2>
      <h3>
        Please go back to{' '}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </h3>
    </div>
  );
};

export default notFound;
