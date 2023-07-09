import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={'/demopage'}>Go DemoPage</Link>
    </div>
  );
};

export default Home;
