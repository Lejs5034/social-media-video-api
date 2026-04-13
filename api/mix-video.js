export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { background_url, media_list, voice_url, transcripts } = req.body.data;

    // Fake processing (wir simulieren erstmal)
    const fakeId = Date.now();

    return res.status(200).json({
      success: true,
      data: {
        id: fakeId,
        status: "processing"
      }
    });

  } catch (err) {
    return res.status(500).json({
      error: "Something broke",
      details: err.message
    });
  }
}
