const specialChars = {
  '&': '&amp;',
  '[': '&#91;',
  ']': '&#93;',
  ',': '&#44;'
}

module.exports = class CQCode {
  constructor(attrs = {}){
    this.type = 'base'
    this.attrtibutes = {...attrs}
  }

  testRequiredFields(){
    return true
  }

  escapeSpecialChars(chars){
    Object.entries(specialChars).map(([find,replace]) => {
      chars = chars.replaceAll(find,replace)
    })
    return chars
  }

  toString(){
    this.testRequiredFields()
    const list = []
    list.push(`CQ:${this.type}`)
    list.push(Object.entries(this.attrtibutes).map(([key,value]) => `${key}=${this.escapeSpecialChars(value)}`))
    return `[${list.join(',')}]`
  }
}