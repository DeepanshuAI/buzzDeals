// Deal data based on real BuzDealz product ecosystem
export const deals = [
  {
    id: 1,
    brand: 'Nike',
    title: 'Air Max 90 Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    originalPrice: 8995,
    memberPrice: 5397,
    category: 'Footwear',
    verified: true,
    trending: true,
    endingSoon: false,
  },
  {
    id: 2,
    brand: 'Foxtale',
    title: 'Vitamin C Brightening Serum 30ml',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    originalPrice: 1099,
    memberPrice: 659,
    category: 'Beauty',
    verified: true,
    trending: true,
    endingSoon: true,
  },
  {
    id: 3,
    brand: "Levi's",
    title: '501 Original Fit Jeans - Dark Wash',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    originalPrice: 5999,
    memberPrice: 3599,
    category: 'Fashion',
    verified: true,
    trending: false,
    endingSoon: false,
  },
  {
    id: 4,
    brand: 'Dot & Key',
    title: 'CICA Calming Moisturizer SPF 25',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    originalPrice: 695,
    memberPrice: 417,
    category: 'Beauty',
    verified: true,
    trending: false,
    endingSoon: true,
  },
  {
    id: 5,
    brand: 'Rare Rabbit',
    title: 'Classic Polo T-Shirt - Navy Blue',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop',
    originalPrice: 2999,
    memberPrice: 1799,
    category: 'Fashion',
    verified: true,
    trending: true,
    endingSoon: false,
  },
  {
    id: 6,
    brand: 'Bewakoof',
    title: 'Oversized Graphic Printed Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    originalPrice: 1899,
    memberPrice: 1139,
    category: 'Fashion',
    verified: true,
    trending: false,
    endingSoon: false,
  },
  {
    id: 7,
    brand: 'mCaffeine',
    title: 'Coffee Body Scrub 100g',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    originalPrice: 499,
    memberPrice: 299,
    category: 'Beauty',
    verified: true,
    trending: true,
    endingSoon: false,
  },
  {
    id: 8,
    brand: 'Campus',
    title: 'Hurricane Running Shoes - White',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop',
    originalPrice: 3499,
    memberPrice: 2099,
    category: 'Footwear',
    verified: true,
    trending: false,
    endingSoon: true,
  },
];

import { Shirt, Footprints, ShoppingBag, Droplet, Watch, Wind, SprayCan, Tags, BadgePercent, Users } from 'lucide-react';

export const categories = [
  { id: 1, name: 'Fashion', icon: Shirt, count: 120 },
  { id: 2, name: 'Beauty', icon: SprayCan, count: 85 },
  { id: 3, name: 'Footwear', icon: Footprints, count: 60 },
  { id: 4, name: 'Accessories', icon: ShoppingBag, count: 45 },
  { id: 5, name: 'Skincare', icon: Droplet, count: 55 },
  { id: 6, name: 'Watches', icon: Watch, count: 30 },
  { id: 7, name: 'Fragrances', icon: Wind, count: 25 },
];

import jackJonesLogo from '../assets/jack-and-jones-seeklogo.png';
import levisLogo from '../assets/levis-logo.png';
import rareRabbitLogo from '../assets/rare-rabbit.jfif';
import campusLogo from '../assets/CAMPUS.NS.png';
import snitchLogo from '../assets/snitch.svg';

export const brands = [
  { id: 1, name: 'Nike', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { id: 2, name: "Levi's", logoUrl: levisLogo },
  { id: 3, name: 'Rare Rabbit', logoUrl: rareRabbitLogo },
  { id: 4, name: 'Foxtale', logoUrl: 'https://foxtale.in/cdn/shop/files/foxtale_logo_new_8a6ed63b-6f81-4ba2-b2d4-34e8574c8286_280x.png' },
  { id: 5, name: 'Dot & Key', logoUrl: 'https://dotandkey.com/cdn/shop/files/logo_e0d9b6ce-74f0-4fb9-a035-77a884fc5bfa_500x.png' },
  { id: 6, name: 'Bewakoof', logoUrl: 'https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-4500-v2.svg' },
  { id: 7, name: 'mCaffeine', logoUrl: 'https://www.mcaffeine.com/cdn/shop/files/mCaffeine_logo_1.png' },
  { id: 8, name: 'Campus', logoUrl: campusLogo },
  { id: 9, name: 'Snitch', logoUrl: snitchLogo },
  { id: 10, name: 'Sugar', logoUrl: 'https://in.sugarcosmetics.com/cdn/shop/files/sugar-logo-header.png' },
];

export const stats = [
  { value: '300+', label: 'Premium Brands', icon: Tags, iconColor: 'text-primary' },
  { value: '₹15,000+', label: 'Avg. Yearly Savings', icon: BadgePercent, iconColor: 'text-amber-500' },
  { value: '₹2,500+', label: 'Avg. Per Shopping', icon: ShoppingBag, iconColor: 'text-amber-500' },
  { value: '10,000+', label: 'Happy Members', icon: Users, iconColor: 'text-success' },
];

export const howItWorks = [
  {
    step: 1,
    title: 'Join BuzDealz',
    description: 'Become a member in under a minute and unlock exclusive pricing.',
  },
  {
    step: 2,
    title: 'Browse Exclusive Deals',
    description: 'Explore 300+ premium brands with member-only offers.',
  },
  {
    step: 3,
    title: 'Shop on Brand Websites',
    description: 'Click through to official brand stores and check out directly.',
  },
];
