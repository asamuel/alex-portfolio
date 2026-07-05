type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

type RateLimiterOptions = {
  limit: number;
  windowMs: number;
  cleanupIntervalMs?: number;
};

type RateLimitResult = {
  success: boolean;
  remaining: number;
};

export class RateLimiter {
  private readonly store = new Map<string, RateLimitEntry>();
  private readonly limit: number;
  private readonly windowMs: number;
  private readonly cleanupIntervalMs: number;
  private lastCleanup = 0;

  constructor({ limit, windowMs, cleanupIntervalMs = 60_000 }: RateLimiterOptions) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.cleanupIntervalMs = cleanupIntervalMs;
  }

  limitRequest(key: string): RateLimitResult {
    const now = Date.now();

    this.cleanupExpiredEntries(now);

    const entry = this.store.get(key);

    if (!entry || entry.expiresAt <= now) {
      this.store.set(key, {
        count: 1,
        expiresAt: now + this.windowMs,
      });

      return {
        success: true,
        remaining: this.limit - 1,
      };
    }

    if (entry.count >= this.limit) {
      return {
        success: false,
        remaining: 0,
      };
    }

    entry.count += 1;

    return {
      success: true,
      remaining: this.limit - entry.count,
    };
  }

  private cleanupExpiredEntries(now: number) {
    if (now - this.lastCleanup < this.cleanupIntervalMs) {
      return;
    }

    for (const [key, entry] of this.store.entries()) {
      if (entry.expiresAt <= now) {
        this.store.delete(key);
      }
    }

    this.lastCleanup = now;
  }
}
