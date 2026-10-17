import { describe, expect, it } from "vitest";
import { MBA_LINKS } from "@/data/mba-links";

describe("MBA referral destinations", () => {
  it("uses the dedicated MBA website, not an internal placeholder", () => {
    expect(MBA_LINKS.website).toBe("https://mba.hsinhsin.ca");
  });
  it.each([
    ["program", "https://mba.hsinhsin.ca/programs/uk-online-mba"],
    ["eligibility", "https://mba.hsinhsin.ca/eligibility"],
    ["tuition", "https://mba.hsinhsin.ca/tuition"],
    ["consultation", "https://mba.hsinhsin.ca/consultation"],
    ["faq", "https://mba.hsinhsin.ca/faq"],
  ] as const)("routes %s to its specified destination", (key, destination) => {
    expect(MBA_LINKS[key]).toBe(destination);
  });
});