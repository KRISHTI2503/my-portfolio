import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-surface py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Krishti Patel. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Krishti Patel
          </p>
        </div>
      </div>
    </footer>
  )
}
