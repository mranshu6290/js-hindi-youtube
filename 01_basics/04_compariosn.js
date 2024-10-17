/**
 * null > 0 // false
 * null >= 0 // false
 * null == 0 // true
 * Reason: comparison converts null to 0; so >= 0 is true, but > 0 is false.
 * >, <, >=, <= behave differently than ==.
 * 
 * With undefined, everything is false since undefined is not converted.
 * 
 * Strict check:
 * "2" === 2 // checks type as well before
*/