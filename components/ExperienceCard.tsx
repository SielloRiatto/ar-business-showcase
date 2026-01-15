import Link from 'next/link';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  language_code: string;
}

export default function ExperienceCard({
  title,
  description,
  icon,
  href,
  language_code
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-1">{description}</p>
      
      {/* QR Code for desktop */}
      <div className="hidden lg:flex items-center justify-center bg-gray-100 rounded h-24 w-24 mx-auto">
        <span className="text-gray-400 text-xs text-center">QR Code</span>
      </div>

      {/* Button for mobile */}
      <Link
        href={`/${language_code}${href}`}
        className="flex lg:hidden justify-center items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View
      </Link>
    </div>
  );
}
