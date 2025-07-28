import Image from "next/image";

const Loader = () => {
  return (
    <div className="absolute h-screen w-full top-0 left-0 bg-gray-700 z-50">
      <Image
        alt="10 minutes school logo"
        width={50}
        height={50}
        src="/images/10mslogo-svg.svg"
      />
    </div>
  );
};

export default Loader;
