const testimonials = [
  {
    name: "John Doe",
    position: "Project Manager",
    text: "Saquir is a highly proficient developer who delivers quality work on time.",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Lead Designer",
    text: "Collaborating with Saquir on frontend projects has been fantastic.",
    avatar: "/images/avatar2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto py-16 px-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map(({ name, position, text, avatar }) => (
          <div key={name} className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-center gap-4">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="italic mb-2">&quot;{text}&quot;</p>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-400">{position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
