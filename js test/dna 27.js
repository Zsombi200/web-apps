const DNAStrand = (dna) => {
  const dnaMap = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna
    .split("")
    .map((x) => dnaMap[x])
    .join("");
};

console.log(DNAStrand("AAAA")); // 'TTTT'
console.log(DNAStrand("ATTGC")); // 'TAACG'
console.log(DNAStrand("GTAT")); // 'CATA'
