async function test() {
  const body = {
    sender: { name: "BitBattles Test", email: "disasterdock@gmail.com" },
    to: [{ email: "sannidhyast15@gmail.com" }],
    subject: "Test from API",
    htmlContent: "<p>Hello</p>",
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": "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",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    });
    
    if (!res.ok) {
      console.error("FAILED:", res.status, await res.text());
    } else {
      console.log("SUCCESS:", await res.json());
    }
  } catch (err) {
    console.error("NETWORK ERROR:", err);
  }
}

test();
