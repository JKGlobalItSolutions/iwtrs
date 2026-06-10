import img1 from "@/assets/img1.jpeg"; // உங்கள் அலுவலகப் புகைப்படம் 1
import img2 from "@/assets/img2.jpeg"; // உங்கள் அலுவலகப் புகைப்படம் 2
import img3 from "@/assets/img3.jpeg"; // உங்கள் அலுவலகப் புகைப்படம் 3
import img4 from "@/assets/img4.jpeg"; // உங்கள் அலுவலகப் புகைப்படம் 4
import img5 from "@/assets/img5.jpeg"; // Cooling Tower
import img6 from "@/assets/img6.jpeg"; // Aeration Tank
import img7 from "@/assets/img7.jpeg"; // Homogenous Tank
import img8 from "@/assets/img8.jpeg"; // MBR
import img9 from "@/assets/img9.jpeg"; // CRS Out
import img10 from "@/assets/img10.jpeg"; // Treated Water

const Gallery = () => {
  const galleryData = [
    { src: img1, title: "Director Cabin" },
    { src: img2, title: "Financial Service" },
    { src: img3, title: "Technical Desk" },
    { src: img4, title: "Collaboration Zone" },
    { src: img5, title: " Cooling Tower" },
    { src: img6, title: " Aeration Tank" },
    { src: img7, title: " Homogenous Tank" },
    { src: img8, title: " MBR" },
    { src: img9, title: " CRS Out" },
    { src: img10, title: " Treated Water" },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Moments</h2>
        <h1 className="text-4xl md:text-5xl font-black text-foreground">Our Office Gallery</h1>
        <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-800 text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;