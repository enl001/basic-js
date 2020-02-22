module.exports = function createDreamTeam(members) {
  if (!members) return false;
  if (!Array.isArray(members)) return false;
  return members.filter(m => typeof(m) == 'string')
                .reduce((acc, cur) => acc+=cur.trimLeft().substring(0,1).toUpperCase(),'')
                .split('').sort().join('');
   
};