export const nameRegex: RegExp = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?)){2,}$/u);
export const authorRegex: RegExp = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?)){2,}$/u);
export const titleRegex: RegExp = new RegExp(/^([A-ZÁÉÚŐÓÜÖŰ]([a-záéúőóüöű.]{1,}\s?))/u);
export const isbnRegex: RegExp = new RegExp(/^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/);
