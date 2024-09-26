export function levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];

    const len1 = str1.length;
    const len2 = str2.length;

    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,  
                    matrix[i - 1][j] + 1    
                );
            }
        }
    }

    return matrix[len1][len2];
}

export function fuzzyFilter(input: string, data: string[], maxDistance: number = 2) {

    if (input == "" || input == undefined) return data
    
    return data.filter(f => {
        return (levenshteinDistance(f.toLowerCase(), input.toLowerCase()) <= maxDistance) || f.includes(input);
    });
}
