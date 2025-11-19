'use client';

import { useState } from 'react';
import { Heart, Globe, ArrowLeft, Shield, FileText } from 'lucide-react';
import Link from 'next/link';
import { getTranslation, type Language } from '@/lib/i18n';

export default function PrivacyPage() {
  const [language, setLanguage] = useState<Language>('pt');
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');
  const t = getTranslation(language);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'nl', label: 'NL' },
    { code: 'fr', label: 'FR' },
  ];

  const privacyContent: Record<Language, any> = {
    pt: {
      title: 'Política de Privacidade',
      lastUpdate: 'Última atualização: Janeiro de 2024',
      sections: [
        {
          title: '1. Informações que Coletamos',
          content: 'O Cardio - AI coleta informações necessárias para fornecer nossos serviços de saúde cardiovascular, incluindo: dados de perfil (nome, email, idade), informações de saúde (medicamentos, refeições, rotina diária), e dados de uso do aplicativo para melhorar sua experiência.'
        },
        {
          title: '2. Como Usamos Suas Informações',
          content: 'Utilizamos seus dados para: fornecer lembretes personalizados de medicamentos, avaliar suas refeições com inteligência artificial, gerar relatórios de saúde personalizados, e melhorar continuamente nossos serviços.'
        },
        {
          title: '3. Proteção de Dados',
          content: 'Seus dados de saúde são criptografados e armazenados com segurança. Utilizamos protocolos de segurança de nível bancário para proteger suas informações pessoais e médicas. Nunca compartilhamos seus dados de saúde com terceiros sem seu consentimento explícito.'
        },
        {
          title: '4. Seus Direitos',
          content: 'Você tem direito a: acessar seus dados pessoais, solicitar correção de informações incorretas, solicitar exclusão de sua conta e dados, exportar seus dados em formato legível, e revogar consentimentos a qualquer momento.'
        },
        {
          title: '5. Cookies e Tecnologias Similares',
          content: 'Utilizamos cookies e tecnologias similares para melhorar sua experiência, lembrar suas preferências e analisar o uso do aplicativo. Você pode gerenciar suas preferências de cookies nas configurações do aplicativo.'
        },
        {
          title: '6. Contato',
          content: 'Para questões sobre privacidade, entre em contato através do email: privacy@cardio-ai.com'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdate: 'Last updated: January 2024',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'Cardio - AI collects information necessary to provide our cardiovascular health services, including: profile data (name, email, age), health information (medications, meals, daily routine), and app usage data to improve your experience.'
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use your data to: provide personalized medication reminders, evaluate your meals with artificial intelligence, generate personalized health reports, and continuously improve our services.'
        },
        {
          title: '3. Data Protection',
          content: 'Your health data is encrypted and securely stored. We use bank-level security protocols to protect your personal and medical information. We never share your health data with third parties without your explicit consent.'
        },
        {
          title: '4. Your Rights',
          content: 'You have the right to: access your personal data, request correction of incorrect information, request deletion of your account and data, export your data in a readable format, and revoke consents at any time.'
        },
        {
          title: '5. Cookies and Similar Technologies',
          content: 'We use cookies and similar technologies to improve your experience, remember your preferences, and analyze app usage. You can manage your cookie preferences in the app settings.'
        },
        {
          title: '6. Contact',
          content: 'For privacy questions, contact us at: privacy@cardio-ai.com'
        }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdate: 'Última actualización: Enero de 2024',
      sections: [
        {
          title: '1. Información que Recopilamos',
          content: 'Cardio - AI recopila información necesaria para proporcionar nuestros servicios de salud cardiovascular, incluyendo: datos de perfil (nombre, correo electrónico, edad), información de salud (medicamentos, comidas, rutina diaria) y datos de uso de la aplicación para mejorar su experiencia.'
        },
        {
          title: '2. Cómo Usamos Su Información',
          content: 'Utilizamos sus datos para: proporcionar recordatorios personalizados de medicamentos, evaluar sus comidas con inteligencia artificial, generar informes de salud personalizados y mejorar continuamente nuestros servicios.'
        },
        {
          title: '3. Protección de Datos',
          content: 'Sus datos de salud están encriptados y almacenados de forma segura. Utilizamos protocolos de seguridad de nivel bancario para proteger su información personal y médica. Nunca compartimos sus datos de salud con terceros sin su consentimiento explícito.'
        },
        {
          title: '4. Sus Derechos',
          content: 'Usted tiene derecho a: acceder a sus datos personales, solicitar corrección de información incorrecta, solicitar eliminación de su cuenta y datos, exportar sus datos en formato legible y revocar consentimientos en cualquier momento.'
        },
        {
          title: '5. Cookies y Tecnologías Similares',
          content: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia, recordar sus preferencias y analizar el uso de la aplicación. Puede gestionar sus preferencias de cookies en la configuración de la aplicación.'
        },
        {
          title: '6. Contacto',
          content: 'Para preguntas sobre privacidad, contáctenos en: privacy@cardio-ai.com'
        }
      ]
    },
    nl: {
      title: 'Privacybeleid',
      lastUpdate: 'Laatst bijgewerkt: Januari 2024',
      sections: [
        {
          title: '1. Informatie die We Verzamelen',
          content: 'Cardio - AI verzamelt informatie die nodig is om onze cardiovasculaire gezondheidsdiensten te leveren, waaronder: profielgegevens (naam, e-mail, leeftijd), gezondheidsinformatie (medicijnen, maaltijden, dagelijkse routine) en app-gebruiksgegevens om uw ervaring te verbeteren.'
        },
        {
          title: '2. Hoe We Uw Informatie Gebruiken',
          content: 'We gebruiken uw gegevens om: gepersonaliseerde medicijnherinneringen te bieden, uw maaltijden te evalueren met kunstmatige intelligentie, gepersonaliseerde gezondheidsrapporten te genereren en onze diensten voortdurend te verbeteren.'
        },
        {
          title: '3. Gegevensbescherming',
          content: 'Uw gezondheidsgegevens zijn versleuteld en veilig opgeslagen. We gebruiken beveiligingsprotocollen op bankniveau om uw persoonlijke en medische informatie te beschermen. We delen uw gezondheidsgegevens nooit met derden zonder uw expliciete toestemming.'
        },
        {
          title: '4. Uw Rechten',
          content: 'U heeft het recht om: toegang te krijgen tot uw persoonlijke gegevens, correctie van onjuiste informatie aan te vragen, verwijdering van uw account en gegevens aan te vragen, uw gegevens in een leesbaar formaat te exporteren en toestemmingen op elk moment in te trekken.'
        },
        {
          title: '5. Cookies en Vergelijkbare Technologieën',
          content: 'We gebruiken cookies en vergelijkbare technologieën om uw ervaring te verbeteren, uw voorkeuren te onthouden en app-gebruik te analyseren. U kunt uw cookievoorkeuren beheren in de app-instellingen.'
        },
        {
          title: '6. Contact',
          content: 'Voor privacyvragen kunt u contact met ons opnemen via: privacy@cardio-ai.com'
        }
      ]
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdate: 'Dernière mise à jour: Janvier 2024',
      sections: [
        {
          title: '1. Informations que Nous Collectons',
          content: 'Cardio - AI collecte les informations nécessaires pour fournir nos services de santé cardiovasculaire, notamment: données de profil (nom, email, âge), informations de santé (médicaments, repas, routine quotidienne) et données d\'utilisation de l\'application pour améliorer votre expérience.'
        },
        {
          title: '2. Comment Nous Utilisons Vos Informations',
          content: 'Nous utilisons vos données pour: fournir des rappels de médicaments personnalisés, évaluer vos repas avec l\'intelligence artificielle, générer des rapports de santé personnalisés et améliorer continuellement nos services.'
        },
        {
          title: '3. Protection des Données',
          content: 'Vos données de santé sont cryptées et stockées en toute sécurité. Nous utilisons des protocoles de sécurité de niveau bancaire pour protéger vos informations personnelles et médicales. Nous ne partageons jamais vos données de santé avec des tiers sans votre consentement explicite.'
        },
        {
          title: '4. Vos Droits',
          content: 'Vous avez le droit de: accéder à vos données personnelles, demander la correction d\'informations incorrectes, demander la suppression de votre compte et de vos données, exporter vos données dans un format lisible et révoquer les consentements à tout moment.'
        },
        {
          title: '5. Cookies et Technologies Similaires',
          content: 'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, mémoriser vos préférences et analyser l\'utilisation de l\'application. Vous pouvez gérer vos préférences de cookies dans les paramètres de l\'application.'
        },
        {
          title: '6. Contact',
          content: 'Pour les questions de confidentialité, contactez-nous à: privacy@cardio-ai.com'
        }
      ]
    }
  };

  const termsContent: Record<Language, any> = {
    pt: {
      title: 'Termos de Uso',
      lastUpdate: 'Última atualização: Janeiro de 2024',
      sections: [
        {
          title: '1. Aceitação dos Termos',
          content: 'Ao usar o Cardio - AI, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso aplicativo.'
        },
        {
          title: '2. Uso do Serviço',
          content: 'O Cardio - AI é uma ferramenta de auxílio à saúde cardiovascular. Não substitui consultas médicas profissionais. Sempre consulte seu médico antes de tomar decisões sobre sua saúde. Você é responsável pela precisão das informações fornecidas ao aplicativo.'
        },
        {
          title: '3. Conta de Usuário',
          content: 'Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta. Não compartilhe suas credenciais de acesso com terceiros.'
        },
        {
          title: '4. Propriedade Intelectual',
          content: 'Todo o conteúdo do Cardio - AI, incluindo textos, gráficos, logos, ícones e software, é propriedade da Cardio - AI e protegido por leis de direitos autorais. Você não pode copiar, modificar ou distribuir nosso conteúdo sem autorização.'
        },
        {
          title: '5. Limitação de Responsabilidade',
          content: 'O Cardio - AI é fornecido "como está". Não garantimos que o serviço será ininterrupto ou livre de erros. Não nos responsabilizamos por decisões de saúde tomadas com base nas informações do aplicativo. Sempre consulte profissionais de saúde qualificados.'
        },
        {
          title: '6. Modificações dos Termos',
          content: 'Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos você sobre mudanças significativas. O uso continuado do aplicativo após as modificações constitui aceitação dos novos termos.'
        },
        {
          title: '7. Rescisão',
          content: 'Podemos suspender ou encerrar sua conta se você violar estes termos. Você pode encerrar sua conta a qualquer momento através das configurações do aplicativo.'
        },
        {
          title: '8. Lei Aplicável',
          content: 'Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas nos tribunais competentes do Brasil.'
        }
      ]
    },
    en: {
      title: 'Terms of Use',
      lastUpdate: 'Last updated: January 2024',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By using Cardio - AI, you agree to these Terms of Use. If you do not agree with any part of these terms, you should not use our application.'
        },
        {
          title: '2. Use of Service',
          content: 'Cardio - AI is a cardiovascular health support tool. It does not replace professional medical consultations. Always consult your doctor before making health decisions. You are responsible for the accuracy of information provided to the application.'
        },
        {
          title: '3. User Account',
          content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account. Do not share your access credentials with third parties.'
        },
        {
          title: '4. Intellectual Property',
          content: 'All Cardio - AI content, including texts, graphics, logos, icons, and software, is owned by Cardio - AI and protected by copyright laws. You may not copy, modify, or distribute our content without authorization.'
        },
        {
          title: '5. Limitation of Liability',
          content: 'Cardio - AI is provided "as is". We do not guarantee that the service will be uninterrupted or error-free. We are not responsible for health decisions made based on app information. Always consult qualified health professionals.'
        },
        {
          title: '6. Modifications to Terms',
          content: 'We reserve the right to modify these terms at any time. We will notify you of significant changes. Continued use of the application after modifications constitutes acceptance of the new terms.'
        },
        {
          title: '7. Termination',
          content: 'We may suspend or terminate your account if you violate these terms. You may terminate your account at any time through the app settings.'
        },
        {
          title: '8. Applicable Law',
          content: 'These terms are governed by Brazilian law. Any disputes will be resolved in the competent courts of Brazil.'
        }
      ]
    },
    es: {
      title: 'Términos de Uso',
      lastUpdate: 'Última actualización: Enero de 2024',
      sections: [
        {
          title: '1. Aceptación de los Términos',
          content: 'Al usar Cardio - AI, usted acepta estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, no debe usar nuestra aplicación.'
        },
        {
          title: '2. Uso del Servicio',
          content: 'Cardio - AI es una herramienta de apoyo a la salud cardiovascular. No reemplaza las consultas médicas profesionales. Siempre consulte a su médico antes de tomar decisiones sobre su salud. Usted es responsable de la precisión de la información proporcionada a la aplicación.'
        },
        {
          title: '3. Cuenta de Usuario',
          content: 'Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Acepta notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta. No comparta sus credenciales de acceso con terceros.'
        },
        {
          title: '4. Propiedad Intelectual',
          content: 'Todo el contenido de Cardio - AI, incluidos textos, gráficos, logotipos, iconos y software, es propiedad de Cardio - AI y está protegido por leyes de derechos de autor. No puede copiar, modificar o distribuir nuestro contenido sin autorización.'
        },
        {
          title: '5. Limitación de Responsabilidad',
          content: 'Cardio - AI se proporciona "tal cual". No garantizamos que el servicio sea ininterrumpido o libre de errores. No somos responsables de las decisiones de salud tomadas en base a la información de la aplicación. Siempre consulte a profesionales de salud calificados.'
        },
        {
          title: '6. Modificaciones de los Términos',
          content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Le notificaremos sobre cambios significativos. El uso continuado de la aplicación después de las modificaciones constituye la aceptación de los nuevos términos.'
        },
        {
          title: '7. Rescisión',
          content: 'Podemos suspender o terminar su cuenta si viola estos términos. Puede terminar su cuenta en cualquier momento a través de la configuración de la aplicación.'
        },
        {
          title: '8. Ley Aplicable',
          content: 'Estos términos se rigen por las leyes brasileñas. Cualquier disputa se resolverá en los tribunales competentes de Brasil.'
        }
      ]
    },
    nl: {
      title: 'Gebruiksvoorwaarden',
      lastUpdate: 'Laatst bijgewerkt: Januari 2024',
      sections: [
        {
          title: '1. Acceptatie van de Voorwaarden',
          content: 'Door Cardio - AI te gebruiken, gaat u akkoord met deze Gebruiksvoorwaarden. Als u niet akkoord gaat met een deel van deze voorwaarden, mag u onze applicatie niet gebruiken.'
        },
        {
          title: '2. Gebruik van de Dienst',
          content: 'Cardio - AI is een hulpmiddel voor cardiovasculaire gezondheid. Het vervangt geen professionele medische consultaties. Raadpleeg altijd uw arts voordat u gezondheidsbeslissingen neemt. U bent verantwoordelijk voor de nauwkeurigheid van de informatie die aan de applicatie wordt verstrekt.'
        },
        {
          title: '3. Gebruikersaccount',
          content: 'U bent verantwoordelijk voor het handhaven van de vertrouwelijkheid van uw account en wachtwoord. U stemt ermee in ons onmiddellijk op de hoogte te stellen van ongeautoriseerd gebruik van uw account. Deel uw toegangsgegevens niet met derden.'
        },
        {
          title: '4. Intellectueel Eigendom',
          content: 'Alle Cardio - AI-inhoud, inclusief teksten, afbeeldingen, logo\'s, pictogrammen en software, is eigendom van Cardio - AI en beschermd door auteursrechtwetten. U mag onze inhoud niet kopiëren, wijzigen of distribueren zonder toestemming.'
        },
        {
          title: '5. Beperking van Aansprakelijkheid',
          content: 'Cardio - AI wordt geleverd "zoals het is". We garanderen niet dat de dienst ononderbroken of foutloos zal zijn. We zijn niet verantwoordelijk voor gezondheidsbeslissingen die zijn genomen op basis van app-informatie. Raadpleeg altijd gekwalificeerde gezondheidsprofessionals.'
        },
        {
          title: '6. Wijzigingen in de Voorwaarden',
          content: 'We behouden ons het recht voor om deze voorwaarden op elk moment te wijzigen. We zullen u op de hoogte stellen van belangrijke wijzigingen. Voortgezet gebruik van de applicatie na wijzigingen vormt acceptatie van de nieuwe voorwaarden.'
        },
        {
          title: '7. Beëindiging',
          content: 'We kunnen uw account opschorten of beëindigen als u deze voorwaarden schendt. U kunt uw account op elk moment beëindigen via de app-instellingen.'
        },
        {
          title: '8. Toepasselijk Recht',
          content: 'Deze voorwaarden worden beheerst door de Braziliaanse wetgeving. Eventuele geschillen worden opgelost in de bevoegde rechtbanken van Brazilië.'
        }
      ]
    },
    fr: {
      title: 'Conditions d\'Utilisation',
      lastUpdate: 'Dernière mise à jour: Janvier 2024',
      sections: [
        {
          title: '1. Acceptation des Conditions',
          content: 'En utilisant Cardio - AI, vous acceptez ces Conditions d\'Utilisation. Si vous n\'êtes pas d\'accord avec une partie de ces conditions, vous ne devez pas utiliser notre application.'
        },
        {
          title: '2. Utilisation du Service',
          content: 'Cardio - AI est un outil de soutien à la santé cardiovasculaire. Il ne remplace pas les consultations médicales professionnelles. Consultez toujours votre médecin avant de prendre des décisions concernant votre santé. Vous êtes responsable de l\'exactitude des informations fournies à l\'application.'
        },
        {
          title: '3. Compte Utilisateur',
          content: 'Vous êtes responsable du maintien de la confidentialité de votre compte et de votre mot de passe. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte. Ne partagez pas vos identifiants d\'accès avec des tiers.'
        },
        {
          title: '4. Propriété Intellectuelle',
          content: 'Tout le contenu de Cardio - AI, y compris les textes, graphiques, logos, icônes et logiciels, appartient à Cardio - AI et est protégé par les lois sur le droit d\'auteur. Vous ne pouvez pas copier, modifier ou distribuer notre contenu sans autorisation.'
        },
        {
          title: '5. Limitation de Responsabilité',
          content: 'Cardio - AI est fourni "tel quel". Nous ne garantissons pas que le service sera ininterrompu ou sans erreur. Nous ne sommes pas responsables des décisions de santé prises sur la base des informations de l\'application. Consultez toujours des professionnels de santé qualifiés.'
        },
        {
          title: '6. Modifications des Conditions',
          content: 'Nous nous réservons le droit de modifier ces conditions à tout moment. Nous vous informerons des changements importants. L\'utilisation continue de l\'application après les modifications constitue l\'acceptation des nouvelles conditions.'
        },
        {
          title: '7. Résiliation',
          content: 'Nous pouvons suspendre ou résilier votre compte si vous violez ces conditions. Vous pouvez résilier votre compte à tout moment via les paramètres de l\'application.'
        },
        {
          title: '8. Loi Applicable',
          content: 'Ces conditions sont régies par la loi brésilienne. Tout litige sera résolu devant les tribunaux compétents du Brésil.'
        }
      ]
    }
  };

  const currentContent = activeTab === 'privacy' ? privacyContent[language] : termsContent[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-rose-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-rose-600" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Cardio - AI
              </span>
            </div>
          </Link>
          
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

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-200'
              }`}
            >
              <Shield className="w-5 h-5" />
              {language === 'pt' && 'Política de Privacidade'}
              {language === 'en' && 'Privacy Policy'}
              {language === 'es' && 'Política de Privacidad'}
              {language === 'nl' && 'Privacybeleid'}
              {language === 'fr' && 'Politique de Confidentialité'}
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'terms'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-200'
              }`}
            >
              <FileText className="w-5 h-5" />
              {language === 'pt' && 'Termos de Uso'}
              {language === 'en' && 'Terms of Use'}
              {language === 'es' && 'Términos de Uso'}
              {language === 'nl' && 'Gebruiksvoorwaarden'}
              {language === 'fr' && 'Conditions d\'Utilisation'}
            </button>
          </div>

          {/* Document */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-rose-100">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            <p className="text-gray-500 mb-8">{currentContent.lastUpdate}</p>

            <div className="space-y-8">
              {currentContent.sections.map((section: any, index: number) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'pt' && 'Voltar para o Início'}
              {language === 'en' && 'Back to Home'}
              {language === 'es' && 'Volver al Inicio'}
              {language === 'nl' && 'Terug naar Home'}
              {language === 'fr' && 'Retour à l\'Accueil'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
