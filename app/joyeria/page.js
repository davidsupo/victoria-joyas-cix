import ListProduct from "../components/listProduct/ListProduct";
import PageSection from "../components/pageSection/PageSection";

export default function Joyeria() {
  return (
    <>
      <PageSection
        title="Joyería"
        image="https://res.cloudinary.com/dufknip09/image/upload/v1737558742/page/ogx0gyfo2hpa1mnhrrwf.webp"
        altImage="Joyería"
      >
        <p className="text-pretty md:text-xl">
          Descubre nuestra amplia selección de joyas diseñadas para todos los
          gustos y ocasiones. Desde elegantes aretes y pulseras hasta aros y
          sortijas, ofrecemos piezas únicas elaboradas en distintos materiales y
          estilos. Contamos con opciones para mujeres, hombres y niños,
          asegurándonos de que siempre encuentres la joya perfecta para cada
          momento especial.
        </p>
      </PageSection>
      <ListProduct category="JOYERIA"></ListProduct>
    </>
  );
}
