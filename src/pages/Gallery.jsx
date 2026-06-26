import img1 from "@/assets/img1.jpeg"; 
import img2 from "@/assets/img2.jpeg"; 
import img11 from "@/assets/img11.jpeg";
import img3 from "@/assets/img3.jpeg"; 
import img4 from "@/assets/img4.jpeg"; 
import img5 from "@/assets/img5.jpeg"; 
import img6 from "@/assets/img6.jpeg"; 
import img7 from "@/assets/img7.jpeg"; 
import img8 from "@/assets/img8.jpeg"; 
import img9 from "@/assets/img9.jpeg"; 
import img10 from "@/assets/img10.jpeg"; 
import img12 from "@/assets/img12.jpeg"; 
import img13 from "@/assets/img13.jpeg"; 
import img14 from "@/assets/img14.jpeg"; 
import img15 from "@/assets/img15.jpeg"; 
import img16 from "@/assets/img16.jpeg"; // image_6ff225.png
import img17 from "@/assets/img17.jpeg"; // image_6ff262.png
import img18 from "@/assets/img18.jpeg"; // image_6ff29b.png
import img19 from "@/assets/img19.jpeg"; // image_6ff2ba.png

const Gallery = () => {
  const galleryData = [
    { src: img1, title: "Director Cabin" },
    { src: img2, title: "Financial Service" },
    { src: img11, title: "Human Resources Desk" },
    { src: img3, title: "Technical Desk" },
    { src: img4, title: "Collaboration Zone" },
    { src: img5, title: "Cooling Tower" },
    { src: img6, title: "Aeration Tank" },
    { src: img7, title: "Homogenous Tank" },
    { src: img8, title: "MBR" },
    { src: img9, title: "CRS Out" },
    { src: img10, title: "Treated Water" },
    { src: img12, title: "Ultra Filtration" },
    { src: img13, title: "Degasser" },
    { src: img14, title: "Lamella Clarifier" },
    { src: img15, title: "New Item" },
    { src: img16, title: "RO Plant Maintenance" },
    { src: img17, title: "Degasser System Operation" },
    { src: img18, title: "System Inspection" },
    { src: img19, title: "Operational Monitoring" },
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