import Link from 'next/link'
import { BookOpen, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { name: 'Catalogue', href: '/catalogue' },
      { name: 'Quiz', href: '/quiz' },
      { name: 'Progression', href: '/progression' },
      { name: 'Statistiques', href: '/statistiques' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '/help' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Support technique', href: '/support' },
    ],
    legal: [
      { name: 'Conditions d\'utilisation', href: '/terms' },
      { name: 'Politique de confidentialité', href: '/privacy' },
      { name: 'Mentions légales', href: '/legal' },
      { name: 'Cookies', href: '/cookies' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'Instagram', href: '#', icon: Instagram },
      { name: 'YouTube', href: '#', icon: Youtube },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">GrowSavoir</span>
                <span className="text-sm text-gray-400 -mt-1">Éducation & Savoir</span>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Plateforme éducative moderne pour l&apos;apprentissage des langues, 
              des sciences et des sciences islamiques. Une approche progressive 
              et adaptée à tous les âges.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contact@growsavoir.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span>123 Avenue de l&apos;Éducation<br />75001 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Plateforme</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Légal</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="text-sm font-semibold mb-3 text-white">Suivez-nous</h4>
            <div className="flex space-x-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} GrowSavoir. Tous droits réservés.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Fait avec ❤️ pour l&apos;éducation</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Globe className="h-4 w-4" />
              <span>Français</span>
              <span>•</span>
              <span>English</span>
              <span>•</span>
              <span>العربية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
