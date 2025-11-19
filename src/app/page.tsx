'use client';

import { useState } from 'react';
import { Heart, Pill, UtensilsCrossed, Bell, Calendar, Download, Globe, Smartphone, User, CheckCircle2, Apple, ClipboardList } from 'lucide-react';
import { getTranslation, type Language } from '@/lib/i18n';
import Link from 'next/link';

export default function Home() {
  const [language, setLanguage] = useState<Language>('pt');
  const t = getTranslation(language);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'nl', label: 'NL' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header com seletor de idioma */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-rose-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Cardio - AI
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-rose-600" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  language === lang.code
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-rose-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full">
                <Heart className="w-4 h-4 text-rose-600" />
                <span className="text-sm font-medium text-rose-700">
                  Powered by AI
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                  {t.hero_title}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.hero_description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#download"
                  className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t.cta_download}
                </a>
                
                <a
                  href="#features"
                  className="px-8 py-4 bg-white text-rose-600 rounded-2xl font-semibold text-lg border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  {t.cta_learn_more}
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-medium">Rotina de Hoje</span>
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-white/20 rounded-xl p-4">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                        <Pill className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Medicamento</div>
                        <div className="text-white/70 text-sm">08:00 - Tomado ✓</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/20 rounded-xl p-4">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                        <UtensilsCrossed className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Refeição</div>
                        <div className="text-white/70 text-sm">12:30 - Avaliada ✓</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white/20 rounded-xl p-4">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Check-up</div>
                        <div className="text-white/70 text-sm">18:00 - Pendente</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/80 text-sm pt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>2 de 3 tarefas completas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {t.features_title}
            </h2>
            <p className="text-xl text-gray-600">{t.features_subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: t.feature1_title, desc: t.feature1_desc, color: 'from-rose-500 to-pink-600' },
              { icon: Pill, title: t.feature2_title, desc: t.feature2_desc, color: 'from-pink-500 to-rose-600' },
              { icon: UtensilsCrossed, title: t.feature3_title, desc: t.feature3_desc, color: 'from-rose-600 to-pink-500' },
              { icon: Heart, title: t.feature4_title, desc: t.feature4_desc, color: 'from-pink-600 to-rose-500' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-rose-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {t.how_title}
            </h2>
            <p className="text-xl text-gray-600">{t.how_subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Download, title: t.step1_title, desc: t.step1_desc, number: '01' },
              { icon: User, title: t.step2_title, desc: t.step2_desc, number: '02' },
              { icon: Heart, title: t.step3_title, desc: t.step3_desc, number: '03' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full blur-xl opacity-30"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center border-4 border-rose-100 font-bold text-rose-600">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-rose-300 to-pink-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.cta_title}
          </h2>
          <p className="text-xl text-white/90">{t.cta_subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* App Store Button */}
            <div className="relative group">
              <button className="relative px-8 py-5 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[280px]">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Apple className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{t.coming_soon}</div>
                  <div className="text-lg font-bold">{t.download_ios}</div>
                </div>
              </button>
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
                {t.coming_soon}
              </div>
            </div>
            
            {/* Play Store Button */}
            <div className="relative group">
              <button className="relative px-8 py-5 bg-white text-gray-900 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[280px]">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{t.coming_soon}</div>
                  <div className="text-lg font-bold">{t.download_android}</div>
                </div>
              </button>
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg">
                {t.coming_soon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Cardio - AI</div>
                <div className="text-sm text-gray-400">{t.footer_tagline}</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Cardio - AI. {t.footer_rights}
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'pt' && 'Privacidade & Termos'}
                  {language === 'en' && 'Privacy & Terms'}
                  {language === 'es' && 'Privacidad y Términos'}
                  {language === 'nl' && 'Privacy & Voorwaarden'}
                  {language === 'fr' && 'Confidentialité & Conditions'}
                </Link>
                <a href="https://github.com/QRACacheado/cardi-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://cardi-ai-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Vercel
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
