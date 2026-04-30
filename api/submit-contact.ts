export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.NETLIFY_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID;

  if (!token || !siteId) {
    return res.status(500).json({ error: "Missing Netlify credentials" });
  }

  try {
    // 1. Get all forms for this site
    const formsResponse = await fetch(
      `https://api.netlify.com/api/v1/sites/${siteId}/forms`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const forms = await formsResponse.json();
    let form = forms.find((f) => f.name === "contact");

    // 2. If form doesn't exist, create it
    if (!form) {
      const createResponse = await fetch(
        `https://api.netlify.com/api/v1/sites/${siteId}/forms`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: "contact" }),
        },
      );

      form = await createResponse.json();
    }

    // 3. Submit the message to the form
    const submitResponse = await fetch(
      `https://api.netlify.com/api/v1/forms/${form.id}/submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req.body),
      },
    );

    const text = await submitResponse.text();

    if (!submitResponse.ok) {
      return res.status(500).json({ error: text });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
