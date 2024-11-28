document.getElementById('obfuscateBtn').addEventListener('click', () => {
  const suki = document.getElementById('luaInput').value;
  if (!suki.trim()) {
    alert('Please enter a Lua script to obfuscate!');
    return;
  }
  
  const obfuscated = suki
    .split('')
    .map(char => char.charCodeAt(0).toString(10))
    .join('\\');

  document.getElementById('luaOutput').value = `-- Obfuscated Lua Script --\nload([[\\${obfuscated}]])()`;
});
