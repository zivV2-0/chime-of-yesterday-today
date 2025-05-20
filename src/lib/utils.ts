
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

export function getHistoryFactByDate(date: Date): string {
  // Get month and day to find events for this day in history
  const month = date.getMonth(); // 0-11
  const day = date.getDate(); // 1-31
  
  const historicalEvents = {
    // January
    "0-1": "On January 1, 1863, Abraham Lincoln issued the Emancipation Proclamation",
    "0-15": "On January 15, 1929, Martin Luther King Jr. was born in Atlanta, Georgia",
    // February
    "1-4": "On February 4, 2004, Facebook was launched by Mark Zuckerberg",
    "1-14": "On February 14, 1929, the Valentine's Day Massacre occurred in Chicago",
    // March
    "2-10": "On March 10, 1876, Alexander Graham Bell made the first telephone call",
    "2-14": "On March 14, 1879, Albert Einstein was born in Ulm, Germany",
    // April
    "3-15": "On April 15, 1912, the Titanic sank in the North Atlantic Ocean",
    "3-26": "On April 26, 1986, the Chernobyl nuclear disaster occurred in Ukraine",
    // May
    "4-8": "On May 8, 1945, World War II ended in Europe (V-E Day)",
    "4-21": "On May 21, 1881, Clara Barton founded the American Red Cross",
    // June
    "5-6": "On June 6, 1944, D-Day, the Allied invasion of Normandy, began",
    "5-28": "On June 28, 1914, Archduke Franz Ferdinand was assassinated, leading to WWI",
    // July
    "6-4": "On July 4, 1776, the United States Declaration of Independence was adopted",
    "6-20": "On July 20, 1969, Apollo 11 landed on the moon",
    // August
    "7-6": "On August 6, 1991, the World Wide Web became publicly available",
    "7-25": "On August 25, 1916, the US National Park Service was established",
    // September
    "8-11": "On September 11, 2001, terrorist attacks occurred in the United States",
    "8-27": "On September 27, 1905, Albert Einstein published the theory of special relativity",
    // October
    "9-29": "On October 29, 1929, the stock market crashed, beginning the Great Depression",
    "9-31": "On October 31, 1517, Martin Luther published his 95 Theses",
    // November
    "10-9": "On November 9, 1989, the Berlin Wall fell",
    "10-22": "On November 22, 1963, President John F. Kennedy was assassinated",
    // December
    "11-7": "On December 7, 1941, Pearl Harbor was attacked, leading the US to enter WWII",
    "11-25": "On December 25, 336 AD, the first recorded celebration of Christmas in Rome"
  };
  
  // Create a key from the month and day
  const key = `${month}-${day}`;
  
  // Return the historical event for this date or a default message
  return historicalEvents[key] || 
    `On ${formatDate(date)}, no major historical event is recorded in our database`;
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

export function getTodaysHistoryFact(): string {
  const today = new Date();
  return getHistoryFactByDate(today);
}

export function generateWaveformPattern(): number[] {
  return Array.from({ length: 30 }, () => Math.random() * 0.8 + 0.2);
}
