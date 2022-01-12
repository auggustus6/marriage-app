export const formatedNames = (fiance:string, engaged:string) => {
    const woman = fiance.split(" ")[0];
    const men = engaged.split(" ")[0];

    return `${woman.slice(0,7)} & ${men.slice(0,7)}`;
  }