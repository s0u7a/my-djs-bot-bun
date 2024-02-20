const { connect } = require('net');

async function hping(ip, port) {
  const start = performance.now();
  try {
    const conn = await connect({
      host: ip,
      port,
      timeout: 10000,
    });
    const end = performance.now();
    const result = `[${ip}:${port}] Open (${(end - start).toFixed(3)} ns)`;
    conn.end();
    return result;
  } catch (err) {
    return `[${ip}:${port}] Closed`;
  }
}

module.exports = hping;
