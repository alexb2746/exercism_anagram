class Anagram {
    constructor (str) {
        this.compare = str;
        this.str = str;
    }
    matches(arr) {
        typeof arr !== "object" ? arr = Array.from(arguments) : arr = arr;
        arr = arr.filter(word => word.length == this.str.length && word.toLowerCase() !== this.str);
        return arr.filter(match => {
            this.compare = this.str.toLowerCase();
            for (let i = 0; i < match.length; i++) {
                let index = this.compare.indexOf(match[i].toLowerCase());
                index !== -1 ? this.compare = this.compare.substr(0, index) + this.compare.substr(index + 1) : match = false;
            }
            return match;
        });
    }
}

module.exports = Anagram;
