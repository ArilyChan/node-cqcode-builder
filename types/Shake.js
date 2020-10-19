const URL = require('url').URL;
const Base = require('./Base')
module.exports = class Share extends Base{
  constructor(attr){
    super(attr)
    this.type = 'shake'
  }

  toString(){
    return '[CQ:shake]'
  }
}