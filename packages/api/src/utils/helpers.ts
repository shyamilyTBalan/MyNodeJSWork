
export const generateInsertSql = (
  table: string,
  rows: { [key: string]: any } | Array<{ [key: string]: any }>

) => {

  const concatenatedRows = ([] as object[]).concat(rows);
  const columns = Object.keys(concatenatedRows[0]);
  const values = concatenatedRows
    .map((row: { [key: string]: any }) => {
      const formattedValues = Object.keys(row).map(column => {
        const value = row[column] || "null";
        return typeof value === "string" ? `'${value}'` : value;
      });
      return `(${formattedValues.join(",")})`;
    })
    .join(",");

  return `INSERT INTO ${table}(${columns}) values${values}`.replace(
    /'null'/g,
    "null"
  );
};
