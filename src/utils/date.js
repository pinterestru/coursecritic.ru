

export const timeIsoIsNull = (timeIso) => {
  return !timeIso || timeIso.startsWith("1970-") || timeIso.startsWith("000")
}

export const timeIsNull = (time) => {
  return !time || time.getFullYear() === 1970
}



export const prettyDate = (date, locale) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(locale, options);
}