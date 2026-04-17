'use client';

import { useLang } from '@/hooks/useLang';

const teamMembers = [
  { name: 'Francisco Battan',     role: 'CEO',                       photo: '/founders/francisco-battan.png',        linkedin: 'https://www.linkedin.com/in/franciscobattan-autoscraping/' },
  { name: 'Cesar Farhat',         role: 'CTO',                       photo: '/founders/cesar-farhat.png',            linkedin: 'https://www.linkedin.com/in/cesar-farhat/' },
  { name: 'Benjamín Arjona',      role: 'CCO',                       photo: '/founders/benjamin-arjona.png',         linkedin: 'https://www.linkedin.com/in/benjaminarjona/' },
  { name: 'Rocio Varas',          role: 'Accountant Consultant',     photo: '/empleados/rocio-varas.png',            linkedin: 'https://www.linkedin.com/in/rocio-varas-nieva/' },
  { name: 'Franco Tarchini',      role: 'Business Development Representative', photo: '/empleados/franco-tarchini.png', linkedin: 'https://www.linkedin.com/in/francotarchinic/' },
  { name: 'José Cano',            role: 'Data Squad Leader',         photo: '/empleados/jose-cano.png',              linkedin: 'https://www.linkedin.com/in/jose-manuel-cano/es/' },
  { name: 'Iván Quipildor',       role: 'DevOPs',                    photo: '/empleados/ivan-quipildor.png',         linkedin: 'https://www.linkedin.com/in/ivan-quipildor/es/' },
  { name: 'Paula Oyarzábal',      role: 'Administrative Accountant', photo: '/empleados/paula-oyarzabal.png',        linkedin: 'https://www.linkedin.com/in/paula-oyarz%C3%A1bal-013b2515b/' },
  { name: 'Leandro Ledesma',      role: 'Growth Marketer',           photo: '/empleados/leandro-ledesma.png',        linkedin: 'https://www.linkedin.com/in/leandro-ledesma-growth/' },
  { name: 'Sofía Varas',          role: 'Lawyer Consultant',         photo: '/empleados/sofia-varas.png',            linkedin: 'https://www.linkedin.com/in/sofia-antonella-varas-nieva-5084822b9/' },
  { name: 'Facundo Loto Battan',  role: 'Data Analyst',              photo: '/empleados/facundo-battan.png',         linkedin: 'https://www.linkedin.com/in/facundolotobattan/' },
  { name: 'Nicolás Maldonado',    role: 'Python Developer',          photo: '/empleados/nicolas-maldonado.png',      linkedin: 'https://www.linkedin.com/in/maldonado-nicolas/' },
  { name: 'Gabriela González',    role: 'Python Developer',          photo: '/empleados/gabriela-gonzalez.png',      linkedin: 'https://www.linkedin.com/in/gonzalezgbr/' },
  { name: 'Daniel Vélez Carrizo', role: 'Python Developer',          photo: '/empleados/daniel-velez-carrizo.png',   linkedin: 'https://www.linkedin.com/in/daniel-ivan-velez-carrizo/' },
  { name: 'Carlos Vivas',         role: 'Python Developer',          photo: '/empleados/carlos-vivas.png',           linkedin: 'https://www.linkedin.com/in/vivascarlos/es/' },
  { name: 'Carlos Sánchez',       role: 'Python Developer',          photo: '/empleados/carlos-sanchez.png',         linkedin: 'https://www.linkedin.com/in/carlos-sanchez-a04ba1231/' },
  { name: 'Carlos Brizuela',      role: 'Python Developer',          photo: '/empleados/carlos-brizuela.png',        linkedin: 'https://www.linkedin.com/in/carlos-a-brizuela/' },
  { name: 'Andrés Avido',         role: 'Python Developer',          photo: '/empleados/andres-avido.png',           linkedin: 'https://www.linkedin.com/in/andres-avido-04861720a/' },
  { name: 'Miguel Fernandez',     role: 'Python Developer',          photo: '/empleados/miguel-fernandez.png',       linkedin: 'https://www.linkedin.com/in/miguel-agustin-fernandez-aa1596248/' },
  { name: 'Emiliano Muratore',    role: 'Python Developer & Automation', photo: '/empleados/emiliano-muratore.png', linkedin: 'https://www.linkedin.com/in/emiliano-muratore-7ba78329b/es/' },
  { name: 'Angélica Meca Molina', role: 'Front-End Developer & Graphic Designer', photo: '/empleados/angelica-meca-molina.png', linkedin: 'https://www.linkedin.com/in/angelica-yasmin-meca-molina-17a565253/' },
];

export default function TeamSection() {
  const lang = useLang();
  const isEn = lang === 'en';

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
                {isEn ? 'Meet the squad' : 'Conoce al squad'}
              </span>
            </div>
          </div>

          <h2
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            {isEn ? 'Our greatest asset' : 'Nuestro mayor activo'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => {
            const nameParts = member.name.split(' ');
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-[#13193c] rounded-[2rem] p-8 pb-10 border border-white/5 shadow-2xl transition hover:-translate-y-1 duration-300"
              >
                {/* Gradient Ring + Photo */}
                <div className="w-[180px] h-[180px] p-[3px] rounded-full bg-gradient-to-br from-[#4f46e5] via-[#a855f7] to-[#d946ef] mb-6 shadow-xl">
                  {/* Dark inner bg so transparent photo areas don't bleed the gradient */}
                  <div className="w-full h-full rounded-full bg-[#13193c] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                      }}
                    />
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
                <p className="text-[#e9d5ff] font-bold text-[0.95rem] mb-5">
                  {member.role}
                </p>

                {/* LinkedIn Button */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 'auto' }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[0.8rem] font-semibold transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'rgba(10, 102, 194, 0.18)',
                      border: '1px solid rgba(10, 102, 194, 0.45)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10, 102, 194, 0.35)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(10, 102, 194, 0.18)';
                    }}
                  >
                    {/* LinkedIn SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      style={{ color: '#60a5fa' }}
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
