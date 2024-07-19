export const formatName = (str?: string): string => str ? capitalise(removeDash(str)) : ''

export const capitalise = (str: string): string => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
export const removeDash = (str: string): string => str.replace(/-/g, ' ')

export const formatFlavorText = (text: string): string => text
  .replace(/\u00AD/g, '')
  .replace(/\u000C/g, ' ')
  .replace(/u' -\n'/, ' - ')
  .replace(/u'-\n'/, '-')
  .replace(/(\r\n|\n|\r)/gm, ' ')