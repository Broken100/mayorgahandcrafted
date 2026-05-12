import { Product } from '../types';

export const products: Product[] = [
  {
    id: "classic-bifold",
    name: "Classic Bifold Wallet",
    price: 85,
    description: "A timeless essential, crafted from full-grain vegetable-tanned leather. Features 6 card slots, a full-length bill compartment, and burnished edges for a clean finish.",
    details: [
      "Full-grain vegetable-tanned leather",
      "6 credit card slots",
      "1 bill compartment",
      "Hand-stitched with waxed linen thread",
      "Dimensions: 4.25\" x 3.25\" (closed)"
    ],
    images: [
      "https://images.unsplash.com/photo-1627092104523-e4c19af3bed1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598425257774-71be5ce3efce?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Wallets",
    isFeatured: true
  },
  {
    id: "mayorga-tote",
    name: "The Mayorga Tote",
    price: 245,
    description: "Spacious enough for a 15-inch laptop and your daily essentials. Unlined interior showcasing the natural suede side of our premium leather, complete with an internal drop pocket.",
    details: [
      "Premium full-grain leather",
      "Solid brass hardware",
      "Internal drop pocket for keys/phone",
      "Strap drop length: 11\"",
      "Dimensions: 15\" W x 12\" H x 5.5\" D"
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Bags",
    isFeatured: true
  },
  {
    id: "minimalist-cardholder",
    name: "Minimalist Cardholder",
    price: 45,
    description: "For those who carry exactly what they need and nothing more. Two outer pockets and a central compartment for folded cash.",
    details: [
      "Vegetable-tanned leather",
      "Holds 4-6 cards comfortably",
      "Center pocket for folded bills",
      "Saddle stitched by hand",
      "Dimensions: 4\" x 2.75\""
    ],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1627092100827-0c7daffc62bf?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Wallets"
  },
  {
    id: "signature-belt",
    name: "Mayorga Signature Belt",
    price: 95,
    description: "Built to last a lifetime. Made from a thick 10oz strap of premium leather, featuring a solid brass center bar buckle.",
    details: [
      "10oz premium leather",
      "Solid brass buckle",
      "1.5\" width",
      "Burnished and polished edges"
    ],
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Accessories",
    isFeatured: true
  },
  {
    id: "artisan-dopp-kit",
    name: "Artisan Dopp Kit",
    price: 110,
    description: "A rugged, water-resistant travel companion constructed from heavy-duty waxed canvas and full grain leather accents.",
    details: [
      "Water-resistant interior",
      "Brass zipper closure",
      "Full grain leather handle and trim",
      "Dimensions: 9\" x 5\" x 4.5\""
    ],
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-528256a42211?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Accessories"
  },
  {
    id: "crossbody-pouch",
    name: "Crossbody Pouch",
    price: 165,
    description: "A compact companion for hands-free days. Perfectly sized for a phone, small wallet, keys, and lip balm. Hand stitched with precision.",
    details: [
      "Pebbled full-grain leather",
      "Adjustable strap",
      "Magnetic snap closure",
      "Dimensions: 7\" H x 5\" W x 2\" D"
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Bags"
  },
  {
    id: "leather-key-fob",
    name: "Braided Key Fob",
    price: 35,
    description: "A tough, securely braided leather key fob featuring a sturdy brass clip to attach to your belt loop or bag.",
    details: [
      "Braided full-grain leather",
      "Solid brass hardware",
      "Handmade design",
      "Dimensions: 5\" x 1\""
    ],
    images: [
      "https://images.unsplash.com/photo-1582035985068-15024466b026?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Accessories",
    isFeatured: true
  }
];
