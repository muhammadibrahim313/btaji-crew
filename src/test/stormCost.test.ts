import { describe, expect, it } from "vitest";
import {
  certificatePath,
  certificateUrl,
  filterTeams,
  participantCount,
  stormCostTeams,
} from "@/data/stormCost";

describe("StormCost final standings and participant certificates", () => {
  it("preserves all source ranks and gives every participant a unique permanent URL", () => {
    expect(stormCostTeams.map((team) => team.rank)).toEqual(
      Array.from({ length: 35 }, (_, i) => i + 1),
    );
    expect(participantCount).toBe(42);
    const members = stormCostTeams.flatMap((team) => team.members);
    expect(new Set(members.map(certificatePath)).size).toBe(42);
    expect(
      stormCostTeams.filter((team) => team.members.length === 2),
    ).toHaveLength(7);
  });
  it("finds a teammate by name or username without changing the shared rank or dropping the other member", () => {
    const [team] = filterTeams("  ABDULWAHAB740  ");
    expect(team.rank).toBe(8);
    expect(team.score).toBe("45.81021");
    expect(team.members.map((member) => member.name)).toEqual([
      "Ayesha Saleem",
      "Abdulwahab",
    ]);
    expect(filterTeams("SuperHumans")).toEqual([team]);
    expect(filterTeams("Ayesha Saleem")).toEqual([team]);
    expect(filterTeams("nonexistent participant")).toEqual([]);
    expect(filterTeams("")).toHaveLength(35);
  });
  it("does not advertise a PDF for a missing file", () => {
    expect(
      certificateUrl({
        name: "Missing",
        username: "missing",
        certificateFile: "missing-test-file.pdf",
      }),
    ).toBeNull();
  });
});
