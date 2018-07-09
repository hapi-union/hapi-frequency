module.exports = (Model) => {
  return async (query = {}, frequency) => {
    const { amount, interval } = frequency
    query.createdAt = {
      $gt: new Date(Date.now() - interval)
    }
    const arr = await Model.find(query).limit(amount)
    if (arr.length >= amount) {
      return false
    }
    return true
  }
}
