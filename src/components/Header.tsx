import Link from "next/link";

const Header = ({ title, shop }: { title: string; shop?: boolean }) => {
  return (
    <div className="lg:absolute top-0 bg-secondary w-full text-center lg:pt-44 pt-24 pb-10">
      <h1 className="lg:text-5xl text-3xl font-medium">{title}</h1>
      <div className="flex gap-1 justify-center lg:text-lg pt-3">
        <Link href="/" className="text-purple/80 hover:text-purple">
          <h4>Home</h4>
        </Link>
        {shop ? (
          <div className="flex gap-1">
            <Link href="/shop" className="text-purple/80 hover:text-purple">
              <h4>/ Shop</h4>
            </Link>
            <h4>/ {title}</h4>
          </div>
        ) : (
          <h4>/ {title}</h4>
        )}
      </div>
    </div>
  );
};

export default Header;
