// src/lib/access.ts
import { cookies } from "next/headers";

/** Retourne true si le cookie gs_unlock=1 est présent (accès avancé activé). */
export async function hasUnlockedAccess(): Promise<boolean> {
  try {
    // Sur ta config, cookies() est asynchrone
    const c = await cookies();
    return c.get("gs_unlock")?.value === "1";
  } catch {
    return false;
  }
}
