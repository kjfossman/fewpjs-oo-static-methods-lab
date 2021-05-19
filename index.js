class Formatter {
  //add static methods here
  static capitalize(string) {
      let arr = string.split('')
      let newString = (arr[0].toUpperCase() + arr.slice(1)).split(',').join('')
      return newString
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(title) {
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = title.split(' ')
    array[0] = Formatter.capitalize(array[0])
    let newArray = array.slice(1)
    newArray = newArray.map(word => 
        if(!badWords.includes(word)){
          Formatter.capitalize(word)
        }
    return newArray
}