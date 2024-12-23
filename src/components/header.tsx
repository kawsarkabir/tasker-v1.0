import { asset } from "../assets/assets";

export default function Header() {
  return (
    <nav className="py-3 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={asset.lws_logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
