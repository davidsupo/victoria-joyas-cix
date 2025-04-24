import ListProduct from "../components/listProduct/ListProduct";
import PageSection from "../components/pageSection/PageSection";

export default function Matrimonio() {
  return (
    <>
      <PageSection
        title="Aros de matrimonio"
        image="https://res.cloudinary.com/dufknip09/image/upload/v1737558742/page/kgc6txszgnl2lmj5bwns.webp"
        altImage="Aros de matrimonio"
      >
        <p className="text-pretty md:text-xl">
          Los aros de matrimonio representan la unión eterna y el amor
          verdadero. En <strong>Victoria Joyas</strong>, ofrecemos una amplia
          variedad de diseños, desde estilos atemporales hasta modernos y
          elegantes. Cada aro es completamente personalizable, permitiéndote
          elegir el tipo de metal, color, ancho, grosor, perfil y acabado, para
          que refleje tu historia única de amor.
        </p>
      </PageSection>
      <ListProduct category="MATRIMONIO"></ListProduct>
    </>
  );
}
