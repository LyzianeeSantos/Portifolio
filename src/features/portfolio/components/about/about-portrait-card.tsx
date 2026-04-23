import Image from "next/image";

interface AboutPortraitCardProps {
  name: string;
  degree: string;
  imageUrl: string;
}

export function AboutPortraitCard({ name, degree, imageUrl }: AboutPortraitCardProps) {
  return (
    <div className="order-1 relative min-h-[26rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,14,0.94),rgba(8,8,10,0.98))] lg:order-2 lg:min-h-[42rem]">
      <div className="absolute left-5 top-5 z-10 text-[0.68rem] uppercase tracking-[0.32em] text-zinc-300/72 sm:left-7 sm:top-7 sm:text-xs">
        Creative portfolio
      </div>
      <div className="absolute right-5 top-5 z-10 text-[0.68rem] uppercase tracking-[0.32em] text-zinc-300/72 sm:right-7 sm:top-7 sm:text-xs">
        {degree}
      </div>
      <div className="absolute bottom-[-6%] right-[8%] h-[14rem] w-[14rem] rounded-full bg-primary sm:h-[18rem] sm:w-[18rem] lg:bottom-[8%] lg:right-[12%] lg:h-[22rem] lg:w-[22rem]" />
      <div className="absolute inset-x-[14%] bottom-[4%] h-12 rounded-full bg-black/80 blur-[50px]" />
      <Image
        src={imageUrl}
        alt={`Retrato de ${name}`}
        fill
        sizes="(max-width: 1024px) 90vw, 44vw"
        className="object-contain object-bottom"
      />
    </div>
  );
}
