
const orderUpdate = (name, ajax, data) => {
  const ordering = data.map(p => p.id);
  return ajax.put("/ordering", { list: ordering, where: name })
};

export { orderUpdate };
