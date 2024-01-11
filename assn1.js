function shortestSubstrings(s, x) {
    const result = Array.from({ length: s.length }, (_, start) =>
      Array.from({ length: s.length - start }, (_, end) => ({
        start,
        end: start + end,
      }))
    )
      .flat()
      .filter(({ start, end }) => s[start] === s[end])
      .map(({ start, end }) => s.substring(start, end + 1))
      .filter(substring => substring.length >= x);
  
    return result.length > 0 ? result : ['not-found'];
  }
  
console.log(shortestSubstrings("acbbacab", 5));  