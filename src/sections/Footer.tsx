export default function Footer() {
  return (
    <footer className="bg-[#0c1110] border-t border-[#23312c] text-[#93a19b] py-8 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Saquir — Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
