const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if (!sampleActivity) return false;
  if (typeof(sampleActivity)!='string') return false;
  let sampleActivityNum = parseFloat(sampleActivity);
  if (Number.isNaN(sampleActivityNum) || sampleActivityNum <=0 || sampleActivityNum > MODERN_ACTIVITY) return  false;
  return  Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNum)/0.693*HALF_LIFE_PERIOD);
};
