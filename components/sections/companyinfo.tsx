// import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa"

// export default function CompanyIntro() {
//   return (
//     <section className="mx-auto max-w-4xl px-6 py-20 text-center">
//       <h2 className="mb-6 text-3xl font-semibold text-white">Who We Are</h2>
//       <p className="mb-4 text-muted-foreground max-w-xl mx-auto">
//         Galaxium isn’t a faceless agency. We’re a lean, sharp, product-driven team that thrives on collaboration.
//         From seed-stage startups to scale-ups, we partner with people who want to build things that matter.
//       </p>
//       <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
//         Our roots are in design, engineering, and strategy — and we bring all three to every engagement.
//         We believe in transparency, velocity, and making bold ideas real — not just decks or promises.
//       </p>

//       <div className="flex justify-center gap-12 text-primary">
//         <div className="flex flex-col items-center space-y-2">
//           <FaUsers size={36} />
//           <p className="text-sm font-semibold">Collaborative</p>
//         </div>

//         <div className="flex flex-col items-center space-y-2">
//           <FaRocket size={36} />
//           <p className="text-sm font-semibold">Fast & Agile</p>
//         </div>

//         <div className="flex flex-col items-center space-y-2">
//           <FaLightbulb size={36} />
//           <p className="text-sm font-semibold">Innovative</p>
//         </div>
//       </div>
//     </section>
//   )
// }

import { FaUsers, FaRocket, FaLightbulb, FaCogs, FaShieldAlt } from "react-icons/fa";

export default function CompanyIntro() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      {/* Top section: Placeholder and Text side by side */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
    
    {/* Left: Text */}
    <div className="w-full md:w-1/2 text-white">
      <h2 className="mb-6 text-3xl font-semibold">Who We Are</h2>
      <p className="mb-4 text-muted-foreground">
        Galaxium isn’t a faceless agency. We’re a lean, sharp, product-driven team that thrives on collaboration.
        From seed-stage startups to scale-ups, we partner with people who want to build things that matter.
      </p>
      <p className="text-muted-foreground">
        Our roots are in design, engineering, and strategy — and we bring all three to every engagement.
        We believe in transparency, velocity, and making bold ideas real — not just decks or promises.
      </p>
    </div>

    {/* Right: Placeholder box */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-full h-64 md:h-80 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-lg">
        Placeholder Image
      </div>
    </div>
    
  </div>

      {/* Bottom section: Icons */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-primary text-center">
        <div className="flex flex-col items-center space-y-2">
          <FaUsers size={36} />
          <p className="text-sm font-semibold">Collaborative</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaRocket size={36} />
          <p className="text-sm font-semibold">Fast & Agile</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaLightbulb size={36} />
          <p className="text-sm font-semibold">Innovative</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaCogs size={36} />
          <p className="text-sm font-semibold">Technical Expertise</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaShieldAlt size={36} />
          <p className="text-sm font-semibold">Reliable & Secure</p>
        </div>
      </div>
    </section>
  );
}
