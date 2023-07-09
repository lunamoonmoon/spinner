let spinThis = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']

spinThis.forEach((value, index) => {
  setTimeout(() => {
    process.stdout.write(value);
  }, 100 * (index +1));
});
