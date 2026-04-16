'use client';

import { useLang } from '@/hooks/useLang';

const teamMembers = [
  { name: 'Francisco Battan',     role: 'CEO',                       photo: '/founders/francisco-battan.png' },
  { name: 'Cesar Farhat',         role: 'CTO',                       photo: '/founders/cesar-farhat.png' },
  { name: 'Benjamín Arjona',      role: 'CCO',                       photo: '/founders/benjamin-arjona.png' },
  { name: 'Rocio Varas',          role: 'Accountant Consultant',     photo: '/empleados/rocio-varas.png' },
  { name: 'Franco Tarchini',       role: 'Business Development Representative', photo: '/empleados/franco-tarchini.png' },
  { name: 'José Cano',            role: 'Data Squad Leader',         photo: '/empleados/jose-cano.png' },
  { name: 'Iván Quipildor',       role: 'DevOPs',                    photo: '/empleados/ivan-quipildor.png' },
  { name: 'Paula Oyarzábal',      role: 'Administrative Accountant', photo: '/empleados/paula-oyarzabal.png' },
  { name: 'Leandro Ledesma',      role: 'Growth Marketer',           photo: '/empleados/leandro-ledesma.png' },
  { name: 'Sofía Varas',          role: 'Lawyer Consultant',         photo: '/empleados/sofia-varas.png' },
  { name: 'Facundo Loto Battan',  role: 'Data Analyst',              photo: '/empleados/facundo-battan.png' },
  { name: 'Nicolás Maldonado',    role: 'Python Developer',          photo: '/empleados/nicolas-maldonado.png' },
  { name: 'Gabriela González',    role: 'Python Developer',          photo: '/empleados/gabriela-gonzalez.png' },
  { name: 'Daniel Vélez Carrizo', role: 'Python Developer',          photo: '/empleados/daniel-velez-carrizo.png' },
  { name: 'Carlos Vivas',         role: 'Python Developer',          photo: '/empleados/carlos-vivas.png' },
  { name: 'Carlos Sánchez',       role: 'Python Developer',          photo: '/empleados/carlos-sanchez.png' },
  { name: 'Carlos Brizuela',      role: 'Python Developer',          photo: '/empleados/carlos-brizuela.png' },
  { name: 'Andrés Avido',         role: 'Python Developer',          photo: '/empleados/andres-avido.png' },
  { name: 'Miguel Fernandez',     role: 'Python Developer',          photo: '/empleados/miguel-fernandez.png' },
  { name: 'Emiliano Muratore',    role: 'Python Developer & Automation', photo: '/empleados/emiliano-muratore.png' },
  { name: 'Angélica Meca Molina', role: 'Front-End Developer & Graphic Designer', photo: '/empleados/angelica-meca-molina.png' },
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
                className="flex flex-col items-center justify-center text-center bg-[#13193c] rounded-[2rem] p-8 pb-10 border border-white/5 shadow-2xl transition hover:-translate-y-1 duration-300"
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
