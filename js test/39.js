const songDecoder = (song) => {
  return song.replace(/(WUB)+/g, " ").trim();
};

console.log(songDecoder("AWUBBWUBC"));
// 'A B C' (WUB should be replaced by 1 space)
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
// 'A B C' (Multiples WUBs should be replaced by only 1 space)
console.log(songDecoder("WUBAWUBBWUBCWUB"));
// 'A B C' (Any starting or trailing WUBs should be removed)
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// 'WE ARE THE CHAMPIONS MY FRIEND'
