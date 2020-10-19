const Base = require('./Base')
module.exports = class Reply extends Base{
  constructor(attr){
    super(attr)
    this.type = 'at'
  }

  qq(qq){
    this.attrtibutes.qq = qq
    return this
  }
}