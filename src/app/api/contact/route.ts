import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { count } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [row] = await db.select({ total: count() }).from(contactMessages);
    return Response.json({ ok: true, total: row?.total ?? 0 });
  } catch {
    return Response.json({ ok: false, total: 0 }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  const name = (body.name ?? "").trim().slice(0, 80);
  const email = (body.email ?? "").trim().slice(0, 120);
  const subject = (body.subject ?? "General").trim().slice(0, 120);
  const message = (body.message ?? "").trim().slice(0, 2000);

  if (!name || !email.includes("@") || !message) {
    return Response.json({ ok: false, error: "invalid payload" }, { status: 400 });
  }

  try {
    const [row] = await db.insert(contactMessages).values({ name, email, subject, message }).returning();
    return Response.json({ ok: true, id: row.id });
  } catch {
    return Response.json({ ok: false, error: "database frozen" }, { status: 500 });
  }
}
