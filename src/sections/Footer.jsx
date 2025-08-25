import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>AGB</p>
        <p>|</p>
        <p>Datenschutz</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a 
            href={social.href} 
            key={index}
            className="hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2024 Nico Merkel. Alle Rechte vorbehalten.</p>
    </section>
  );
};

export default Footer;
