import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute h-screen flex items-center justify-center w-full top-0 left-0 bg-gray-100 z-50">
      <Image
        alt="10 minutes school logo"
        width={500}
        height={50}
        src="/images/10mslogo-svg.svg"
      />
    </div>
  );
};

export default Loader;
