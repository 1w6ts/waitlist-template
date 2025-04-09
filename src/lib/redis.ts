import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

export async function addToWaitlist(email: string): Promise<boolean> {
  try {
    const exists = await redis.sismember("waitlist", email);
    if (exists) {
      return false;
    }
    await redis.sadd("waitlist", email);

    await redis.hset("waitlist:timestamps", {
      [email]: new Date().toISOString(),
    });

    return true;
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    return false;
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const count = await redis.scard("waitlist");
    return count as number;
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return 0;
  }
}
