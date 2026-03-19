export const CAPACITADOR_STORAGE_KEY = "capacitador_unlocked";

export function isCapacitadorUnlocked() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CAPACITADOR_STORAGE_KEY) === "1";
}

export function setCapacitadorUnlocked() {
  if (typeof window === "undefined") return;
  localStorage.setItem(CAPACITADOR_STORAGE_KEY, "1");
}

export function clearCapacitadorUnlocked() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CAPACITADOR_STORAGE_KEY);
}

