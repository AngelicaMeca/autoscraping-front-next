'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersRound, Beaker, Check, ArrowRight, MessageSquare, User, UserPlus, UserCheck, UserCog, Users, Loader2 } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactCTA from '@/components/ContactCTA';
import { useLang } from '@/hooks/useLang';

type ProductType = 'datasquad' | 'datafactory' | null;
  
const profiles = [
  'Data Engineer', 'RPA Developer', 'DataOps Engineer', 'Data Analyst',
  'Data Scientist', 'ETL Developer', 'BI Developer', 'Machine Learning Engineer',
  'Data Visualization Specialist', 'Compliance Specialist', 'Data Security Specialist', 'Web Scraping Specialist',
  'Database Administrator', 'Data Quality Analyst', 'Data Entry Specialist'
];

const subProducts = [
  { id: 'automation', name: 'Automation', icon: '🤖' },
  { id: 'daas', name: 'Data as a Service', icon: '☁️' },
  { id: 'datadock', name: 'DataDock', icon: '◷' } 
];

const seniorities = [
  { id: 'junior', label: 'JUNIOR', icon: User },
  { id: 'semi-senior', label: 'SEMI SENIOR', icon: UserPlus },
  { id: 'senior', label: 'SENIOR', icon: UserCheck },
  { id: 'tech-leader', label: 'TECH LEADER', icon: UserCog },
  { id: 'lead-developer', label: 'LEAD DEVELOPER', icon: Users }
];

const languages = ['ENGLISH', 'SPANISH', 'PORTUGUESE'];

const languageLevels = [
  'A1 - A2 (BEGINNER / ELEMENTARY)',
  'B1 (INTERMEDIATE)',
  'B2 (UPPER INTERMEDIATE)',
  'C1 (PROFESSIONAL COMPETENCE)',
  'C2 (PROFICIENT)',
  'NATIVE'
];

export default function BookAMeeting() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1 States
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(null);
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
  const [selectedSubProduct, setSelectedSubProduct] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const [selectedSeniorities, setSelectedSeniorities] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedLangLevels, setSelectedLangLevels] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Step 2 States
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleArrayItem = (item: string, stateSetter: React.Dispatch<React.SetStateAction<string[]>>) => {
    stateSetter(prev => 
      prev.includes(item) 
        ? prev.filter(p => p !== item)
        : [...prev, item]
    );
  };

  const handleSeniorityToggle = (id: string) => {
    setSelectedSeniorities(prev => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        // Remove from selected and clear quantity
        const newQuantities = { ...quantities };
        delete newQuantities[id];
        setQuantities(newQuantities);
        return prev.filter(p => p !== id);
      } else {
        // Add to selected and init quantity to 1
        setQuantities(q => ({ ...q, [id]: 1 }));
        return [...prev, id];
      }
    });
  };

  const isStep1Valid = () => {
    if (!selectedProduct) return false;
    if (selectedProduct === 'datasquad') {
      return selectedProfiles.length > 0 && selectedSeniorities.length > 0 && selectedLanguages.length > 0 && selectedLangLevels.length > 0;
    }
    if (selectedProduct === 'datafactory') {
      return selectedSubProduct !== null;
    }
    return false;
  };

  const showFinalStep = 
    (selectedProduct === 'datasquad' && selectedLangLevels.length > 0) ||
    (selectedProduct === 'datafactory' && selectedSubProduct !== null);

  const handleNextStep = () => {
    if (isStep1Valid()) setCurrentStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/asana', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product: selectedProduct,
          profiles: selectedProfiles,
          subProduct: selectedSubProduct,
          seniorities: selectedSeniorities,
          languages: selectedLanguages,
          languageLevels: selectedLangLevels,
          quantities,
          additionalInfo,
          contact: formData
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setCurrentStep(3);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(isEn ? 'There was an error submitting the form. Please try again.' : 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-[#1a1247] via-[#2d1b69] to-[#1a1247] relative overflow-hidden font-sans">
        {/* Decorative dots from Data Factory style */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-80 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-40 pb-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-white">{isEn ? 'Your Data Solution ' : 'Tu solución de datos '}</span>
              <span className="bg-gradient-to-r from-[#60A5FA] via-[#7B92FF] to-[#9D7EFF] bg-clip-text text-transparent">
                {isEn ? 'Awaits' : 'te espera'}
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-2xl rounded-3xl p-8 md:p-12 border border-white/10 relative"
          >
            {/* Progress Bar */}
            {currentStep < 3 && (
              <>
                <div className="flex items-center justify-center mb-12 w-full max-w-sm mx-auto relative z-20">
                  <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/10 -z-10 -translate-y-1/2 rounded-full"></div>
                  <div className={`absolute top-1/2 left-0 h-[3px] bg-purple-500 -z-10 -translate-y-1/2 rounded-full transition-all duration-700 ease-in-out ${currentStep === 2 ? 'w-full' : 'w-0'}`}></div>

                  <div className="flex justify-between w-full">
                    <div className="flex flex-col items-center justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-500
                        ${currentStep >= 1 ? 'bg-purple-600 text-white shadow-purple-500/30 ring-4 ring-purple-500/20' : 'bg-[#111827] text-gray-500 border border-white/10'}`}>
                        1
                      </div>
                      <span className={`absolute -bottom-6 text-[10px] uppercase tracking-wider font-bold transition-all duration-500 ${currentStep >= 1 ? 'text-purple-400' : 'text-gray-500'}`}>
                        {isEn ? 'Requirements' : 'Requisitos'}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-500
                        ${currentStep >= 2 ? 'bg-purple-600 text-white shadow-purple-500/30 ring-4 ring-purple-500/20' : 'bg-[#111827] text-gray-400 border border-white/10'}`}>
                        2
                      </div>
                      <span className={`absolute -bottom-6 text-[10px] uppercase tracking-wider font-bold transition-all duration-500 ${currentStep >= 2 ? 'text-purple-400' : 'text-gray-500'}`}>
                        {isEn ? 'Details' : 'Detalles'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 mb-8"></div>
              </>
            )}

            {/* Step 1: Requirements Flow */}
            {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{isEn ? 'Send us a message' : 'Envíanos un mensaje'}</h2>
                <p className="text-gray-300 text-sm md:text-base">
                  {isEn ? 'Choose between hiring a profile in Contractor mode or Data Factory' : 'Elige entre contratar un perfil en modo Contractor o Data Factory'}
                </p>
              </div>

              <div className="space-y-10">
                
                {/* Product Selection */}
                <div>
                  <label className="block text-white font-bold text-sm mb-4">{isEn ? 'Choose the Product' : 'Elige el Producto'} <span className="text-purple-400">*</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                    
                    {/* DataSquad Option */}
                    <div 
                      onClick={() => { setSelectedProduct('datasquad'); setSelectedSubProduct(null); }}
                      className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-8
                        ${selectedProduct === 'datasquad' 
                          ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
                          : 'border-white/10 hover:border-purple-500/30 bg-white/5'}`}
                    >
                      {selectedProduct === 'datasquad' && (
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                      <UsersRound className="w-12 h-12 text-white mb-4" />
                      <span className="text-white font-bold tracking-wider uppercase text-sm">Data Squad</span>
                    </div>

                    {/* Data Factory Option */}
                    <div 
                      onClick={() => { setSelectedProduct('datafactory'); setSelectedProfiles([]); }}
                      className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-8
                        ${selectedProduct === 'datafactory' 
                          ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
                          : 'border-white/10 hover:border-purple-500/30 bg-white/5'}`}
                    >
                      {selectedProduct === 'datafactory' && (
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                      <Beaker className="w-12 h-12 text-white mb-4" />
                      <span className="text-white font-bold tracking-wider uppercase text-sm">Data Factory</span>
                    </div>

                  </div>
                </div>

                {/* Conditional Sections with Framer Motion */}
                <AnimatePresence mode="wait">
                  
                  {/* DataSquad Full Flow */}
                  {selectedProduct === 'datasquad' && (
                    <motion.div 
                      key="datasquad-section"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-4">
                        <p className="text-gray-300 text-sm mb-6 text-center">{isEn ? 'Here you can choose the professional profiles you need' : 'Aquí puedes elegir los perfiles profesionales que necesitas'}</p>
                        <label className="block text-white font-bold text-sm mb-4">{isEn ? 'AUTOScraping Profiles' : 'Perfiles AUTOScraping'} <span className="text-purple-400">*</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {profiles.map((profile) => {
                            const isSelected = selectedProfiles.includes(profile);
                            return (
                              <button
                                type="button"
                                key={profile}
                                onClick={() => toggleArrayItem(profile, setSelectedProfiles)}
                                className={`flex text-left items-start p-3 rounded-xl border transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-purple-500/20 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'}`}
                              >
                                <div className={`mt-0.5 mr-3 w-4 h-4 rounded-md border flex-shrink-0 flex items-center justify-center transition-colors
                                  ${isSelected ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}
                                >
                                  {isSelected && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <span className="text-xs font-bold tracking-wide uppercase leading-tight">{profile.replace(' ', ' ')}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Seniority */}
                      <AnimatePresence>
                        {selectedProfiles.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pt-6 overflow-hidden"
                          >
                            <p className="text-gray-300 text-sm mb-6 text-center">{isEn ? "Now you can select the professional's level of seniority" : 'Ahora puedes seleccionar el nivel de seniority del profesional'}</p>
                            <label className="block text-white font-bold text-sm mb-4">{isEn ? 'Seniority' : 'Seniority'} <span className="text-purple-400">*</span></label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                              {seniorities.map((seniority) => {
                                const isSelected = selectedSeniorities.includes(seniority.id);
                                const IconComponent = seniority.icon;
                                return (
                                  <button
                                    type="button"
                                    key={seniority.id}
                                    onClick={() => handleSeniorityToggle(seniority.id)}
                                    className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300
                                      ${isSelected 
                                        ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                                        : 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10'}`}
                                  >
                                    <div className={`absolute top-2 left-2 w-4 h-4 rounded-md border flex items-center justify-center transition-colors
                                      ${isSelected ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}
                                    >
                                      {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <IconComponent className={`w-8 h-8 mb-3 ${isSelected ? 'text-purple-400' : 'text-gray-400'}`} />
                                    <span className="text-white text-[10px] font-bold tracking-wider uppercase text-center leading-tight">{seniority.label}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Language */}
                      <AnimatePresence>
                        {selectedSeniorities.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pt-8 overflow-hidden"
                          >
                            <p className="text-gray-300 text-sm mb-6 text-center">{isEn ? "Select the professional's language" : 'Selecciona el idioma del profesional'}</p>
                            <label className="block text-white font-bold text-sm mb-4">{isEn ? 'Language' : 'Idioma'} <span className="text-purple-400">*</span></label>
                            <div className="flex flex-wrap gap-3">
                              {languages.map((lang) => {
                                const isSelected = selectedLanguages.includes(lang);
                                return (
                                  <button
                                    type="button"
                                    key={lang}
                                    onClick={() => toggleArrayItem(lang, setSelectedLanguages)}
                                    className={`flex text-left items-center p-3 rounded-xl border transition-all duration-300
                                      ${isSelected 
                                        ? 'bg-purple-500/20 border-purple-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]' 
                                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'}`}
                                  >
                                    <div className={`mr-3 w-4 h-4 rounded-md border flex-shrink-0 flex items-center justify-center transition-colors
                                      ${isSelected ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}
                                    >
                                      {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="text-xs font-bold tracking-wide uppercase">{lang}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Language Levels */}
                      <AnimatePresence>
                        {selectedLanguages.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pt-8 overflow-hidden"
                          >
                            <label className="block text-white font-bold text-sm mb-4">{isEn ? 'Language level' : 'Nivel de idioma'} <span className="text-purple-400">*</span></label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {languageLevels.map((level) => {
                                const isSelected = selectedLangLevels.includes(level);
                                return (
                                  <button
                                    type="button"
                                    key={level}
                                    onClick={() => toggleArrayItem(level, setSelectedLangLevels)}
                                    className={`flex text-left items-center p-3 rounded-xl border transition-all duration-300
                                      ${isSelected 
                                        ? 'bg-purple-500/20 border-purple-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]' 
                                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'}`}
                                  >
                                    <div className={`mr-3 w-4 h-4 rounded-md border flex-shrink-0 flex items-center justify-center transition-colors
                                      ${isSelected ? 'bg-purple-500 border-purple-500' : 'border-gray-500'}`}
                                    >
                                      {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    <span className="text-[10px] font-bold tracking-wide uppercase leading-tight">{level}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Quantities */}
                      <AnimatePresence>
                        {selectedLangLevels.length > 0 && selectedSeniorities.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="pt-8 overflow-hidden"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {selectedSeniorities.map(seniorityId => {
                                const label = seniorities.find(s => s.id === seniorityId)?.label;
                                return (
                                  <div key={seniorityId}>
                                    <label className="block text-white font-bold text-xs mb-2 tracking-wider uppercase">
                                       {isEn ? `¿HOW MANY ${label}S DO YOU NEED?` : `¿CUÁNTOS ${label}S NECESITAS?`} <span className="text-purple-400">*</span>
                                    </label>
                                    <input 
                                      type="number" 
                                      min="1" 
                                      value={quantities[seniorityId] || ''}
                                      onChange={(e) => setQuantities({...quantities, [seniorityId]: parseInt(e.target.value) || 1})}
                                      className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  )}

                  {/* DataFactory Flow */}
                  {selectedProduct === 'datafactory' && (
                    <motion.div 
                      key="datafactory-section"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4">
                        <label className="block text-white font-bold text-sm mb-4">Data Factory <span className="text-purple-400">*</span></label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {subProducts.map((subProd) => {
                            const isSelected = selectedSubProduct === subProd.id;
                            return (
                              <button
                                type="button"
                                key={subProd.id}
                                onClick={() => setSelectedSubProduct(subProd.id)}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300
                                  ${isSelected 
                                    ? 'bg-purple-500/10 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]' 
                                    : 'bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10'}`}
                              >
                                <span className="text-3xl mb-3">{subProd.icon}</span>
                                <span className="text-white text-xs font-bold tracking-wider uppercase text-center">{subProd.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Final Steps (Tell Us More + Go Next) */}
                <AnimatePresence>
                  {showFinalStep && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden space-y-8 pt-4"
                    >
                      <div>
                        <label className="block text-white font-bold text-sm tracking-wider uppercase mb-2">{isEn ? 'TELL US MORE' : 'CUÉNTANOS MÁS'}</label>
                        <p className="text-gray-400 text-xs mb-4">
                          {isEn ? 'Please provide additional details about your requirements or preferences. The more information you share, the better we can assist you in finding the right professional profile for your needs.' : 'Proporciona detalles adicionales sobre tus requisitos o preferencias. Cuanta más información compartas, mejor podremos ayudarte a encontrar el perfil profesional adecuado.'}
                        </p>
                        <textarea
                          value={additionalInfo}
                          onChange={(e) => setAdditionalInfo(e.target.value)}
                          rows={4}
                          className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                          placeholder={isEn ? 'Enter your message here...' : 'Escribe tu mensaje aquí...'}
                        />
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={() => handleNextStep()}
                          disabled={!isStep1Valid()}
                          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
                        >
                          <span>{isEn ? 'Next Step' : 'Siguiente'}</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
            )}

            {/* Step 2: Details Flow */}
            {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-8">
                <p className="text-gray-300 text-sm md:text-base">
                  {isEn ? 'Fill the fields with your personal data so we can contact you.' : 'Completa los campos con tus datos personales para que podamos contactarte.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-bold text-xs mb-2 tracking-wider uppercase">{isEn ? 'Full name' : 'Nombre completo'} <span className="text-purple-400">*</span></label>
                    <input required type="text" value={formData.fullName} onChange={e=>setFormData({...formData, fullName: e.target.value})} placeholder={isEn ? 'Name Example' : 'Nombre Ejemplo'} className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div>
                    <label className="block text-white font-bold text-xs mb-2 tracking-wider uppercase">{isEn ? 'Email' : 'Correo electrónico'} <span className="text-purple-400">*</span></label>
                    <input required type="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} placeholder="example@email.com" className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div>
                    <label className="block text-white font-bold text-xs mb-2 tracking-wider uppercase">{isEn ? 'Phone number' : 'Número de teléfono'}</label>
                    <input type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} placeholder="(123) 456-7890" className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50" />
                  </div>
                  <div>
                    <label className="block text-white font-bold text-xs mb-2 tracking-wider uppercase">{isEn ? 'Country' : 'País'} <span className="text-purple-400">*</span></label>
                    <select required value={formData.country} onChange={e=>setFormData({...formData, country: e.target.value})} className="w-full bg-[#111827]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none">
                      <option value="" disabled className="text-gray-500">{isEn ? 'Select a country' : 'Selecciona un país'}</option>
                      <option value="US" className="text-gray-900">United States</option>
                      <option value="UK" className="text-gray-900">United Kingdom</option>
                      <option value="ES" className="text-gray-900">Spain</option>
                      <option value="MX" className="text-gray-900">Mexico</option>
                      <option value="AR" className="text-gray-900">Argentina</option>
                      <option value="CO" className="text-gray-900">Colombia</option>
                      <option value="OTHER" className="text-gray-900">Other</option>
                    </select>
                  </div>
                </div>

                {/* Summary Border Box */}
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#111827]/30 mt-8 shadow-inner">
                  
                  {/* Product Header */}
                  <div className="flex flex-col items-center p-8 border-b border-white/10 relative">
                    <button type="button" onClick={() => setCurrentStep(1)} className="absolute right-6 top-6 text-xs text-purple-400 hover:text-purple-300 underline font-bold uppercase tracking-wider">
                      {isEn ? 'Edit' : 'Editar'}
                    </button>
                    {selectedProduct === 'datasquad' ? (
                      <>
                        <UsersRound className="w-10 h-10 text-white mb-3" />
                        <span className="text-white font-bold tracking-wider uppercase text-sm">Data Squad</span>
                      </>
                    ) : (
                      <>
                        <Beaker className="w-10 h-10 text-white mb-3" />
                        <span className="text-white font-bold tracking-wider uppercase text-sm">Data Factory</span>
                      </>
                    )}
                  </div>

                  {/* Summary Details - DataSquad */}
                  {selectedProduct === 'datasquad' && (
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? 'AUTOScraping Profiles' : 'Perfiles AUTOScraping'}</span>
                      <span className="text-white font-medium text-sm sm:text-right">{selectedProfiles.join(', ')}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? 'Seniority' : 'Nivel'}</span>
                       <div className="flex flex-wrap gap-4 sm:justify-end">
                          {selectedSeniorities.map(sid => {
                             const S = seniorities.find(s => s.id === sid);
                             if (!S) return null;
                             const Icon = S.icon;
                             return (
                               <div key={sid} className="flex flex-col items-center gap-1">
                                 <Icon className="w-6 h-6 text-purple-400"/>
                                 <span className="text-[10px] text-gray-300">{S.label}</span>
                               </div>
                             );
                          })}
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? 'Language' : 'Idioma'}</span>
                       <span className="text-white font-medium text-sm sm:text-right">{selectedLanguages.join(', ')}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? 'Language level' : 'Nivel de idioma'}</span>
                       <span className="text-white font-medium text-sm sm:text-right">{selectedLangLevels.join(', ')}</span>
                    </div>

                    {selectedSeniorities.map(sid => (
                      <div key={`qty-${sid}`} className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                         <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? `¿How many ${seniorities.find(s=>s.id===sid)?.label} do you need?` : `¿Cuántos ${seniorities.find(s=>s.id===sid)?.label} necesitas?`}</span>
                         <span className="text-white font-medium text-sm">{quantities[sid]}</span>
                      </div>
                    ))}
                  </div>
                  )}

                  {/* Summary Details - DataFactory */}
                  {selectedProduct === 'datafactory' && (
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 gap-2">
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{isEn ? 'Data Factory Option' : 'Opción Data Factory'}</span>
                       <span className="text-white font-medium text-sm sm:text-right">{subProducts.find(s=>s.id===selectedSubProduct)?.name}</span>
                    </div>
                  </div>
                  )}

                  {/* Tell us more Summary */}
                  {additionalInfo && (
                    <div className="flex flex-col p-5 bg-white/[0.02]">
                       <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{isEn ? 'Tell us more' : 'Cuéntanos más'}</span>
                       <span className="text-white font-medium text-sm whitespace-pre-wrap">{additionalInfo}</span>
                    </div>
                  )}

                </div>

                {/* Terms Agreement */}
                <div className="pt-2 flex items-center gap-3">
                  <input 
                     type="checkbox" 
                     id="terms"
                     required
                     checked={formData.agreed}
                     onChange={e => setFormData({...formData, agreed: e.target.checked})}
                     className="w-5 h-5 accent-purple-500 bg-[#111827]/50 border border-white/10 rounded cursor-pointer transition-all focus:ring-purple-500" 
                  />
                  <label htmlFor="terms" className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase cursor-pointer select-none">
                     {isEn ? 'I agree to the privacy policy and terms and conditions' : 'Acepto la política de privacidad y los términos y condiciones'} <span className="text-purple-400">*</span>
                  </label>
                </div>

                {/* Submissions buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setCurrentStep(1)} 
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
                  >
                     {isEn ? 'Previous' : 'Anterior'}
                  </button>
                  <button 
                    type="submit" 
                    disabled={!formData.agreed || !formData.fullName || !formData.email || !formData.country || isSubmitting} 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
                  >
                     {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <MessageSquare className="w-5 h-5" />}
                     <span>{isSubmitting ? (isEn ? 'Sending...' : 'Enviando...') : (isEn ? 'Send' : 'Enviar')}</span>
                  </button>
                </div>

              </form>
            </motion.div>
            )}

            {/* Step 3: Success Screen */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="text-center py-10 md:py-16"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-green-500/30 relative">
                  <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"></div>
                  <Check className="w-10 h-10 text-green-400 relative z-10" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  <span className="text-white">{isEn ? 'Message ' : 'Mensaje '}</span>
                  <span className="text-green-400">{isEn ? 'Sent!' : 'Enviado!'}</span>
                </h2>

                <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
                  {isEn
                    ? <>{`Thank you for reaching out, `}<span className="font-bold text-white">{formData.fullName.split(' ')[0]}</span>{`. Our team will review your requirements and get back to you shortly at `}<span className="font-medium text-white">{formData.email}</span>.</>
                    : <>{'Gracias por contactarnos, '}<span className="font-bold text-white">{formData.fullName.split(' ')[0]}</span>{'. Nuestro equipo revisará tus requisitos y te responderá a la brevedad en '}<span className="font-medium text-white">{formData.email}</span>.</>
                  }
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setSelectedProduct(null);
                    setSelectedProfiles([]);
                    setSelectedSubProduct(null);
                    setSelectedSeniorities([]);
                    setSelectedLanguages([]);
                    setSelectedLangLevels([]);
                    setQuantities({});
                    setAdditionalInfo('');
                    setFormData({ fullName: '', email: '', phone: '', country: '', agreed: false });
                  }}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-white/10 shadow-lg inline-flex items-center gap-2"
                >
                  {isEn ? 'Book Another Meeting' : 'Agendar otra reunión'}
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
