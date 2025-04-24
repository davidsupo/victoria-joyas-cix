import Image from "next/image";

export default function PageSection({ title, image, altImage, reverse, children }) {
  return (
    <div className="container mx-auto p-4 pt-10">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-start space-y-4 md:space-y-0 ${reverse ? 'md:space-x-reverse md:space-x-8' : 'md:space-x-8'}`}>
        <div className="md:w-2/3">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {title}
          </h1>
          {children}
        </div>
        <div className="md:w-1/3">
          <Image
            src={image}
            alt={altImage}
            width={400}
            height={400}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}