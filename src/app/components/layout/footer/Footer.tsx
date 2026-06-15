import FooterColumn from "./FooterColumn";
import { footerColumns } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-[1600px] mx-auto px-12 py-20">

        {/* Top Links */}
        <div className="grid grid-cols-5 gap-20">

          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}

        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-20 mt-24">

          <div>
            <p className="text-gray-400">
              Call us (toll free)
            </p>

            <h3 className="text-2xl mt-4">
              1800 419 1990
            </h3>
          </div>

          <span className="text-gray-500 text-3xl">
            or
          </span>

          <div>
            <p className="text-gray-400">
              Whatsapp chat
            </p>

            <h3 className="text-2xl mt-4">
              8961599800
            </h3>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-16" />

        {/* Bottom */}
        <div className="flex justify-between items-center">

          <p className="text-gray-400">
            Copyright © 2026 GKB Opticals Pvt Ltd.
          </p>

          <div className="flex gap-10">
            <button>Privacy policy</button>
            <button>Terms of service</button>
          </div>

        </div>

      </div>

    </footer>
  );
}