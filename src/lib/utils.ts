
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date)
}

export function getRandomHistoryFact(): string {
  const facts = [
    "The first human heart transplant was performed on December 3, 1967",
    "On July 20, 1969, humans first set foot on the moon",
    "The Berlin Wall fell on November 9, 1989",
    "The Declaration of Independence was adopted on July 4, 1776",
    "World War II ended in Europe on May 8, 1945",
    "The first iPhone was released on June 29, 2007",
    "The Wright brothers made the first powered flight on December 17, 1903",
    "The Titanic sank on April 15, 1912",
    "The first modern Olympic Games were held in Athens on April 6, 1896",
    "The World Wide Web became publicly available on August 6, 1991"
  ];
  
  return facts[Math.floor(Math.random() * facts.length)];
}

export function generateWaveformPattern(): number[] {
  return Array.from({ length: 30 }, () => Math.random() * 0.8 + 0.2);
}
