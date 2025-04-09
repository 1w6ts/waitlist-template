import { getWaitlistCount } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const count = await getWaitlistCount();

    return NextResponse.json({ count });
  } catch (error) {
    console.error("API Error fetching waitlist count:", error);

    return NextResponse.json(
      { message: "Failed to retrieve waitlist count." },
      { status: 500 }
    );
  }
}
