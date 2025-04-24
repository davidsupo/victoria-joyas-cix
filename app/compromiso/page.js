import ListProduct from "../components/listProduct/ListProduct";
import PageSection from "../components/pageSection/PageSection";

export default function Compromiso() {
  return (
    <>
      <PageSection
        reverse={true}
        title="Anillos de compromiso"
        image="https://res.cloudinary.com/dufknip09/image/upload/v1737558742/page/k6db7hfzphk8okeb26dt.webp"
        altImage="Anillos de compromiso"
      >
        <p className="text-pretty md:text-xl">
          Los anillos de compromiso son mucho más que una joya: representan el
          inicio de una promesa eterna y el amor que une dos corazones. En <strong>Victoria Joyas</strong>, encontrarás anillos únicos y personalizados, diseñados
          para capturar la esencia de tu historia. Elige entre una variedad de
          estilos, materiales y detalles que harán de este momento algo
          inolvidable.
        </p>
      </PageSection>
      <ListProduct category="COMPROMISO"></ListProduct>
    </>
  );
}
