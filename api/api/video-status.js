export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Missing id"
      });
    }

    // Fake status logic for now
    return res.status(200).json({
      success: true,
      data: {
        id,
        status: "done",
        url: `/videos/final-${id}.mp4`
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Something broke",
      details: err.message
    });
  }
}
