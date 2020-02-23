const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    if(value === undefined) this.chain.push('()');
    if(value!=null) this.chain.push('( '+value.toString()+' )');
    else this.chain.push('( null )');
    return this;
  },
  removeLink(position) {
    if (position === undefined) this.throwError('undefined');
    if (position == null) this.throwError('null');
    if (!Number.isInteger(position)) this.throwError('not integer');
    if (position <= 0 || position > this.getLength()) this.throwError('not valid position');
    this.chain[position-1] = '';
    this.chain = this.chain.filter(Boolean);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
  throwError(error){
    this.chain = [];
    throw error;
  }
};

module.exports = chainMaker;
