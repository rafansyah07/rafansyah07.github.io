document.getElementById('obfuscateBtn').addEventListener('click', () => {
  const luaInput = document.getElementById('luaInput').value;
  if (!luaInput.trim()) {
    alert('Please enter a Lua script to obfuscate!');
    return;
  }
  
  // Basic simulation of obfuscation (for demonstration purposes)
  const obfuscated = luaInput
    .split('')
    .map(char => char.charCodeAt(0).toString(10))
    .join('\\');

  document.getElementById('luaOutput').value = `-- Obfuscated Lua Script --\nload([[\\${obfuscated}]])()`;
});
