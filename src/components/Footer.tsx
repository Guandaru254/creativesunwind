export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 text-sm text-gray-400">
        <p className="max-w-xl">
          Creatives Unwind is a community-driven creative gathering rooted in
          music, culture, wellness and nature — based in Nairobi, Kenya.
        </p>

        <div className="mt-6 flex justify-between items-center">
          <span>© {new Date().getFullYear()} Creatives Unwind</span>
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}
