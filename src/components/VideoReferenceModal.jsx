import React from 'react';
import { X, Youtube, ExternalLink, FileText } from 'lucide-react';

const DRIVE_DOCX_URL = 'https://docs.google.com/document/d/1b7eNMyO5pENDptTPzfeo3wBvgB3_d09c/edit?usp=sharing&ouid=102220368577968794134&rtpof=true&sd=true';

export const VideoReferenceModal = ({ isOpen, onClose, lang = 'es' }) => {
  if (!isOpen) return null;
  const isES = lang === 'es';

  const videos = [
    {
      id: 'RT9laVHZZQo',
      title: "1. NASA Goddard: How NASA's Parker Solar Probe Will Survive the Sun",
      url: 'https://www.youtube.com/watch?v=RT9laVHZZQo',
      embed: 'https://www.youtube.com/embed/RT9laVHZZQo',
      badge: 'video_tc_task.txt (Guion Principal)',
      desc: isES
        ? 'Fuente primaria del guion traducido con el Narrador de la NASA y la Dra. Betsy Congdon (Ingeniera Principal del TPS en JHU/APL). Explica el escudo Carbono-Carbono + espuma 97% aire, los sensores autónomos de limbo solar, la refrigeración activa con agua y la diferencia entre calor y temperatura en la corona a 1.000.000 °F.'
        : 'Primary source of the translated script featuring the NASA Narrator and Dr. Betsy Congdon (TPS Lead Engineer at JHU/APL). Explains the C-C + 97% air foam shield, solar limb sensors, active water cooling, and heat vs. temperature in the 1,000,000 °F corona.'
    },
    {
      id: 'pOZhPz92Dic',
      title: '2. Real Engineering: The Insane Engineering of the Parker Solar Probe',
      url: 'https://www.youtube.com/watch?v=pOZhPz92Dic',
      embed: 'https://www.youtube.com/embed/pOZhPz92Dic',
      badge: 'VIDEO_COMPLEMENTARY_PARKER_PROBE.TXT',
      desc: isES
        ? 'Fuente complementaria: presupuesto Δv de 21.4 km/s mediante transferencia de Hohmann y 7 asistencias en Venus, malla cuadricular de Tungsteno de 100 µm grabada al ácido en la Copa de Faraday (SPC), cables coaxiales de Niobio C-103 aislados con Zafiro monocristalino y celosía de Titanio de 22.7 kg.'
        : 'Complementary engineering reference: 21.4 km/s Δv budget via Hohmann transfer and 7 Venus gravity assists, 100-µm acid-etched Tungsten grid in the Solar Probe Cup (SPC), Sapphire-insulated Niobium C-103 coaxial cabling, and the 22.7 kg Titanium truss.'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-space-950 border border-solar-gold/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-space-800 bg-space-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400">
              <Youtube className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-slate-100">
                {isES ? 'Videos de Referencia YouTube & Informe Técnico (.DOCX)' : 'YouTube Reference Videos & Technical Report (.DOCX)'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                NASA Goddard Space Flight Center & Real Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DRIVE_DOCX_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/50 text-emerald-200 text-xs font-mono font-bold transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{isES ? 'Abrir Informe .DOCX (Google Drive)' : 'Open .DOCX Report (Google Drive)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-space-800 hover:bg-red-900/70 border border-space-700 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="rounded-2xl bg-space-900/80 border border-space-700 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full bg-black relative">
                  <iframe
                    src={v.embed}
                    title={v.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-solar-flare/20 text-solar-gold border border-solar-flare/40">
                    {v.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-space-800 bg-space-950/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">YouTube ID: {v.id}</span>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-solar-cyan hover:underline"
                >
                  <span>{isES ? 'Abrir en YouTube' : 'Open on YouTube'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
