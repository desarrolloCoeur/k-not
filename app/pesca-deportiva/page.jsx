import Image from "next/image";
import {
    FaClock,
    FaMoneyBill,
    FaCalendar,
} from "react-icons/fa";
import ToursHome from "../../components/ToursHome";
import ContactTour from "../../components/ContactTour";
import Link from "next/link";

const pescaDeportiva = () => {
    const tour = {
   
                "title": "Pesca Deportiva",
                "slug" : "pesca-deportiva",
                "imageSlider": "/img/fishing-home.jpeg",
                "shortDescription": "Disfruta de una emocionante experiencia de pesca deportiva en Puerto Vallarta y Nayarit. Atrapa peces de gran tamaño y vive momentos inolvidables en alta mar.",
                "description": "<p>Sumérgete en la emocionante aventura de la pesca deportiva en Puerto Vallarta y Nayarit. Estos destinos ofrecen un entorno privilegiado para la práctica de esta actividad, con aguas ricas en diversidad marina y una amplia variedad de especies que incluyen marlines, atunes, dorados y muchos más.</p> <p> Nuestros tours de pesca deportiva te brindarán la oportunidad de embarcarte en una experiencia inolvidable en alta mar. Acompañado por experimentados capitanes y guías de pesca, te adentrarás en las profundidades del océano en busca de los mejores puntos de pesca.</p><p>Ya sea que seas un pescador experimentado o un principiante entusiasta, nuestros tours están diseñados para adaptarse a tus necesidades. Contamos con embarcaciones equipadas con las últimas tecnologías y equipos de pesca de calidad, garantizando que tengas las mejores oportunidades para atrapar peces de gran tamaño.</p><p>Además de la emoción de la pesca, podrás disfrutar de la belleza natural de la costa de Puerto Vallarta y Nayarit. Contempla impresionantes vistas del océano, las playas y los paisajes circundantes mientras te sumerges en la serenidad de estar rodeado de naturaleza.</p><p>Nuestro equipo estará encantado de brindarte asistencia y consejos durante todo el tour, asegurándonos de que tengas una experiencia memorable y exitosa. Prepara tu caña, atrapa el pez de tus sueños y crea recuerdos duraderos en un tour de pesca deportiva en Puerto Vallarta y Nayarit.</p>",
                "time": "4 horas",
                "price": "1,500",
                "gallery" : [
                    "/img/pesca-deportiva-1.webp","/img/pesca-deportiva-2.webp","/img/pesca-deportiva-3.webp","/img/pesca-deportiva-4.webp","/img/pesca-deportiva-5.webp","/img/pesca-deportiva-6.webp","/img/pesca-deportiva-7.webp","/img/pesca-deportiva-8.webp","/img/pesca-deportiva-9.webp","/img/pesca-deportiva-10.webp","/img/pesca-deportiva-11.webp","/img/pesca-deportiva-12.webp","/img/pesca-deportiva-13.webp","/img/pesca-deportiva-15.webp","/img/pesca-deportiva-16.webp"
                
                ]
    }
  return (
    <>
    <div className="relative ">
        <Image
            className="object-cover w-full h-[28rem] object-center"
            width={1920}
            height={500}
            src={tour.imageSlider}
            alt={tour.title}
        />
        {/* <div className="top-0 left-0 right-0 bottom-0 absolute bg-[rgba(23,37,83,0.5)]"></div>

        <div className="absolute bottom-4 left-0 right-0 mx-auto text-white text-center justify-center drop-shadow-lg max-w-[550px] z-10">
            <p className="text-xl">{tour.shortDescription}</p>
        </div> */}
    </div>
    <div className="container mx-auto w-11/12 ">
        <div className="flex flex-col md:flex-row gap-3 relative my-10">
            <div className="w-full md:w-2/3">
                <div className="flex justify-between w-full flex-col sm:flex-row">
                    <div>
                        <h1>{tour.title}</h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 ">
                        <label className="flex flex-row gap-1 items-center">
                            <FaClock /> {tour.time}
                        </label>
                        <label className="flex flex-row gap-1 items-center">
                            <FaMoneyBill /> {`$ ${tour.price}`}
                        </label>
                    </div>
                </div>

                <div
        className="container mt-5"
        dangerouslySetInnerHTML={{ __html: tour.description }}
      />

                <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 -px-3 mt-3">
                    {tour.gallery.map((image, i) => {
                        return (
                            <Image
                                key={i}
                                src={image}
                                width={500}
                                height={500}
                                alt={tour.title}
                                className="w-full h-60 object-cover"
                            />
                        );
                    })}
                </div>
            </div>
            <div className="w-full md:w-1/3 px-3" id="reservar">
                <ContactTour />
            </div>
        </div>

        <ToursHome title="Otros Tours" />

        <Link href="/tours/#reservar">
            <div className="fixed bottom-3 left-3 bg-blue-900 text-white flex items-center gap-2 px-2 py-2 rounded-md md:hidden">
                <label>RESERVAR!</label>
                <FaCalendar />
            </div>
        </Link>
    </div>
</>
  )
}

export default pescaDeportiva