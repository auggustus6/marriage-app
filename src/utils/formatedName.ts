export const formatedNames = (fiance:string, engaged:string) => {
    const woman = fiance.split(" ")[0];
    const men = engaged.split(" ")[0];

    return `${woman} & ${men}`;
  }