function vowelsAndConsonants(s) {
    let j = 0;
    const m = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'a' ||
            s[i] === 'e' ||
            s[i] === 'i' ||
            s[i] === 'o' ||
            s[i] === 'u') {
            console.log(`${s[i]}`);
        } else {
            m[j] = s[i];
            j += 1;
        }
    }
    for (let i = 0; i < m.length; i++) {
        console.log(`${m[i]}`);
    }
}