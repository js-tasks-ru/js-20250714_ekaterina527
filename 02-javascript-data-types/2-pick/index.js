/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const obj_new = Object.entries(obj).filter(([key, value]) => {
        if (fields.includes(key)) {
        return [key, value]; 
        }
    });      
    return Object.fromEntries(obj_new);
};
