export const getFileSize = (bytes: number) => {
  if (bytes < 1024) {
    return bytes + 'bytes'
  }
  if (bytes > 1024 && bytes < 1048576) {
    return (bytes / 1024).toFixed(2) + 'KB'
  }
  if (bytes < 1048576) {
    return (bytes / 1024 ** 2).toFixed(2) + 'MB'
  }

  return (bytes / 1024 ** 3).toFixed(2) + 'GB'
}
