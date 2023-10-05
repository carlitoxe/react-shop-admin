import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const route = router.pathname.substring(1);

  return (
    <nav className="bg-black shadow shadow-slate-400">
      <div className="max-w-7xl mx-auto pt-6 pb-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white capitalize">{route}</h1>
      </div>
    </nav>
  );
}
