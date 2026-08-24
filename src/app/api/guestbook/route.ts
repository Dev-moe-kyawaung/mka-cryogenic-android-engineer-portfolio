import { db } from "@/db";
import { guestbookEntries } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await db.select().from(guestbookEntries).orderBy(desc(guestbookEntries.createdAt)).limit(50);
    return Response.json({ ok: true, entries: rows });
  } catch {
    return Response.json({ ok: false, entries: [] }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { name?: string; message?: string; lang?: string; frostLevel?: number };
  const name = (body.name ?? "").trim().slice(0, 60);
  const message = (body.message ?? "").trim().slice(0, 500);
  if (!name || !message) return Response.json({ ok: false, error: "name and message required" }, { status: 400 });
  try {
    const [row] = await db
      .insert(guestbookEntries)
      .values({
        name,
        message,
        lang: body.lang === "my" ? "my" : "en",
        frostLevel: Math.min(5, Math.max(1, Number(body.frostLevel) || 1)),
      })
      .returning();
    return Response.json({ ok: true, entry: row });
  } catch {
    return Response.json({ ok: false, error: "database frozen" }, { status: 500 });
  }
}
