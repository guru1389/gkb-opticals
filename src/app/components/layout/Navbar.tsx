import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <h1 className="text-4xl font-bold">GKB</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li>Spectacles</li>
          <li>Contacts</li>
          <li>Accessories</li>
          <li>Brands</li>
          <li>About</li>
          <li className="text-orange-500">Sale</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}