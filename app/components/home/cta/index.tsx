import {
  Phone,
  Mail,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contato"
      className="bg-violet-800 text-white py-24"
    >
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Vamos conversar?
        </h2>

        <p className="mt-6 text-lg text-violet-100">
          Entre em contato para solicitar um orçamento ou tirar dúvidas sobre
          os serviços.
        </p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <a
            href="https://wa.me/555484259545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#27ba5e] hover:bg-[#25a956] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1"
          >
            <Phone size={18} />
            WhatsApp
          </a>

          <a
            href="mailto:marianabertuol04@gmail.com"
            className="flex items-center gap-2 rounded-xl bg-[#EA4335] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#d33426]"
          >
            <Mail size={18} />
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
};