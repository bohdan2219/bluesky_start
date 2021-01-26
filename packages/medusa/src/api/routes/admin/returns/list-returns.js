import _ from "lodash"

export default async (req, res) => {
  try {
    const returnService = req.scope.resolve("returnService")

    const limit = parseInt(req.query.limit) || 50
    const offset = parseInt(req.query.offset) || 0

    const selector = {}

    const listConfig = {
      relations: ["swap", "order"],
      skip: offset,
      take: limit,
      order: { created_at: "DESC" },
    }

    const returns = await returnService.list(selector, { ...listConfig })

    res.json({ returns, count: returns.length, offset, limit })
  } catch (error) {
    throw error
  }
}
