/*
 * TypeScript port of Grantismo's climbing-grade.js by Jetse Verschuren
 * https://github.com/Grantismo/climbing-grade.js/
 */

type GradeSystem = {
  grades: string[];
  format?(unFormatted: string): string;
};

const createGradeSystems = <M extends { [key: string]: GradeSystem }>(
  gradeSystems: M
) => gradeSystems;
export const gradeSystems = createGradeSystems({
  yds: {
    grades: [
      "5.1",
      "5.2",
      "5.3",
      "5.4",
      "5.5",
      "5.6",
      "5.7",
      "5.8",
      "5.9",
      "5.10a",
      "5.10b",
      "5.10c",
      "5.10d",
      "5.11a",
      "5.11b",
      "5.11c",
      "5.11d",
      "5.12a",
      "5.12b",
      "5.12c",
      "5.12d",
      "5.13a",
      "5.13b",
      "5.13c",
      "5.13d",
      "5.14a",
      "5.14b",
      "5.14c",
      "5.14d",
      "5.15a",
      "5.15b",
      "5.15c",
      "5.15d",
    ],
  },
  french: {
    grades: [
      "2",
      "2+",
      "3",
      "3+",
      "4",
      "4+",
      "5a",
      "5b",
      "5c",
      "6a",
      "6a+",
      "6b",
      "6b+",
      "6c",
      "6c/6c+",
      "6c+",
      "7a",
      "7a+",
      "7b",
      "7b+",
      "7c",
      "7c+",
      "8a",
      "8a+",
      "8b",
      "8b+",
      "8c",
      "8c+",
      "9a",
      "9a+",
      "9b",
      "9b+",
      "9c",
    ],
  },
  australian: {
    grades: [
      "7",
      "8",
      "9/10",
      "11",
      "12",
      "13",
      "14/15",
      "15/16",
      "17",
      "18",
      "19",
      "20",
      "20/21",
      "21",
      "22",
      "22/23",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
    ],
  },
  south_african: {
    grades: [
      "8",
      "9",
      "10/11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17/18",
      "19",
      "20",
      "21",
      "22",
      "22/23",
      "23/24",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
    ],
  },
  uiaa: {
    grades: [
      "iii-",
      "iii",
      "iii+",
      "iv-",
      "iv",
      "iv+/v-",
      "v-/v",
      "v+/vi-",
      "vi-/vi",
      "vi/vi+",
      "vii-",
      "vii-/vii",
      "vii/vii+",
      "vii+",
      "viii-",
      "viii",
      "viii/viii+",
      "viii+",
      "ix-",
      "ix-/ix",
      "ix/ix+",
      "ix+",
      "x-",
      "x-/x",
      "x/x+",
      "x+",
      "xi-",
      "xi",
      "xi+",
      "xi+/xii-",
      "xii-/xii",
      "xii",
      "xii+",
    ],
    format: (unFormatted) => unFormatted.toUpperCase(),
  },
  british: {
    grades: [
      "m 1",
      "d 2",
      "vd 3a",
      "vd 3b/hvd 3b",
      "hvd 3c/s 3c",
      "ms 4a",
      "s 4b/hs 4b",
      "hs 4b/vs 4b",
      "hvs 4c",
      "hvs 5a",
      "e1 5a",
      "e1 5b",
      "e2 5b",
      "e2 5c",
      "e3 5c",
      "e3 6a",
      "e4 6a",
      "e4 6b",
      "e5 6b",
      "e5 6b/e6 6b",
      "e6 6b",
      "e6 6c",
      "e7 6c",
      "e7 7a",
      "e8 7a",
      "e8 7b",
      "e9 7b",
      "e10 7b",
      "e10 7c",
      "e11 7c",
      "e11 8a",
      "e11 8b",
      "e11 8c",
    ],
    format: (unFormatted) => {
      const gradeParts = unFormatted.split(" ");
      return gradeParts[0].toUpperCase() + " " + gradeParts[1];
    },
  },
  hueco: {
    grades: [
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "vb",
      "v0",
      "v0+",
      "v1",
      "v2",
      "v2",
      "v3",
      "v4",
      "v4",
      "v5",
      "v5",
      "v6",
      "v7",
      "v8",
      "v8",
      "v9",
      "v10",
      "v11",
      "v12",
      "v13",
      "v14",
      "v15",
      "v16",
      "v17",
    ],
    format: (unFormatted) => unFormatted.toUpperCase(),
  },
  font: {
    grades: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1+",
      "2",
      "2+",
      "3",
      "3+",
      "4",
      "4+",
      "5",
      "5+",
      "6a",
      "6a+",
      "6b",
      "6b+",
      "6c",
      "6c+",
      "7a",
      "7a+",
      "7b",
      "7b+",
      "7c",
      "7c+",
      "8a",
      "8a+",
      "8b",
      "8b+",
      "8c",
      "8c+",
      "9a",
    ],
    format: (unFormatted) => unFormatted.toUpperCase(),
  },
  // TODO: Kurtyka?
  kurtyki: {
    grades: [
      "ii",
      "ii+",
      "iii+",
      "iv",
      "iv+",
      "v-",
      "v",
      "v+",
      "vi",
      "vi+",
      "vi.1",
      "vi.1+",
      "vi.2",
      "vi.2",
      "vi.2+",
      "vi.3",
      "vi.3",
      "vi.3+",
      "vi.4",
      "vi.4",
      "vi.4+",
      "vi.5",
      "vi.5+",
      "vi.5+/vi.6",
      "vi.6",
      "vi.6+",
      "vi.7",
      "vi.7+",
      "vi.8",
      "vi.8",
      "vi.8",
      "vi.8",
      "vi.8",
      "vi.8",
    ],
    format: (unFormatted) => unFormatted.toUpperCase(),
  },
});
// TODO: Better name for `gradeSystemsList`
export type gradeSystemsList = keyof typeof gradeSystems;

type Options = { rangeDelimiter?: string; pairDelimiter?: string };

class ClimbingGrade {
  private readonly _rangeDelimiter: string;
  private readonly _pairDelimiter: string;
  private readonly _universalGrades: number[];

  constructor(
    private readonly grade: string,
    private readonly system: keyof typeof gradeSystems,
    options?: Options
  ) {
    this._rangeDelimiter = options?.rangeDelimiter ?? " to ";
    this._pairDelimiter = options?.pairDelimiter ?? "/";

    this._universalGrades = this.getUniversalGrades();
  }

  private static getSystem(system: keyof typeof gradeSystems): GradeSystem {
    const climbingSystem = gradeSystems[system];
    if (climbingSystem) {
      return climbingSystem;
    } else {
      throw new Error("Climbing System Not Recognized");
    }
  }

  private getUniversalGrades(): number[] {
    const normalizedGrade = this.grade.toLowerCase();
    const grades = ClimbingGrade.getSystem(this.system).grades;
    const universalGrades = [];
    for (let i = 0; i < grades.length; i++) {
      if (grades[i].includes(normalizedGrade.toString()) || grades[i].split("/").indexOf(normalizedGrade) > -1){
        universalGrades.push(i);
      } else if (universalGrades.length > 0) {
        break;
      }
    }

    if (universalGrades.length === 0) {
      throw new Error("Climbing Grade Not Recognized");
    }
    return universalGrades;
  }

  format(target: keyof typeof gradeSystems, options?: Options): string {
    const system = ClimbingGrade.getSystem(target);

    if (target === this.system) {
      return ClimbingGrade.formatGrade(this.grade, system);
    }

    const pairDelimiter = options?.pairDelimiter ?? this._pairDelimiter;
    const rangeDelimiter = options?.rangeDelimiter ?? this._rangeDelimiter;

    const gradeSet = Object.create(null);
    const grades = [];
    for (let i = 0; i < this._universalGrades.length; i++) {
      const gradeRange = system.grades[this._universalGrades[i]].split("/");
      for (let j = 0; j < gradeRange.length; j++) {
        const g = gradeRange[j];
        const grade = ClimbingGrade.formatGrade(g, system);
        if (!(grade in gradeSet)) {
          gradeSet[grade] = true;
          grades.push(grade);
        }
      }
    }

    // grades.length === 0 is already prevented internally by getUniversalGrades
    if (grades.length === 1) {
      return grades[0];
    } else if (grades.length === 2) {
      return grades.join(pairDelimiter);
    } else {
      // grades.length > 2
      return grades[0] + rangeDelimiter + grades[grades.length - 1];
    }
  }

  private static formatGrade(g: string, system: GradeSystem): string {
    return system.format?.(g) ?? g;
  }
}

export default ClimbingGrade;
