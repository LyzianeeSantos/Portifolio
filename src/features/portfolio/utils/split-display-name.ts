export function splitDisplayName(name: string) {
  const displayName = name.toUpperCase();
  const [firstName = displayName, ...remainingName] = displayName.split(/\s+/).filter(Boolean);

  return {
    displayName,
    firstName,
    lastName: remainingName.join(" "),
  };
}
