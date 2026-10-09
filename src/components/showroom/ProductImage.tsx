import type { Product } from "@/lib/types";
import Image from "next/image";
import { officialAssetSrc } from "@/lib/utils";

export function ProductImage({
  product,
  priority = false,
  className = "",
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  if (product.heroImageUrl) {
    return (
      <Image
        src={officialAssetSrc(product.heroImageUrl)}
        alt={product.name}
        fill
        priority={priority}
        sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-contain ${className}`}
      />
    );
  }
  return (
    <div className={`flex h-full min-h-64 items-center justify-center bg-[#f2f7f1] ${className}`}>
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#119c3a]">Official image pending</p>
        <p className="mt-2 text-2xl font-black text-[#111611]">{product.name}</p>
      </div>
    </div>
  );
}
