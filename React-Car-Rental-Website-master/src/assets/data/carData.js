// import all images from assets/images directory
import img01 from "../all-images/cars-img/pngimg.com_v2 - ferrari_PNG102810.png";
import img02 from "../all-images/cars-img/Aston-Martin-PNG-HD.png";
import img03 from "../all-images/cars-img/be916c85849fecc6267718f0abc5bb3a.png";
import img04 from "../all-images/cars-img/blue-luxury-premium-high-class-600nw-2264788569.webp";
import img05 from "../all-images/cars-img/ef399d76b2bcb8ed0913a215f4d835ea.png";
import img06 from "../all-images/cars-img/bugatti_v2.jpg";


const carData = [
  {
    id: 1,
    brand: "Ferrari",
    rating: 112,
    carName: "Ferrari 488",
    imgUrl: img01,
    model: "488",
    price: 100,
    speed: "360km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Renting a Ferrari 488 offers an exhilarating experience with its 661-horsepower twin-turbo V8 engine. It boasts a top speed of over 223 mph and goes from 0 to 60 mph in just 3 seconds. With its luxurious interior and stunning design, it's perfect for special occasions or a thrilling drive. Enjoy the prestige and performance of this iconic supercar.",
  },

  {
    id: 2,
    brand: "Aston Martin",
    rating: 102,
    carName: "Aston Martin DBS",
    imgUrl: img02,
    model: "DBS",
    price: 80,
    speed: "340km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Renting an Aston Martin DBS provides a thrilling experience with its 715-horsepower twin-turbo V12 engine. It features a top speed of 211 mph and accelerates from 0 to 60 mph in just 3.4 seconds. The DBS combines luxurious craftsmanship with cutting-edge technology, making it perfect for special events or an unforgettable driving adventure. Enjoy the elegance and power of this iconic grand tourer.",
  },

  {
    id: 3,
    brand: "Lamborghini",
    rating: 132,
    carName: "Lamborghini Aventador",
    imgUrl: img03,
    model: "Aventador",
    price: 70,
    speed: "350km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Renting a Lamborghini Aventador delivers a thrilling experience with its 769-horsepower V12 engine and top speed of 217 mph. This supercar accelerates from 0 to 60 mph in just 2.8 seconds. Its aggressive design and luxurious interior make it ideal for special occasions or an adrenaline-filled drive. Enjoy unmatched performance and iconic style with the Aventador",
  },

  {
    id: 4,
    brand: "Bentley",
    rating: 102,
    carName: "Bentley Continental GT",
    imgUrl: img04,
    model: "Continental GT",
    price: 110,
    speed: "335km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Renting a Bentley Continental GT offers a blend of luxury and performance with its 626-horsepower W12 engine. It accelerates from 0 to 60 mph in 3.6 seconds and reaches a top speed of 208 mph. The Continental GT features an opulent interior with handcrafted materials and advanced technology. Its elegant design and smooth ride make it perfect for both city drives and long-distance journeys. Experience the ultimate in refinement and power with this prestigious grand tourer.",
  },

  {
    id: 5,
    brand: "Rolls-Royce",
    rating: 94,
    carName: "Rolls-Royce Wraith",
    imgUrl: img05,
    model: "Wraith",
    price: 150,
    speed: "250km/h",
    gps: "GPS Navigation",
    seatType: "Heated and vetilated seats",
    automatic: "Automatic",
    description:
      " Renting a Rolls-Royce Wraith offers an unparalleled luxury experience with its 624-horsepower V12 engine. It accelerates from 0 to 60 mph in 4.4 seconds, combining power with a smooth, effortless ride. The Wraith's interior features exquisite craftsmanship, with premium materials and advanced technology. Its sleek, iconic design makes it ideal for special events or a sophisticated drive. Enjoy the epitome of elegance and performance with this prestigious grand tourer.",
  },

  {
    id: 6,
    brand: "Bugatti",
    rating: 119,
    carName: "Bugatti Chiron",
    imgUrl: img06,
    model: "Super Sport",
    price: 200,
    speed: "490km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Renting a Bugatti Chiron Super Sport delivers an extraordinary driving experience with its 1,577-horsepower quad-turbo W16 engine. It achieves a top speed of 273 mph and accelerates from 0 to 60 mph in just 2.4 seconds. The Chiron Super Sport features a luxurious interior with cutting-edge technology and bespoke materials. Its aerodynamic design and unparalleled performance make it perfect for an unforgettable and thrilling drive. Experience the pinnacle of automotive engineering and luxury with this iconic hypercar.",
  },

  
];

export default carData;
