const teamMembers = [
  { name: 'Francisco Battan', role: 'CEO' },
  { name: 'Cesar Farhat', role: 'CTO' },
  { name: 'Benjam\u00edn Arjona', role: 'CCO' },
  { name: 'Rocio Varas', role: 'Accountant Consultant' },
  { name: 'José Cano', role: 'Data Squad Leader' },
  { name: 'Iv\u00e1n Quipildor', role: 'DevOPs' },
  { name: 'Paula Oyarz\u00e1bal', role: 'Administrative Accountant' },
  { name: 'Leandro Ledesma', role: 'Growth Marketer' },
  { name: 'Sof\u00eda Varas', role: 'Lawyer Consultant' },
  { name: 'Ricardo Gil Gelid', role: 'Web Scraping Consultant' },
  { name: 'Nicol\u00e1s Rad\u00edn', role: 'Mobile Developer' },
  { name: 'Facundo Loto Battan', role: 'Data Analyst' },
  { name: 'Nicol\u00e1s Maldonado', role: 'Python Developer' },
  { name: 'Gabriela Gonz\u00e1lez', role: 'Python Developer' },
  { name: 'Daniel V\u00e9lez Carrizo', role: 'Python Developer' },
  { name: 'Carlos Vivas', role: 'Python Developer' },
  { name: 'Carlos S\u00e1nchez', role: 'Python Developer' },
  { name: 'Carlos Brizuela', role: 'Python Developer' },
  { name: 'Andr\u00e9s Avido', role: 'Python Developer' },
];

function getInitials(name: string) {
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}



export default function TeamSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0e2a 0%, #0d1236 40%, #101840 70%, #0a0e2a 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.12em]">
                Conoce al squad
              </span>
            </div>
          </div>

          <h2
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Nuestro mayor activo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const nameParts = member.name.split(' ');
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-[#13193c] rounded-[2rem] p-8 pb-10 border border-white/5 shadow-2xl transition hover:-translate-y-1 duration-300"
              >
                {/* Gradient Ring Wrapper */}
                <div className="w-[120px] h-[120px] p-[3px] rounded-full bg-gradient-to-br from-[#4f46e5] via-[#a855f7] to-[#d946ef] mb-6 shadow-xl">
                  {/* Inner Dark Circle */}
                  <div className="w-full h-full bg-[#171338] rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#9333ea] leading-none tracking-tighter">
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-white text-[1.35rem] font-bold leading-snug mb-3">
                  {nameParts.map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < nameParts.length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Role */}
                <p className="text-[#e9d5ff] font-bold text-[0.95rem]">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
