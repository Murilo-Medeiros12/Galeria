import Carousel from "./components/Carousel";

export default function Home() {
  return (
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">Nesse blog tem qualquer informação.</p>
        <Carousel />
      </div>
  );
}