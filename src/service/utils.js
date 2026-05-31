import { versionType } from "../constants";

export const getVersion = (versionId, locale) => {
  let version = versionId;
  if (!version && locale) {
    if (versionType === "locale") {
      version = locale.split("-")[0].toLowerCase();
    } else {
      if (locale.includes("-")) {
        version = locale.split("-")[1].toLowerCase();
      } else {
        version = locale.toLowerCase();
      }
    }
  }
  return version;
};

const variableRegex = /\{\{(.*?)\}\}/g;

export const replaceVariables = (value, obj) => {
  if (!value) {
    return value;
  }
  const variableList = [...value.matchAll(variableRegex)];
  const variableDict = {};
  variableList.forEach((l) => {
    const variableInitial = l[0];
    const variable = l[1];
    variableDict[variable] = variableInitial;
  });
  Object.keys(variableDict).forEach((variable) => {
    variable = variable.trim();
    const variableSplit = variable.split("__");
    const action = variableSplit[1] || "";
    const variableProcessed = variableSplit[0];
    const variableInitial = variableDict[variable];
    let replaceValue = obj[variableProcessed] || "";

    if (replaceValue && action) {
      if (action === "upper") {
        replaceValue = replaceValue.toUpperCase();
      } else if (action === "lower") {
        replaceValue = replaceValue.toLowerCase();
      }
    }

    value = value.replaceAll(variableInitial, replaceValue);
  });
  return value;
};

export const replaceAll = (string, search, replace) => {
  return string.split(search).join(replace);
};

export const replaceIfExists = (value, key, valueReplace) => {
  if (!value) return value;
  if (value.includes(key)) {
    return replaceAll(value, key, valueReplace);
  }
  return value;
};


export const overrideField = (page1, page2, field) => {
  if (!page2) {
      return page1
  }
  if (!page2[field]) {
      return page1
  }
  const value = page2[field] || page1[field] || undefined
  if (value) {
      page1[field] = value
  }
  return page1
}