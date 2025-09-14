class TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    // Replace any {{property}} with dictionary[property] or "" if not present
    return this.template.replace(/\{\{([^{}]+)\}\}/g, (_, prop) => {
      // Trim in case of accidental spaces like {{ name }}
      const key = prop.trim();
      return Object.prototype.hasOwnProperty.call(dictionary, key)
        ? String(dictionary[key])
        : "";
    });
  }
}
