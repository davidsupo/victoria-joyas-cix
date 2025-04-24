import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="container mx-auto p-4 pt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Sobre nosotros</h1>
          <p className="text-sm md:text-lg mb-4 text-pretty">
            Somos la segunda generación de una familia apasionada por la joyería,
            comprometidos con preservar y perfeccionar el arte que nos ha sido
            legado. Nuestro joyero principal, <strong>Daniel Puicon</strong>, cuenta con un respaldo
            reconocido en el sector. Está inscrito en el <strong>Registro Nacional del
            Artesano</strong>  con la constancia electrónica <strong>N° ART - 043569</strong> y es orgulloso
            socio activo de la <strong>Cámara de Comercio y Producción de Lambayeque.</strong>
          </p>
          <p className="text-sm md:text-lg mb-4 text-pretty">
            En nuestra joyería, la satisfacción del cliente es nuestra prioridad.
            Nos esforzamos por ofrecer un servicio personalizado que se adapta a las
            necesidades y deseos de cada persona. Incluso brindamos la comodidad de
            atención a domicilio para garantizar una experiencia única y exclusiva.
          </p>
          <p className="text-sm md:text-lg mb-4 text-pretty">
            Creemos que cada momento especial merece ser celebrado con joyas que
            reflejen su esencia. Por eso, nuestras piezas no solo destacan por su
            diseño y calidad, sino también por contar con garantía y mantenimiento
            de por vida.
          </p>
          <p className="text-sm md:text-lg mb-4 text-pretty font-bold">
            Al igual que las historias de amor y los momentos inolvidables, nuestras
            joyas son únicas y están hechas para durar toda la vida.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-y-0 md:space-x-8 justify-around py-10 space-y-4">
        <div className="md:w-1/3">
          <Image
            src="/images/camara.webp"
            alt="Imagen 1"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/3">
          <Image
            src="/images/registro.webp"
            alt="Imagen 2"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}