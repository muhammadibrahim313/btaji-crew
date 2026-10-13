export interface Participant {
  name: string;
  username: string;
  certificateFile: string;
}
export interface StormCostTeam {
  rank: number;
  name: string;
  score: string;
  entries: number;
  members: Participant[];
}
export const stormCost = {
  name: "StormCost",
  url: "https://www.kaggle.com/competitions/storm-cost",
  leaderboardUrl: "https://www.kaggle.com/competitions/storm-cost/leaderboard",
  sourceDate: "11 October 2026",
  closedDate: "8 October 2026",
  description:
    "Predict property damage in dollars from severe-weather incident narratives.",
};
// Final PRIVATE leaderboard, read on 2026-10-11. Preserve source order and precision.
// Member names match the approved certificate PDFs supplied on 2026-10-13.
// Kaggle team names, usernames, ranks, and scores remain unchanged.
// username is the permanent certificate-page ID. PDF filenames may be changed here.
const participant = (name: string, username: string): Participant => ({
  name,
  username,
  certificateFile: `${username}.pdf`,
});
export const stormCostTeams: StormCostTeam[] = [
  {
    rank: 1,
    name: "Mario Nicolae",
    score: "47.95510",
    entries: 9,
    members: [participant("Mario Nicolae", "marionicolae")],
  },
  {
    rank: 2,
    name: "Viet",
    score: "47.10278",
    entries: 11,
    members: [participant("Quoc Viet Nguyen", "vietnguyen1004")],
  },
  {
    rank: 3,
    name: "ZAOUI_Yassine",
    score: "47.01269",
    entries: 64,
    members: [participant("Yassine ZAOUI", "zaouiyassine")],
  },
  {
    rank: 4,
    name: "Nikita Ageev",
    score: "46.71706",
    entries: 8,
    members: [participant("Nikita Ageev", "truenikita")],
  },
  {
    rank: 5,
    name: "Aleesha Nadeem",
    score: "46.53201",
    entries: 9,
    members: [participant("Aleesha Nadeem", "hiddenmind")],
  },
  {
    rank: 6,
    name: "Anila Bukhari",
    score: "46.28638",
    entries: 14,
    members: [participant("Anila Bukhari", "anilabukhari")],
  },
  {
    rank: 7,
    name: "Dmitriy Kompaneets",
    score: "45.87901",
    entries: 61,
    members: [participant("Dmitriy Kompaneets", "dmitriykompaneets")],
  },
  {
    rank: 8,
    name: "SuperHumans",
    score: "45.81021",
    entries: 29,
    members: [
      participant("Ayesha Saleem", "ayeshasal89"),
      participant("Abdul Wahab", "abdulwahab740"),
    ],
  },
  {
    rank: 9,
    name: "Zenith",
    score: "45.70680",
    entries: 45,
    members: [
      participant("Jaswir Raghoe", "jaswirr"),
      participant("Moizza Batool Khan", "moizzabatoolkhan"),
    ],
  },
  {
    rank: 10,
    name: "Omkar Kadam",
    score: "45.37488",
    entries: 137,
    members: [participant("Omkar Kadam", "itzzomkar")],
  },
  {
    rank: 11,
    name: "Anh-Vu Mai-Nguyen",
    score: "44.86533",
    entries: 10,
    members: [participant("Anh-Vu Mai-Nguyen", "mainguyenanhvu")],
  },
  {
    rank: 12,
    name: "Dan13iel",
    score: "44.44398",
    entries: 92,
    members: [participant("Daniel", "dan13iel")],
  },
  {
    rank: 13,
    name: "Mumtaz Ahmad Maitla",
    score: "43.83926",
    entries: 3,
    members: [participant("Mumtaz Ahmad Maitla", "mumtazahmadmaitla")],
  },
  {
    rank: 14,
    name: "Maria Aqdas",
    score: "42.47758",
    entries: 27,
    members: [participant("Maria Aqdas", "mariaaqdas")],
  },
  {
    rank: 15,
    name: "Whethered_Minds",
    score: "42.35429",
    entries: 7,
    members: [
      participant("Hamnah Fatima Khan", "hamnahfkhan"),
      participant("Mehak Gul", "mehakgul06"),
    ],
  },
  {
    rank: 16,
    name: "test_stormcost",
    score: "42.07306",
    entries: 12,
    members: [participant("Michael Semenoff", "michaelsemenoff")],
  },
  {
    rank: 17,
    name: "Pierre",
    score: "41.98744",
    entries: 18,
    members: [participant("Pierre", "dhiamechi")],
  },
  {
    rank: 18,
    name: "Muhammad Saif Waheed",
    score: "41.73831",
    entries: 7,
    members: [participant("Muhammad Saif Waheed", "muhammadsaifwaheed")],
  },
  {
    rank: 19,
    name: "Robert McMenemy",
    score: "41.63771",
    entries: 72,
    members: [participant("Robert McMenemy", "rmcmenemy")],
  },
  {
    rank: 20,
    name: "Noor_ul_Ain Zahid Official",
    score: "41.47750",
    entries: 3,
    members: [participant("Noor ul Ain Zahid", "noorulainzahid")],
  },
  {
    rank: 21,
    name: "The Debuggers",
    score: "41.43953",
    entries: 10,
    members: [
      participant("Maniha Imaan", "maneehaeman"),
      participant("Rao Muhammad Rayan Masood", "rayan444"),
    ],
  },
  {
    rank: 22,
    name: "Avik Das",
    score: "41.09609",
    entries: 4,
    members: [participant("Avik Das", "avikdas567")],
  },
  {
    rank: 23,
    name: "Ahmad Fakhar",
    score: "41.09609",
    entries: 2,
    members: [participant("Ahmad Fakhar", "ahmadfakhar")],
  },
  {
    rank: 24,
    name: "Ailman Khan",
    score: "41.09609",
    entries: 3,
    members: [participant("Ailman Khan", "ailmankhan")],
  },
  {
    rank: 25,
    name: "Zainab&Wali",
    score: "41.00161",
    entries: 54,
    members: [
      participant("Zainab Irfan", "zaini910"),
      participant("Wali Muhammad", "wallimuhammad"),
    ],
  },
  {
    rank: 26,
    name: "Faaiq Ahmed",
    score: "38.97859",
    entries: 2,
    members: [participant("Faaiq Ahmed", "faaiqahmed")],
  },
  {
    rank: 27,
    name: "Fortune Dida",
    score: "38.88554",
    entries: 2,
    members: [participant("Fortune Dida", "fortunedida")],
  },
  {
    rank: 28,
    name: "Muhammad Safwan Ahmad Saffi",
    score: "38.21487",
    entries: 6,
    members: [participant("Muhammad Safwan Ahmad Saffi", "safwanahmadsaffi")],
  },
  {
    rank: 29,
    name: "Julien bertas",
    score: "35.26582",
    entries: 20,
    members: [participant("Julien Bertas", "julienbertas")],
  },
  {
    rank: 30,
    name: "JinchengZhang1",
    score: "35.22446",
    entries: 2,
    members: [participant("Jincheng Zhang", "jinchengzhang1")],
  },
  {
    rank: 31,
    name: "Yanagiguchi",
    score: "34.56564",
    entries: 1,
    members: [participant("Yanagiguchi", "xenosmilus")],
  },
  {
    rank: 32,
    name: "STORM HOME",
    score: "34.56564",
    entries: 1,
    members: [
      participant("Aleena Khalid", "aleenakhalid223"),
      participant("Muhammad Abdullah", "abdullahshafqat27"),
    ],
  },
  {
    rank: 33,
    name: "Waheed Abbas",
    score: "33.95257",
    entries: 3,
    members: [participant("Waheed Abbas", "taqisipra")],
  },
  {
    rank: 34,
    name: "Stormcost ai",
    score: "20.87509",
    entries: 1,
    members: [
      participant("Abdullah Hasan Shah", "abdullahhasanshah"),
      participant("Aiman Babar", "aima1234"),
    ],
  },
  {
    rank: 35,
    name: "Hashir Shaikh",
    score: "1.23690",
    entries: 2,
    members: [participant("Hashir Shaikh", "hashirmnaeem")],
  },
];
export const participantCount = stormCostTeams.reduce(
  (total, team) => total + team.members.length,
  0,
);
export const submissionCount = stormCostTeams.reduce(
  (total, team) => total + team.entries,
  0,
);
export const certificatePath = (member: Participant) =>
  `/competitions/storm-cost/certificates/${member.username}`;
// Never link to a PDF that isn't included in the build.
const certificateFiles = import.meta.glob(
  "/public/certificates/storm-cost/*.pdf",
  { eager: true, query: "?url", import: "default" },
);
export function certificateUrl(member: Participant): string | null {
  return Object.prototype.hasOwnProperty.call(
    certificateFiles,
    `/public/certificates/storm-cost/${member.certificateFile}`,
  )
    ? `/certificates/storm-cost/${encodeURIComponent(member.certificateFile)}`
    : null;
}
export function filterTeams(query: string): StormCostTeam[] {
  const term = query.trim().toLocaleLowerCase();
  return stormCostTeams.filter((team) =>
    [
      team.name,
      String(team.rank),
      ...team.members.flatMap((member) => [member.name, member.username]),
    ].some((value) => value.toLocaleLowerCase().includes(term)),
  );
}
